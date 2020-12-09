import React from 'react';
import {
  render,
  screen,
  cleanup,
  waitFor,
} from '@testing-library/react';
import CountryDetail from '../../pages/CountryDetail/CountryDetail';

import { MockedProvider } from '@apollo/client/testing';
import { DETAILS } from '../../graphql/queries';

import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui, { route = '/countries/3' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

const mocks = [
  {
    request: {
      query: DETAILS,
      variables: { id: '3' },
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
        },
      },
    },
  },
];

const match = {
  params: {
    id: '3',
  },
};

describe('Country Details page component', () => {
  afterEach(cleanup);
  it('renders Country Details page component without errors', async () => {
    renderWithRouter(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CountryDetail match={match} />
      </MockedProvider>
    );
    await waitFor(() =>
      expect(screen.getByTestId('country-detail')).not.toBeNull()
    );
  });

  it('should show error UI', async () => {
    const errorMock = {
      request: {
        query: DETAILS,
        variables: { id: '3' },
      },
      error: new Error('fail'),
    };

    renderWithRouter(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <CountryDetail match={match} />
      </MockedProvider>
    );
    await waitFor(() => expect(screen.getByText('Failed :(')).not.toBeNull());
  });

  it('should render loading state initially', async () => {
    renderWithRouter(
      <MockedProvider mocks={mocks}>
        <CountryDetail match={match} />
      </MockedProvider>
    );

    await waitFor(() => expect(screen.getByText('Loading...')).not.toBeNull());
  });

  it("check if you haven't found the country", async () => {
    const notFindMock = {
      request: {
        query: DETAILS,
        variables: { id: '3' },
      },
      result: {
        data: {
          details: [],
        },
      },
    };

    renderWithRouter(
      <MockedProvider mocks={[notFindMock]}>
        <CountryDetail match={match} />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(
        screen.getByText('Country not found. Please try again.')
      ).not.toBeNull()
    );
  });

  it('check if date is undefined', async () => {
    const notFindMock = {
      request: {
        query: DETAILS,
        variables: { id: '3' },
      },
      result: {
        data: undefined,
      },
    };

    renderWithRouter(
      <MockedProvider mocks={[notFindMock]}>
        <CountryDetail match={match} />
      </MockedProvider>
    );

    await waitFor(() => expect(screen.getByText('Loading...')).not.toBeNull());
  });

  it('renders flag field', async () => {
    renderWithRouter(
      <MockedProvider mocks={mocks}>
        <CountryDetail match={match} />
      </MockedProvider>
    );

    await waitFor(() => {
      const flag = screen.getByAltText('Flag of Afghanistan');
      expect(flag).not.toBeNull();
      expect(flag.src).toBe('https://restcountries.eu/data/afg.svg');
    });
  });

  it('renders capital field', async () => {
    renderWithRouter(
      <MockedProvider mocks={mocks}>
        <CountryDetail match={match} />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Capital')).not.toBeNull();
      expect(screen.getByText('Kabul')).not.toBeNull();
    });
  });

  it('renders area field', async () => {
    renderWithRouter(
      <MockedProvider mocks={mocks}>
        <CountryDetail match={match} />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Area')).not.toBeNull();
      expect(screen.getByText('652230 km²')).not.toBeNull();
    });
  });

  it('renders population field', async () => {
    renderWithRouter(
      <MockedProvider mocks={mocks}>
        <CountryDetail match={match} />
      </MockedProvider>
    );
    await waitFor(() => {
      expect(screen.getByText('Population')).not.toBeNull();
      expect(screen.getByText('27657145 hab')).not.toBeNull();
    });
  });

  it('renders topLevelDomains field', async () => {
    renderWithRouter(
      <MockedProvider mocks={mocks}>
        <CountryDetail match={match} />
      </MockedProvider>
    );
    await waitFor(() => {
      expect(screen.getByText('Top level domain')).not.toBeNull();
      expect(screen.getByText('.af')).not.toBeNull();
    });
  });
});
