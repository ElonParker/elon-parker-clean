'use client'

import { ReactNode, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface LayoutProps {
  children: ReactNode
  isAuthenticated?: boolean
}

export default function Layout({ children, isAuthenticated = false }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      try {
        setUser(JSON.parse(userData))
      } catch {
        // ignore
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/login')
  }

  if (!isAuthenticated) {
    return <>{children}</>
  }

  const isAdmin = user?.role === 'admin'

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-darker to-dark">
      {/* Header */}
      <header className="border-b border-gray-700 bg-darker/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="text-2xl">🤖</div>
              <span className="text-xl font-bold text-primary">Elon</span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/dashboard" className="text-gray-300 hover:text-primary transition">
                Dashboard
              </Link>
              <Link href="/dashboard" className="text-gray-300 hover:text-primary transition">
                Perfil
              </Link>
              {/* ✅ Link para Admin — só aparece para admins */}
              {isAdmin && (
                <Link
                  href="/admin"
                  className="text-red-400 hover:text-red-300 transition font-semibold flex items-center gap-1"
                >
                  🛡️ Admin
                </Link>
              )}
            </nav>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block text-right">
                <p className="text-sm text-gray-300">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary hover:bg-primary/30 transition"
                >
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                  <div className="absolute top-12 right-0 w-48 bg-darker border border-gray-700 rounded-lg shadow-xl overflow-hidden z-50">
                    <div className="px-4 py-3 border-b border-gray-700">
                      <p className="text-sm text-white font-medium">{user?.name}</p>
                      <p className="text-xs text-gray-400">{user?.email}</p>
                      {isAdmin && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-red-500/20 text-red-400 text-xs rounded-full font-semibold">
                          ADMIN
                        </span>
                      )}
                    </div>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-gray-300 hover:bg-primary/20 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Perfil
                    </Link>
                    {isAdmin && (
                      <Link
                        href="/admin"
                        className="block px-4 py-2 text-red-400 hover:bg-red-500/20 transition font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        🛡️ Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/20 transition border-t border-gray-700"
                    >
                      Sair
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-300 text-xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-700 bg-darker/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-500 text-sm">
          <p>© 2026 Elon Parker. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
