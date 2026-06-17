import type { NavItem } from '../types';

export const navigation: NavItem[] = [
  {
    label: 'Dashboard',
    path: '/',
    icon: 'dashboard',
    roles: ['Admin', 'Manager', 'Cashier'],
  },
  {
    label: 'POS',
    path: '/pos',
    icon: 'pos',
    roles: ['Admin', 'Cashier'],
  },
  {
    label: 'Clientes',
    path: '/clients',
    icon: 'clients',
    roles: ['Admin', 'Manager'],
  },
  {
    label: 'Recompensas',
    path: '/rewards',
    icon: 'rewards',
    roles: ['Admin', 'Manager'],
  },
  {
    label: 'Inventario',
    path: '/inventory',
    icon: 'inventory',
    roles: ['Admin'],
  },
  {
    label: 'Configuración',
    path: '/settings',
    icon: 'settings',
    roles: ['Admin'],
  },
];
