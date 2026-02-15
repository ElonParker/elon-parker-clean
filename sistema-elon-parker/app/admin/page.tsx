'use client'

import Link from 'next/link'

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">🛡️ Painel Administrativo</h1>
      <p className="text-slate-400 mb-8">Visão geral do sistema Elon Parker</p>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6">
          <div className="text-3xl mb-2">🤖</div>
          <p className="text-slate-400 text-sm">Agentes</p>
          <p className="text-3xl font-bold text-white">3</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6">
          <div className="text-3xl mb-2">📋</div>
          <p className="text-slate-400 text-sm">Tarefas Ativas</p>
          <p className="text-3xl font-bold text-white">12</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6">
          <div className="text-3xl mb-2">👥</div>
          <p className="text-slate-400 text-sm">Usuários</p>
          <p className="text-3xl font-bold text-white">4</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6">
          <div className="text-3xl mb-2">✅</div>
          <p className="text-slate-400 text-sm">Taxa Sucesso</p>
          <p className="text-3xl font-bold text-green-400">94%</p>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Link
          href="/admin/agents"
          className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition group"
        >
          <div className="text-4xl mb-3 group-hover:scale-110 transition">🤖</div>
          <h3 className="text-lg font-bold text-white mb-1">Gerenciar Agentes</h3>
          <p className="text-sm text-slate-400">Configurar, ativar e monitorar agentes IA</p>
        </Link>

        <Link
          href="/admin/tasks"
          className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition group"
        >
          <div className="text-4xl mb-3 group-hover:scale-110 transition">📋</div>
          <h3 className="text-lg font-bold text-white mb-1">Gerenciar Tarefas</h3>
          <p className="text-sm text-slate-400">Acompanhar tarefas e sincronizar com Trello</p>
        </Link>

        <Link
          href="/admin/users"
          className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6 hover:border-green-400/50 transition group"
        >
          <div className="text-4xl mb-3 group-hover:scale-110 transition">👥</div>
          <h3 className="text-lg font-bold text-white mb-1">Gerenciar Usuários</h3>
          <p className="text-sm text-slate-400">Controle de acesso e permissões</p>
        </Link>
      </div>

      {/* System Status */}
      <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">🟢 Status do Sistema</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm text-slate-300">Gateway</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm text-slate-300">Trello API</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm text-slate-300">Gmail API</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm text-slate-300">GitHub API</span>
          </div>
        </div>
      </div>
    </div>
  )
}
