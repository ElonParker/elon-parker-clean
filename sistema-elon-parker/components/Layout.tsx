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
      setUser(JSON.parse(userData))
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-darker to-dark">
      {/* Header */}
      <header className="border-b border-gray-700 bg-darker/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="text-2xl">🤖</div>
              <span className="text-xl font-bold text-primary">Elon Parker</span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/dashboard" className="text-gray-300 hover:text-primary transition">
                Dashboard
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-primary transition">
                Projetos
              </Link>
              <Link href="/analytics" className="text-gray-300 hover:text-primary transition">
                Analytics
              </Link>
            </nav>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block text-right">
                <p className="text-sm text-gray-300">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary hover:bg-primary/30 transition"
              >
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute top-16 right-4 bg-darker border border-gray-700 rounded-lg shadow-xl overflow-hidden">
                  <Link href="/profile" className="block px-4 py-2 text-gray-300 hover:bg-primary/20 transition">
                    Perfil
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-gray-300 hover:bg-primary/20 transition">
                    Configurações
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/20 transition"
                  >
                    Sair
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-300">☰</button>
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
