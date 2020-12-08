import { ApolloClient } from '@apollo/client';
import cache from './graphql/cache';

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
  cache,
});

export default client;
