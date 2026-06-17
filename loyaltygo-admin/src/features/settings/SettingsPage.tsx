import { Card } from '../../components/ui/Card';

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Configuración</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Administra la configuración de tu plataforma.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="font-medium text-slate-900 dark:text-white">Perfil del Negocio</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Información general de tu empresa.
          </p>
        </Card>
        <Card>
          <h3 className="font-medium text-slate-900 dark:text-white">Métodos de Pago</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Configura las formas de pago disponibles.
          </p>
        </Card>
        <Card>
          <h3 className="font-medium text-slate-900 dark:text-white">Notificaciones</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Gestiona las notificaciones y alertas.
          </p>
        </Card>
        <Card>
          <h3 className="font-medium text-slate-900 dark:text-white">Usuarios</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Administra los usuarios y sus permisos.
          </p>
        </Card>
      </div>
    </div>
  );
}
