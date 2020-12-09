import React, { FormEvent, useState } from 'react';
import { Country } from '../../models/country';
import Input from '../Input/Input';

interface FormProps {
  country: Country;
  handleEdit?: any;
}

const Form: React.FC<FormProps> = ({ country, handleEdit }) => {
  const [name, setName] = useState<string>(country.name);
  const [flag, setFlag] = useState<string>(country.flag.svgFile);
  const [capital, setCapital] = useState<string>(country.capital);
  const [area, setArea] = useState<number>(country.area);
  const [population, setPopulation] = useState<number>(country.population);
  const [topLevelDomains, setTopLevelDomains] = useState<string>(
    country.topLevelDomains[0].name
  );

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const editedCountry = {
      ...country,
      name,
      flag: { ...country.flag, svgFile: flag },
      topLevelDomains: [
        { ...country.topLevelDomains[0], name: topLevelDomains },
      ],
      capital,
      area,
      population,
    };

    handleEdit(editedCountry);
  }
  return (
    <div className="country-edit-container" data-testid="edit-container">
      <main>
        <form className="country-edit-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Details</legend>
            <Input
              name="flag"
              label="Flag"
              value={flag}
              onChange={(e) => {
                setFlag(e.target.value);
              }}
              data-testid="edit-input-flag"
            />
            <Input
              name="name"
              label="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              data-testid="edit-input-name"
            />

            <Input
              name="capital"
              type="text"
              label="Capital"
              value={capital}
              onChange={(e) => {
                setCapital(e.target.value);
              }}
              data-testid="edit-input-capital"
            />
            <Input
              name="area"
              label="Area"
              value={area}
              type="number"
              onChange={(e) => {
                setArea(e.target.value as any);
              }}
              data-testid="edit-input-area"
            />

            <Input
              name="population"
              type="number"
              label="Population"
              value={population}
              onChange={(e) => {
                setPopulation(e.target.value as any);
              }}
              data-testid="edit-input-population"
            />
            <Input
              name="topleveldomain"
              type="text"
              label="Top Level Domain"
              value={topLevelDomains}
              onChange={(e) => {
                setTopLevelDomains(e.target.value);
              }}
              data-testid="edit-input-topleveldomain"
            />
            <button type="submit">Save</button>
          </fieldset>
        </form>
      </main>
    </div>
  );
};

export default Form;
