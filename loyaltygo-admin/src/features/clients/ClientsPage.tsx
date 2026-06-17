import { EmptyState } from '../../components/ui/EmptyState';

export function ClientsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Clientes</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Gestiona tus clientes y su historial de puntos.
        </p>
      </div>
      <EmptyState
        title="Próximamente"
        description="La gestión de clientes estará disponible en la próxima actualización."
      />
    </div>
  );
}
