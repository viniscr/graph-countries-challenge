import { gql } from '@apollo/client';

export const GET_ALL_COUNTRIES = gql`
  query {
    Country {
      _id
      capital
      name
      flag {
        svgFile
      }
      area
      population
      topLevelDomains {
        name
      }
    }
  }
`;

export const LIST = gql`
  query {
    list @client
  }
`;

export const DETAILS = gql`
  query {
    details
  }
`;
