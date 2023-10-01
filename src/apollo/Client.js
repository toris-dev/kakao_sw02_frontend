import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://4000-torisdev-kakaosw02backe-nxajpan4cah.ws-us105.gitpod.io/graphql',
  cache: new InMemoryCache(),
});
