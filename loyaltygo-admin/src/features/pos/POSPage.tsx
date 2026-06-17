import { Card } from '../../components/ui/Card';

const categories = ['Todas', 'Bebidas', 'Comidas', 'Servicios'];

const products = [
  { id: 1, name: 'Café Latte', price: 3.50, category: 'Bebidas' },
  { id: 2, name: 'Té Verde', price: 2.50, category: 'Bebidas' },
  { id: 3, name: 'Jugo Natural', price: 4.00, category: 'Bebidas' },
  { id: 4, name: 'Agua Mineral', price: 1.50, category: 'Bebidas' },
  { id: 5, name: 'Sándwich', price: 5.50, category: 'Comidas' },
  { id: 6, name: 'Ensalada', price: 6.00, category: 'Comidas' },
  { id: 7, name: 'Pastel', price: 3.00, category: 'Comidas' },
  { id: 8, name: 'Corte de Cabello', price: 15.00, category: 'Servicios' },
  { id: 9, name: 'Manicure', price: 12.00, category: 'Servicios' },
  { id: 10, name: 'Masaje', price: 25.00, category: 'Servicios' },
];

const ticketItems = [
  { name: 'Café Latte', qty: 2, price: 3.50 },
  { name: 'Sándwich', qty: 1, price: 5.50 },
  { name: 'Jugo Natural', qty: 1, price: 4.00 },
];

const total = ticketItems.reduce((sum, item) => sum + item.qty * item.price, 0);

export function POSPage() {
  return (
    <div className="flex h-full gap-4">
      <div className="flex-1 space-y-4">
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                cat === 'Todas'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <button
              key={product.id}
              className="rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-all hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-700"
            >
              <div className="mb-2 flex h-16 w-full items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-800">
                <svg className="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{product.name}</p>
              <p className="text-sm text-indigo-600 dark:text-indigo-400">${product.price.toFixed(2)}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="w-72 shrink-0 lg:w-80 xl:w-96">
        <Card className="flex h-full flex-col">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">Ticket</h2>

          <div className="mt-4 flex-1 space-y-3">
            {ticketItems.map((item) => (
              <div key={item.name} className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{item.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">${item.price.toFixed(2)} x {item.qty}</p>
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  ${(item.qty * item.price).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-3 border-t border-slate-200 pt-4 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500 dark:text-slate-400">Subtotal</span>
              <span className="text-sm text-slate-700 dark:text-slate-300">${total.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-slate-900 dark:text-white">Total</span>
              <span className="text-lg font-bold text-slate-900 dark:text-white">${total.toFixed(2)}</span>
            </div>
            <button className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
              Cobrar
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
