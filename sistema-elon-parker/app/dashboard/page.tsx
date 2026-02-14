'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')

    if (!token || !userData) {
      router.push('/login')
      return
    }

    setUser(JSON.parse(userData))
    setLoading(false)
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-darker to-dark">
        <div className="text-center">
          <div className="inline-block animate-spin text-4xl mb-4">⚙️</div>
          <p className="text-gray-400">Carregando...</p>
        </div>
      </div>
    )
  }

  return (
    <Layout isAuthenticated={true}>
      <div className="animate-fade-in">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50 rounded-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Bem-vindo, {user?.name}! 👋</h1>
          <p className="text-gray-400">Gerencie seus projetos SEO de forma eficiente</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-darker/50 border border-gray-700 rounded-xl p-6">
            <div className="text-3xl mb-2">📊</div>
            <p className="text-gray-400 text-sm">Projetos</p>
            <p className="text-3xl font-bold text-primary">0</p>
          </div>

          <div className="bg-darker/50 border border-gray-700 rounded-xl p-6">
            <div className="text-3xl mb-2">🔗</div>
            <p className="text-gray-400 text-sm">Backlinks</p>
            <p className="text-3xl font-bold text-primary">0</p>
          </div>

          <div className="bg-darker/50 border border-gray-700 rounded-xl p-6">
            <div className="text-3xl mb-2">🔑</div>
            <p className="text-gray-400 text-sm">Keywords</p>
            <p className="text-3xl font-bold text-primary">0</p>
          </div>

          <div className="bg-darker/50 border border-gray-700 rounded-xl p-6">
            <div className="text-3xl mb-2">📈</div>
            <p className="text-gray-400 text-sm">Tráfego</p>
            <p className="text-3xl font-bold text-primary">0</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-darker/50 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Ações Rápidas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="bg-primary/20 hover:bg-primary/30 border border-primary/50 text-white p-4 rounded-lg transition">
              ➕ Novo Projeto
            </button>
            <button className="bg-primary/20 hover:bg-primary/30 border border-primary/50 text-white p-4 rounded-lg transition">
              📋 Ver Projetos
            </button>
            <button className="bg-primary/20 hover:bg-primary/30 border border-primary/50 text-white p-4 rounded-lg transition">
              ⚙️ Configurações
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
