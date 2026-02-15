'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<any>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // ✅ Verificar auth via localStorage (consistente com o resto do app)
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')

    if (!token || !userData) {
      router.push('/login')
      return
    }

    try {
      const parsed = JSON.parse(userData)

      // ✅ Verificar se é admin
      if (parsed.role !== 'admin') {
        router.push('/dashboard')
        return
      }

      // ✅ Verificar se o token não expirou (decode base64 JWT)
      try {
        const payload = JSON.parse(atob(token))
        if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
          // Token expirado — limpar e redirecionar
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          router.push('/login')
          return
        }
      } catch {
        // Token inválido
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        router.push('/login')
        return
      }

      setUser(parsed)
      setIsAdmin(true)
    } catch {
      router.push('/login')
      return
    }

    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center">
          <div className="inline-block animate-spin text-4xl mb-4">⚙️</div>
          <p className="text-gray-400">Verificando permissões...</p>
        </div>
      </div>
    )
  }

  if (!isAdmin) return null

  const navItems = [
    { href: '/admin', label: '🏠 Painel', exact: true },
    { href: '/admin/agents', label: '🤖 Agentes' },
    { href: '/admin/tasks', label: '📋 Tarefas' },
    { href: '/admin/users', label: '👥 Usuários' },
    { href: '/admin/analytics', label: '📊 Analytics' },
    { href: '/admin/settings', label: '⚙️ Configurações' },
  ]

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-lg font-bold">
                🛡️
              </div>
              <div>
                <h1 className="text-lg font-bold text-white leading-tight">Admin Panel</h1>
                <p className="text-xs text-slate-400">Elon System</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block text-right">
              <p className="text-sm text-white font-medium">{user?.name}</p>
              <p className="text-xs text-red-400 font-semibold uppercase">Admin</p>
            </div>
            <Link
              href="/dashboard"
              className="px-3 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 rounded-lg text-sm transition"
            >
              ← Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium text-sm transition"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-slate-800/30 backdrop-blur border-r border-slate-700/50 min-h-[calc(100vh-73px)] sticky top-[73px]">
          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive(item.href, item.exact)
                    ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <hr className="my-4 border-slate-700/50" />

            <div className="px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700/30">
              <p className="text-xs text-slate-500 mb-1">Logado como</p>
              <p className="text-sm text-white font-medium">{user?.name}</p>
              <p className="text-xs text-slate-400">{user?.email}</p>
              <div className="mt-2 inline-block px-2 py-0.5 bg-red-500/20 text-red-300 text-xs rounded-full font-semibold">
                ADMIN
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 min-h-[calc(100vh-73px)]">
          <div className="max-w-6xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
