'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [userName, setUserName] = useState('')
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userStr = localStorage.getItem('user')

    if (!token || !userStr) {
      console.log('🚫 Sem token ou user. Redirecionando para login...')
      router.push('/login')
      return
    }

    try {
      const user = JSON.parse(userStr)
      console.log('👤 User encontrado:', user)

      // ✅ VALIDAÇÃO DE ROLE
      if (user.role !== 'admin') {
        console.warn('🚫 Acesso negado: usuário não é admin. Role:', user.role)
        router.push('/dashboard')
        return
      }

      console.log('✅ Admin autenticado!')
      setUserName(user.name || user.email)
      setIsAdmin(true)
      setLoading(false)
    } catch (error) {
      console.error('❌ Erro ao parsear user:', error)
      router.push('/login')
    }
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-darker to-dark">
        <div className="text-center">
          <div className="animate-spin text-4xl mb-4">⚙️</div>
          <p className="text-gray-400">Carregando painel admin...</p>
        </div>
      </div>
    )
  }

  if (!isAdmin) {
    return null // Já redirecionado
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-darker to-dark">
      {/* ===== ADMIN NAVBAR ===== */}
      <nav className="bg-darker/80 border-b border-gray-700 sticky top-0 z-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">🔧</span>
            <div>
              <h1 className="text-2xl font-bold text-primary">Painel Admin</h1>
              <p className="text-xs text-gray-400">Elon System v1.0</p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-8">
            <Link
              href="/admin"
              className="text-gray-400 hover:text-primary transition font-medium"
            >
              📊 Dashboard
            </Link>
            <Link
              href="/admin/agents"
              className="text-gray-400 hover:text-primary transition font-medium"
            >
              🤖 Agentes
            </Link>
            <Link
              href="/admin/tasks"
              className="text-gray-400 hover:text-primary transition font-medium"
            >
              📋 Tarefas
            </Link>
            <Link
              href="/admin/users"
              className="text-gray-400 hover:text-primary transition font-medium"
            >
              👥 Usuários
            </Link>
            <Link
              href="/admin/analytics"
              className="text-gray-400 hover:text-primary transition font-medium"
            >
              📈 Analytics
            </Link>
            <Link
              href="/admin/settings"
              className="text-gray-400 hover:text-primary transition font-medium"
            >
              ⚙️ Config
            </Link>
          </div>

          {/* User Info + Logout */}
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-white">{userName}</p>
              <p className="text-xs text-green-400">✓ Admin</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition transform hover:scale-105"
            >
              Sair
            </button>
          </div>
        </div>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="mt-20 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
        <p>© 2026 Elon Parker Admin. Sistema de Agentes Autônomos.</p>
      </footer>
    </div>
  )
}
