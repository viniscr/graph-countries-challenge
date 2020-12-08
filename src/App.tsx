import React from 'react';
import './scss/index.scss';
import Routes from './routes';

import { useQuery } from '@apollo/client';
import { GET_ALL_COUNTRIES } from './graphql/queries';
import { countriesVar } from './graphql/reactivities/countriesVariable';

function App() {
  const { loading, data } = useQuery(GET_ALL_COUNTRIES);

  if (loading) return <p>Loading ...</p>;

  countriesVar(data.Country);

  return <Routes />;
}

export default App;
