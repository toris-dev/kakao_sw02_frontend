import { ApolloProvider as AP } from '@apollo/client';
import createApolloClient from '../utils/ApolloClient';
import AuthStorage from '../utils/AuthStorage';

export default function ApolloProvider({ children }) {
  const authStorage = new AuthStorage();
  const apolloClient = createApolloClient(authStorage);
  return <AP client={apolloClient}>{children}</AP>;
}
