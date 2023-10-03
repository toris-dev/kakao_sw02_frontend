import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect } from 'expo-router';
import React from 'react';

// user로 로그인했으면 /home 으로 Redirect
function App() {
  const isLoggedIn = AsyncStorage.getItem('isLoggedIn');
  return isLoggedIn === 'true' ? (
    <Redirect href="(tabs)/home" />
  ) : (
    <Redirect href="/login" />
  );
}

export default App;
