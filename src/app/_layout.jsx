import { Stack } from 'expo-router';
import ApolloProvider from '../provider/ApolloProvider';
import { AuthProvider } from '../provider/AuthProvider';
export default function RootLayout() {
  return (
    <ApolloProvider>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
        </Stack>
      </AuthProvider>
    </ApolloProvider>
  );
}
