import { ApolloProvider } from '@apollo/client';
import { Stack } from 'expo-router';
import { AuthProvider } from '../provider/AuthProvider';
import createApolloClient from '../utils/ApolloClient';
import AuthStorage from '../utils/AuthStorage';
export default function RootLayout() {
  const authStorage = new AuthStorage();
  const apolloClient = createApolloClient(authStorage);
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
        </Stack>
      </AuthProvider>
    </ApolloProvider>
  );
}
