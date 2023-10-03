import { AuthContext } from '../context/AuthContext';
import AuthStorage from '../utils/AuthStorage';
export const AuthProvider = ({ children }) => {
  const authStorage = new AuthStorage();

  const value = {
    authStorage,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
