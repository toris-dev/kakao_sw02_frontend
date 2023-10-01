import React from 'react';

import { Redirect } from 'expo-router';
import { AuthContext } from '../context/AuthContext';

// user로 로그인했으면 /home 으로 Redirect
function App() {
  const [isLoggedIn] = AuthContext()
  return (
    isLoggedIn? <Redirect href="/login" />: <Redirect href="(tabs)/home" />
  )
}

export default App;
