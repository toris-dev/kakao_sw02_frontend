import { useApolloClient, useMutation } from '@apollo/client';
import { useRouter } from 'expo-router';
import { SIGNUP_MUTATION } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGNUP_MUTATION);
  const { authStorage } = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useRouter();

  const signUp = async ({
    armynumber,
    password,
    nickname,
    role,
    militarybase,
  }) => {
    const { data } = await mutate({
      variables: { armynumber, password, nickname, role, militarybase },
    });
    const accessToken = data?.token;

    await authStorage.setAccessToken(accessToken);

    await apolloClient.resetStore();

    navigate.push('/(tabs)/home');
  };

  return [signUp, result];
};

export default useSignUp;
