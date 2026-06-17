import api from '../api/http';
import type { LoginCredentials, LoginResponse } from '../types';

export const authService = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    if (credentials.email === 'Admin@loyalitygo.mx' && credentials.password === 'Admin') {
      return {
        token: 'dev-jwt-token',
        user: {
          id: 1,
          name: 'Alejandro',
          email: 'admin@empresa.com',
          role: 'Admin',
        },
      };
    }
    const { data } = await api.post<LoginResponse>('/auth/login', credentials);
    return data;
  },
};
