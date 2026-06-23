import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">OpsPulse</h1>
        <p className="text-lg text-slate-700 mb-8">
          Business operations intelligence for order, bank, and employee data.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/upload" className="rounded-xl bg-slate-900 px-6 py-5 text-white shadow hover:bg-slate-700">
            Upload Documents
          </Link>
          <Link href="/dashboard" className="rounded-xl border border-slate-200 bg-white px-6 py-5 text-slate-900 shadow hover:border-slate-300">
            Dashboard (coming soon)
          </Link>
        </div>
      </div>
    </main>
  )
}
