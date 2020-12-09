import React from "react";
import { render, screen, wait, fireEvent, waitFor } from "@testing-library/react";
import CountryEdit from '../../pages/CountryEdit/CountryEdit';

import { MockedProvider } from '@apollo/client/testing';
import { DETAILS } from '../../graphql/queries';

import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';

const renderWithRouter = (ui, { route = '/softplan/661' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, { wrapper: BrowserRouter })
}

const mocks = [
	{ 
		request: { 
			query: DETAILS, 
			variables: { id: '3'}
		},
		result: { 
			data: {
				details: {
                    _id: '3',
                    name: 'Afghanistan',
                    area: 652230,
                    capital: 'Kabul',
                    flag: { svgFile: 'https://restcountries.eu/data/afg.svg' },
                    population: 27657145,
                    location: {
                      latitude: 60.116667,
                      longitude: 19.9,
                    },
                    topLevelDomains: [{ name: '.af' }],
				}
			}
		}
	}
];

const match = {
	params: {
		id: "3"
	}
};

describe('Edit component', () => {
	it('renders country edit page component without errors', async () => {
        const history = createMemoryHistory()
		renderWithRouter(
			<MockedProvider mocks={mocks} addTypename={false}>
				<CountryEdit history={history} match={match} />	
			</MockedProvider>
		);
		await waitFor(() => expect(screen.getByTestId('country-edit')).not.toBeNull());
            
	});

	it('should show error UI', async () => {
		const errorMock = {
			request: {
			query: DETAILS,
			variables: { id: '661' },
			},
			error: new Error('fail'),
        };
        const history = createMemoryHistory();
        
        renderWithRouter(
            
			<MockedProvider mocks={[errorMock]} addTypename={false}>
				<CountryEdit history={history} match={match} />	
			</MockedProvider>
		);

		await waitFor(() => expect(screen.getByText("Failed :(")).not.toBeNull());
	});

	it('should render loading state initially', async () => {
        const history = createMemoryHistory();
		renderWithRouter(
			<MockedProvider mocks={mocks}>
				<CountryEdit history={history} match={match} />	
			</MockedProvider>
		);
		await waitFor(() => expect(screen.getByText("Loading...")).not.toBeNull());
	});

	it("check if date is undefined", async () => {
		const notFindMock = { 
			request: { 
				query: DETAILS, 
				variables: { id: "661"}
			},
			result: { 
				data: undefined
			}
        };		
        const history = createMemoryHistory();
	
		renderWithRouter(
			<MockedProvider mocks={[notFindMock]}>
				<CountryEdit history={history} match={match} />	
			</MockedProvider>
		);
		await waitFor(() => expect(screen.getByText("Loading...")).not.toBeNull());
	});

	it("render country edit page with the object to be edited", async () => {
		const history = createMemoryHistory()
		render(
			<MockedProvider mocks={mocks}>
				<Router history={history}>
			      <CountryEdit match={match} history={history} />
			    </Router>	
			</MockedProvider>
		);
		await waitFor(() => fireEvent.submit(screen.getByTestId("edit-container")));
	});
});