import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(token, isLoggedIn = false) {
    this.token = token;
    this.isLoggedIn = isLoggedIn;
  }

  async getAccessToken() {
    const rawAccessToken = await AsyncStorage.getItem('token');

    return rawAccessToken ? JSON.parse(rawAccessToken) : null;
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem('token', JSON.stringify(accessToken));
    await AsyncStorage.setItem('isLoggedIn', 'true');
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('isLoggedIn');
  }
  async isLoggedInUser() {
    const isLoggedInuser = await AsyncStorage.getItem('isLoggedIn');
    return JSON.parse(isLoggedInuser);
  }
}

export default AuthStorage;
