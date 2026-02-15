'use client'

import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div className="animate-fade-in space-y-8">
      {/* ===== HEADER ===== */}
      <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border border-primary/50 rounded-2xl p-8">
        <h1 className="text-5xl font-bold text-primary mb-2">
          🤖 Painel de Controle
        </h1>
        <p className="text-gray-400 text-lg">
          Monitore todos os 9 agentes colaborativos em tempo real
        </p>
      </div>

      {/* ===== STATS GRID ===== */}
      <div className="grid md:grid-cols-4 gap-6">
        {/* Agentes Ativos */}
        <div className="bg-darker/50 border border-gray-700 rounded-xl p-6 hover:border-primary/50 transition">
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl">🤖</div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-gray-400 text-sm mb-2">Agentes Ativos</p>
          <p className="text-4xl font-bold text-primary">9</p>
          <p className="text-xs text-gray-500 mt-2">Todos online</p>
        </div>

        {/* Tarefas */}
        <div className="bg-darker/50 border border-gray-700 rounded-xl p-6 hover:border-primary/50 transition">
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl">📋</div>
            <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Em planejamento</span>
          </div>
          <p className="text-gray-400 text-sm mb-2">Tarefas em Andamento</p>
          <p className="text-4xl font-bold text-primary">0</p>
          <p className="text-xs text-gray-500 mt-2">Pronto para começar</p>
        </div>

        {/* Usuários */}
        <div className="bg-darker/50 border border-gray-700 rounded-xl p-6 hover:border-primary/50 transition">
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl">👥</div>
            <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Admin</span>
          </div>
          <p className="text-gray-400 text-sm mb-2">Usuários Registrados</p>
          <p className="text-4xl font-bold text-primary">1</p>
          <p className="text-xs text-gray-500 mt-2">Você (admin)</p>
        </div>

        {/* Uptime */}
        <div className="bg-darker/50 border border-gray-700 rounded-xl p-6 hover:border-primary/50 transition">
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl">⚡</div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-gray-400 text-sm mb-2">Uptime do Sistema</p>
          <p className="text-4xl font-bold text-primary">100%</p>
          <p className="text-xs text-gray-500 mt-2">Sem interrupções</p>
        </div>
      </div>

      {/* ===== AGENTES ONLINE ===== */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Agentes */}
        <div className="bg-darker/50 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            🤖 Agentes Especializados
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: '💰', name: 'Financeiro', status: 'online' },
              { emoji: '📊', name: 'Mercado', status: 'online' },
              { emoji: '🔍', name: 'Concorrentes', status: 'online' },
              { emoji: '🌐', name: 'Domínios', status: 'online' },
              { emoji: '🔑', name: 'Keywords', status: 'online' },
              { emoji: '📢', name: 'Anúncios', status: 'online' },
              { emoji: '🎥', name: 'Vídeos', status: 'online' },
              { emoji: '💳', name: 'Comprador', status: 'online' },
              { emoji: '🚀', name: 'Dev', status: 'online' },
            ].map((agent, i) => (
              <Link
                key={i}
                href={`/admin/agents?filter=${agent.name.toLowerCase()}`}
                className="bg-darker/50 border border-gray-600 hover:border-primary/50 rounded-lg p-4 transition transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{agent.emoji}</span>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
                <p className="font-semibold text-gray-300 text-sm">{agent.name}</p>
                <p className="text-xs text-green-400">✓ Online</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Ações Rápidas */}
        <div className="bg-darker/50 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            ⚡ Ações Rápidas
          </h2>
          <div className="space-y-4">
            <Link
              href="/admin/tasks"
              className="block bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 border border-primary/50 text-white p-4 rounded-lg transition transform hover:translate-x-1"
            >
              <div className="text-2xl mb-2">📋</div>
              <h3 className="font-semibold mb-1">Criar Nova Tarefa</h3>
              <p className="text-xs text-gray-400">Crie uma tarefa para os agentes executarem</p>
            </Link>

            <Link
              href="/admin/users"
              className="block bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 border border-primary/50 text-white p-4 rounded-lg transition transform hover:translate-x-1"
            >
              <div className="text-2xl mb-2">👥</div>
              <h3 className="font-semibold mb-1">Gerenciar Usuários</h3>
              <p className="text-xs text-gray-400">Controle permissões e roles de usuários</p>
            </Link>

            <Link
              href="/admin/analytics"
              className="block bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 border border-primary/50 text-white p-4 rounded-lg transition transform hover:translate-x-1"
            >
              <div className="text-2xl mb-2">📈</div>
              <h3 className="font-semibold mb-1">Ver Analytics</h3>
              <p className="text-xs text-gray-400">Estatísticas de desempenho detalhadas</p>
            </Link>

            <Link
              href="/admin/settings"
              className="block bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 border border-primary/50 text-white p-4 rounded-lg transition transform hover:translate-x-1"
            >
              <div className="text-2xl mb-2">⚙️</div>
              <h3 className="font-semibold mb-1">Configurações</h3>
              <p className="text-xs text-gray-400">Ajuste as configurações do sistema</p>
            </Link>
          </div>
        </div>
      </div>

      {/* ===== INFORMAÇÕES ===== */}
      <div className="bg-darker/50 border border-gray-700 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">📝 Informações do Sistema</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="text-gray-400 mb-2">Versão</p>
            <p className="text-primary font-semibold">Elon System v1.0</p>
            <p className="text-xs text-gray-500">MVP completo</p>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Arquitetura</p>
            <p className="text-primary font-semibold">Next.js 15 + React 19</p>
            <p className="text-xs text-gray-500">TypeScript + Tailwind</p>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Status</p>
            <p className="text-green-400 font-semibold">✓ Operacional</p>
            <p className="text-xs text-gray-500">Todos agentes online</p>
          </div>
        </div>
      </div>
    </div>
  )
}
