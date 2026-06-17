import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { AuthLayout } from '../layouts/AuthLayout';
import { DashboardLayout } from '../layouts/DashboardLayout';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import ClientsPage from '../pages/ClientsPage';
import RewardsPage from '../pages/RewardsPage';
import InventoryPage from '../pages/InventoryPage';
import SettingsPage from '../pages/SettingsPage';
import POSPage from '../pages/POSPage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/pos" element={<POSPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/rewards" element={<RewardsPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
