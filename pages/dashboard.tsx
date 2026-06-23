export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="text-slate-700 mb-6">Analytics and KPI charts will appear here once the backend analytics engine is ready.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">Revenue</h2>
            <p className="text-3xl font-bold">$0.00</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">Orders</h2>
            <p className="text-3xl font-bold">0</p>
          </div>
        </div>
      </div>
    </main>
  )
}
