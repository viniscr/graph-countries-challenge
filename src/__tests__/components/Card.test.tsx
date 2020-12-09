import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../../components/Card/Card';

import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import { Country } from '../../models/country';

const renderWithRouter = (ui: any, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('Card component', () => {
  const countryData: Country = {
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
  };

  it('renders Card component', () => {
    renderWithRouter(<Card country={countryData} />);
    expect(screen.getByTestId('card')).not.toBeNull();
  });

  describe('link for details', () => {
    it('renders link details', () => {
      renderWithRouter(<Card country={countryData} />);
      expect(screen.getAllByTestId('country-details')).not.toBeNull();
    });

    it('check click on the link details', () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <Card country={countryData} />
        </Router>
      );
      fireEvent.click(screen.getByTestId('country-details'));
      const path = history.location.pathname;
      expect(path).toBe(`/countries/${countryData._id}`);
    });
  });

  describe('country flag', () => {
    it('renders the country flag', () => {
      renderWithRouter(<Card country={countryData} />);
      expect(screen.getByAltText(/Country Flag/i)).not.toBeNull();
    });

    it('check if it is the correct flag', () => {
      renderWithRouter(<Card country={countryData} />);
      expect(screen.getByAltText(/Country Flag/i).src).toBe(
        countryData.flag.svgFile
      );
    });
  });

  describe('country name', () => {
    it('renders the country name', () => {
      renderWithRouter(<Card country={countryData} />);
      expect(screen.getByText(/Afghanistan/i)).not.toBeNull();
    });

    it('check if it is the correct name', () => {
      renderWithRouter(<Card country={countryData} />);
      expect(screen.getByText(/Afghanistan/i).textContent).toBe(countryData.name);
    });
  });

  describe('country capital', () => {
    it('renders the country capital', () => {
      renderWithRouter(<Card country={countryData} />);
      expect(screen.getByText(/Kabul/i)).not.toBeNull();
    });

    it('check if it is the correct capital', () => {
      renderWithRouter(<Card country={countryData} />);
      expect(screen.getByText(/Kabul/i).textContent).toBe(countryData.capital);
    });
  });
});
