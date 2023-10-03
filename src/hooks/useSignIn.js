import { useApolloClient, useMutation } from '@apollo/client';
import { useRouter } from 'expo-router';
import { SIGNIN_MUTATION } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const { authStorage } = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(SIGNIN_MUTATION);
  const router = useRouter();

  const signIn = async ({ armynumber, password }) => {
    const { data } = await mutate({ variables: { armynumber, password } });
    const accessToken = data?.token;

    await authStorage.setAccessToken(accessToken);

    await apolloClient.resetStore();

    router.push('/(tabs)/home');
  };

  return [signIn, result];
};

export default useSignIn;
