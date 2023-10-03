import { StyleSheet } from 'react-native';
import SignInComponent from '../../components/auth/SignIn';

export default function SignIn() {
  return <SignInComponent />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    color: 'green',
  },
  intro: {
    fontSize: 12,
    marginBottom: 100,
  },
  input: {
    borderColor: 'green',
    borderRadius: 20,
    borderWidth: 2,
    margin: 15,
    height: 40,
    width: 300,
  },
});
