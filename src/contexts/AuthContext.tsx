import { SESSION_AUTH_KEY } from '@/constants/storageKeys';
import React, { createContext, useContext, useState } from 'react';

type AuthContextType = {
  accessToken: string | undefined;
  updateAccessToken: (accessToken: string) => void;
  removeAccessToken: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | undefined>(() => {
    const token = sessionStorage.getItem(SESSION_AUTH_KEY);
    return token ? token : undefined;
  });

  const updateAccessToken = (token: string) => {
    setAccessToken(token);
    sessionStorage.setItem(SESSION_AUTH_KEY, token);
  };

  const removeAccessToken = () => {
    setAccessToken(undefined);
    sessionStorage.removeItem(SESSION_AUTH_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        updateAccessToken,
        removeAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
