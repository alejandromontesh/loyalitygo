export type Role = 'Admin' | 'Manager' | 'Cashier';

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
