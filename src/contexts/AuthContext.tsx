import { SESSION_AUTH_KEY, SESSION_ROLE_KEY } from '@/constants/storageKeys';
import React, { createContext, useContext, useState } from 'react';

type Role = 'ROLE_CUSTOMER' | 'ROLE_OWNER' | 'ROLE_ADMIN';

type AuthContextType = {
  role: Role | undefined;
  updateRole: (role: Role) => void;
  removeRole: () => void;
  accessToken: string | undefined;
  updateAccessToken: (accessToken: string) => void;
  removeAccessToken: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<Role | undefined>(() => {
    const role = sessionStorage.getItem(SESSION_ROLE_KEY);
    return role ? (role as Role) : undefined;
  });
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

  const updateRole = (newRole: Role) => {
    setRole(newRole);
    sessionStorage.setItem(SESSION_ROLE_KEY, newRole);
  };

  const removeRole = () => {
    setRole(undefined);
    sessionStorage.removeItem(SESSION_ROLE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        role,
        updateRole,
        removeRole,
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
