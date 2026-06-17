import { EmptyState } from '../../components/ui/EmptyState';

export function InventoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Inventario</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Controla el inventario de productos y servicios.
        </p>
      </div>
      <EmptyState
        title="Próximamente"
        description="El módulo de inventario estará disponible en la próxima actualización."
      />
    </div>
  );
}
