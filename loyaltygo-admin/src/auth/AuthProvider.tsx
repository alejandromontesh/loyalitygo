import { useState, type ReactNode } from 'react';
import { AuthContext, type AuthContextValue } from './AuthContext';
import type { LoginCredentials } from '../types';
import { authService } from '../services/authService';
import { STORAGE_KEYS } from '../utils/constants';

function getInitialToken(): string | null {
  return localStorage.getItem(STORAGE_KEYS.TOKEN);
}

function getInitialUser() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.USER);
    return stored ? JSON.parse(stored) : null;
  } catch {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(getInitialToken);
  const [user, setUser] = useState(getInitialUser);

  const login = async (credentials: LoginCredentials) => {
    const response = await authService.login(credentials);
    localStorage.setItem(STORAGE_KEYS.TOKEN, response.token);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(response.user));
    setToken(response.token);
    setUser(response.user);
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
    setToken(null);
    setUser(null);
  };

  const value: AuthContextValue = {
    user,
    token,
    isAuthenticated: !!token && !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
