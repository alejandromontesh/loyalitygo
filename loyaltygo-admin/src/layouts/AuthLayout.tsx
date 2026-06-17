import { Outlet } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

export function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>
      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <Outlet />
      </div>
    </div>
  );
}
