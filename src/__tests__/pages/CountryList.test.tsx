import React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import CountriesList from '../../pages/CountriesList/CountriesList';

import { MockedProvider } from '@apollo/client/testing';
import { LIST } from '../../graphql/queries';

import { BrowserRouter } from 'react-router-dom';

const mocks = [
  {
    request: {
      query: LIST,
      variables: { term: '' },
    },
    result: {
      data: {
        list: [
          {
            area: 8515767,
            capital: 'Brasília',
            flag: { svgFile: 'https://restcountries.eu/data/bra.svg' },
            nameTranslations: [{ value: 'Brasil' }],
            population: 206135893,
            topLevelDomains: [{ name: '.br' }],
            _id: '661',
          },
        ],
      },
    },
  },
];

describe('Country List page component', () => {
  afterEach(cleanup);
  it('renders Country list page component without errors', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CountriesList />
      </MockedProvider>
    );

    waitFor(() => expect(screen.getByTestId('countries-list')).not.toBeNull());
  });

  it('should render error UI', async () => {
    const errorMock = {
      request: {
        query: LIST,
      },
      error: new Error('fail'),
    };
    render (<MockedProvider mocks={[errorMock]} addTypename={false}>
        <CountriesList />
      </MockedProvider>
      )
    
    waitFor(() => expect(screen.getByText('Failed :(')).not.toBeNull());
  });
  it('should render loading state initially', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CountriesList />
      </MockedProvider>
    );

    waitFor(() => expect(screen.getByText('Loading...')).not.toBeNull());
  });
});
