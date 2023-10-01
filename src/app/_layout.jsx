import { ApolloProvider } from '@apollo/client';
import { Stack } from 'expo-router';
import { client } from '../apollo/Client';
import { AuthContext } from '../context/AuthContext';

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <AuthContext>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
        </Stack>
      </AuthContext>
    </ApolloProvider>
  );
}
