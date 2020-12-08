import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { DETAILS } from '../../graphql/queries';
import { countriesVar } from '../../graphql/reactivities/countriesVariable';
import { Country } from '../../models/country';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';

interface CountryEditProps {
  match: any;
  history: any;
}

const CountryEdit: React.FC<CountryEditProps> = ({ match, history }) => {
  const [getCountry, { error, loading, data }] = useLazyQuery(DETAILS, {
    variables: { id: match.params.id },
  });

  useEffect(() => {
    getCountry();
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed :(</p>;
  if (data === undefined) return <p>Loading...</p>;

  function handleEdit(editedCountry: Country) {
    const newLocalData = countriesVar().map((item) => {
      if (item._id === editedCountry._id) return editedCountry;
      return item;
    });

    countriesVar([...newLocalData]);

    history.push('/countries');
  }

  return (
    <div>
      <Header hasSearch={false} />
      <Form country={data.details} handleEdit={handleEdit} />
    </div>
  );
};

export default CountryEdit;
