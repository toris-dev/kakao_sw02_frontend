import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuthStorage = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuthStorage must be used within a AuthStorageProvider');
  }

  return context;
};

export default useAuthStorage;
