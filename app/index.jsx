/* eslint-disable */
import { Redirect } from 'expo-router';
import { StyleSheet } from 'react-native';
export default function App() {
  return <Redirect href="/login" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0B0B0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
