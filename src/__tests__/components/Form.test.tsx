import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from '../../components/Form/Form';
import { Country } from '../../models/country';

describe('Form component', () => {
  const country: Country = {
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

  it('renders a form', () => {
    render(<Form country={country} />);
    expect(screen.getByTestId('edit-container')).not.toBeNull();
  });

  describe('flag field', () => {
    it('renders the flag field as an input', () => {
      render(<Form country={country} />);
      const field = screen.getByTestId('edit-input-flag');
      expect(field).not.toBeNull();
      expect(field.tagName).toEqual('INPUT');
      expect(field.type).toEqual('text');
    });

    it('renders a label for the flag field', () => {
      render(<Form country={country} />);
      const label = screen.getByLabelText('Flag');
      expect(label).not.toBeNull();
    });

    it('includes the country value for the flag', () => {
      render(<Form country={country} />);
      expect(screen.getByTestId('edit-input-flag').value).toBe(
        'https://restcountries.eu/data/afg.svg'
      );
    });
  });

  describe('name field', () => {
    it('renders the name field as an input', () => {
      render(<Form country={country} />);
      const field = screen.getByTestId('edit-input-name');
      expect(field).not.toBeNull();
      expect(field.tagName).toEqual('INPUT');
      expect(field.type).toEqual('text');
    });

    it('renders a label for the name field', () => {
      render(<Form country={country} />);
      const label = screen.getByLabelText('Name');
      expect(label).not.toBeNull();
    });

    it('includes the country value for the name', () => {
      render(<Form country={country} />);
      expect(screen.getByTestId('edit-input-name').value).toBe('Afghanistan');
    });
  });

  describe('capital field', () => {
    it('renders the capital field as an input', () => {
      render(<Form country={country} />);
      const field = screen.getByTestId('edit-input-capital');
      expect(field).not.toBeNull();
      expect(field.tagName).toEqual('INPUT');
      expect(field.type).toEqual('text');
    });

    it('renders a label for the capital field', () => {
      render(<Form country={country} />);
      const label = screen.getByLabelText('Capital');
      expect(label).not.toBeNull();
    });

    it('includes the country value for the capital', () => {
      render(<Form country={country} />);
      expect(screen.getByTestId('edit-input-capital').value).toBe('Kabul');
    });
  });

  describe('area field', () => {
    it('renders the area field as an input', () => {
      render(<Form country={country} />);
      const field = screen.getByTestId('edit-input-area');
      expect(field).not.toBeNull();
      expect(field.tagName).toEqual('INPUT');
      expect(field.type).toEqual('number');
    });

    it('renders a label for the area field', () => {
      render(<Form country={country} />);
      const label = screen.getByLabelText('Area');
      expect(label).not.toBeNull();
    });

    it('includes the country value for the area', () => {
      render(<Form country={country} />);
      expect(screen.getByTestId('edit-input-area').value).toBe('652230');
    });
  });

  describe('population field', () => {
    it('renders the population field as an input', () => {
      render(<Form country={country} />);
      const field = screen.getByTestId('edit-input-population');
      expect(field).not.toBeNull();
      expect(field.tagName).toEqual('INPUT');
      expect(field.type).toEqual('number');
    });

    it('renders a label for the population field', () => {
      render(<Form country={country} />);
      const label = screen.getByLabelText('Population');
      expect(label).not.toBeNull();
    });

    it('includes the country value for the population', () => {
      render(<Form country={country} />);
      expect(screen.getByTestId('edit-input-population').value).toBe(
        '27657145'
      );
    });
  });

  describe('topLevelDomains field', () => {
    it('renders the topLevelDomains field as an input', () => {
      render(<Form country={country} />);
      const field = screen.getByTestId('edit-input-topleveldomain');
      expect(field).not.toBeNull();
      expect(field.tagName).toEqual('INPUT');
      expect(field.type).toEqual('text');
    });

    it('renders a label for the topLevelDomains field', () => {
      render(<Form country={country} />);
      const label = screen.getByLabelText('Top Level Domain');
      expect(label).not.toBeNull();
    });

    it('includes the country value for the topLevelDomains', () => {
      render(<Form country={country} />);
      expect(screen.getByTestId('edit-input-topleveldomain').value).toBe('.af');
    });
  });

  describe('submit button', () => {
    it('renders the submit button', () => {
      render(<Form country={country} />);
      const field = screen.getByText('Save');
      expect(field).not.toBeNull();
      expect(field.tagName).toEqual('BUTTON');
      expect(field.type).toEqual('submit');
    });
  });

  it('creates correct object to save changes', async () => {
    render(
      <Form
        country={country}
        edit={(edited) => expect(edited).toEqual(country)}
      />
    );

    await fireEvent.submit(screen.getByTestId('edit-container'));
  });

  it('checks if field changes stores in state', async () => {
    render(
      <Form
        country={country}
        edit={(edited) => {
          expect(screen.getByTestId('edit-input-name').value).toBe(
            edited.nameTranslations[0].value
          );
          expect(screen.getByTestId('edit-input-flag').value).toEqual(
            edited.flag.svgFile
          );
          expect(screen.getByTestId('edit-input-topleveldomain').value).toEqual(
            edited.topLevelDomains[0].name
          );
          expect(screen.getByTestId('edit-input-capital').value).toEqual(
            edited.capital
          );
          expect(screen.getByTestId('edit-input-area').value).toEqual(
            edited.area
          );
          expect(screen.getByTestId('edit-input-population').value).toEqual(
            edited.population
          );
        }}
      />
    );

    const editedCountryValues = [
      { name: 'edit-input-name', value: 'Argentina' },
      {
        name: 'edit-input-flag',
        value: 'https://restcountries.eu/data/arg.svg',
      },
      { name: 'edit-input-topleveldomain', value: '.ar' },
      { name: 'edit-input-capital', value: 'Buenos Aires' },
      { name: 'edit-input-area', value: '2780400' },
      { name: 'edit-input-population', value: '43590400' },
    ];

    await editedCountryValues.map((input) => {
      fireEvent.change(screen.getByTestId(input.name), {
        target: { value: input.value },
      });
    });

    await fireEvent.submit(screen.getByTestId('edit-container'));
  });
});
