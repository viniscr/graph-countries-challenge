import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { LIST } from '../../graphql/queries';
import { Country } from '../../models/country';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

function CountriesList() {
  const [getCountryList, { error, loading, data }] = useLazyQuery(LIST, {
    variables: { term: '' },
  });

  useEffect(() => {
    getCountryList();
  }, [getCountryList]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed :(</p>;
  if (data === undefined) return <p>Loading...</p>;
  if (data.list.length === 0) {
    return (
      <p>
        País não encontrado. Tente novamente. <br />
        <Link to="/countries">Voltar</Link>
      </p>
    );
  }

  function handleSearch(term: string) {
    getCountryList({ variables: { term: term } });
  }

  return (
    <div>
      <Header hasSearch={true} handleSearch={handleSearch} />
      <div className="countries-list-container">
        {data.list.map(
          (country: Country, i: string | number | null | undefined) => (
            <Card country={country} key={i} />
          )
        )}
      </div>
    </div>
  );
}

export default CountriesList;
