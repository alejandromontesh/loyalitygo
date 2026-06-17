import type { Role } from './auth';

export interface NavItem {
  label: string;
  path: string;
  icon: string;
  roles: Role[];
}
