import { Card } from './Card';

interface StatCardProps {
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon: string;
}

export function StatCard({ label, value, trend, trendUp = true, icon }: StatCardProps) {
  return (
    <Card className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900/30">
        <span className="text-xl text-indigo-600 dark:text-indigo-400" dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div className="flex-1">
        <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
        <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">{value}</p>
        {trend && (
          <p className={`mt-1 text-sm ${trendUp ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
            {trendUp ? '↑' : '↓'} {trend}
          </p>
        )}
      </div>
    </Card>
  );
}
