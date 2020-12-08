import { makeVar } from '@apollo/client';
import { Country } from '../../models/country';

export const countriesVar = makeVar<Country[]>([]);
