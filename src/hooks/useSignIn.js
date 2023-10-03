import { useApolloClient, useMutation } from '@apollo/client';
import { useRouter } from 'expo-router';
import { SIGNIN_MUTATION } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const { authStorage } = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, { data, error, loading }] = useMutation(SIGNIN_MUTATION);
  const router = useRouter();

  const signIn = async ({ armynumber, password }) => {
    await mutate({ variables: { armynumber, password } });
    const accessToken = data.login.token;

    await authStorage.setAccessToken(accessToken);

    await apolloClient.resetStore();

    router.push('/(tabs)/home');
  };

  return [signIn, data];
};

export default useSignIn;
