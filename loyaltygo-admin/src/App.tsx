import { AuthProvider } from './auth';
import { ThemeProvider } from './contexts';
import { AppRouter } from './routes/AppRouter';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  );
}
