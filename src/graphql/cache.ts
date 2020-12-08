import { InMemoryCache } from '@apollo/client';
import { countriesVar } from './reactivities/countriesVariable';

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        list: {
          read(_, { variables }) {
            return countriesVar().filter((item) => {
              const name = item.name;
              return (
                name.toLowerCase().indexOf(variables!.term.toLowerCase()) >= 0
              );
            });
          },
        },
        details: {
          read(_, { variables }) {
            const found = countriesVar().find(
              (item) => item._id === variables!.id
            );
            if (found) return found;
            return [];
          },
        },
      },
    },
  },
});
