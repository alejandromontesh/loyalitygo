import { useAuth } from '../../auth/useAuth';
import { StatCard } from '../../components/ui/StatCard';

export function DashboardPage() {
  const { user } = useAuth();

  const stats = [
    { label: 'Clientes Activos', value: '12,450', trend: '12% este mes', trendUp: true, icon: '<svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>' },
    { label: 'Puntos Emitidos', value: '284,300', trend: '8% este mes', trendUp: true, icon: '<svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
    { label: 'Recompensas Canjeadas', value: '18,920', trend: '15% este mes', trendUp: true, icon: '<svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/></svg>' },
    { label: 'Ventas del Mes', value: '$89,200', trend: '22% este mes', trendUp: true, icon: '<svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"/></svg>' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Bienvenido{user?.name ? `, ${user.name}` : ''}
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Plataforma de Fidelización y Recompensas
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Actividad Reciente</h3>
          <div className="mt-4 space-y-3">
            {[
              { action: 'Nuevo cliente registrado', time: 'Hace 5 min' },
              { action: 'Canje de recompensa #4521', time: 'Hace 12 min' },
              { action: 'Venta completada - POS #03', time: 'Hace 25 min' },
              { action: 'Inventario actualizado', time: 'Hace 1 hora' },
            ].map((item) => (
              <div key={item.time} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0 dark:border-slate-800">
                <span className="text-sm text-slate-700 dark:text-slate-300">{item.action}</span>
                <span className="text-xs text-slate-400">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Resumen Rápido</h3>
          <div className="mt-4 space-y-4">
            {[
              { label: 'Tasa de canje', value: '72%', color: 'bg-emerald-500' },
              { label: 'Clientes recurrentes', value: '65%', color: 'bg-indigo-500' },
              { label: 'Puntos por vencer', value: '12,400', color: 'bg-amber-500' },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-400">{item.label}</span>
                  <span className="font-medium text-slate-900 dark:text-white">{item.value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
                  <div className={`h-2 rounded-full ${item.color}`} style={{ width: item.value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
