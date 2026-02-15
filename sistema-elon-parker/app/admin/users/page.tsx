'use client'

import { useEffect, useState } from 'react'

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUsers([JSON.parse(user)])
    }
  }, [])

  return (
    <div className="animate-fade-in space-y-8">
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50 rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-primary mb-2">👥 Gerenciar Usuários</h1>
        <p className="text-gray-400">Controle permissões, roles e acesso de usuários</p>
      </div>

      <div className="bg-darker/50 border border-gray-700 rounded-2xl overflow-hidden">
        <div className="px-8 py-4 border-b border-gray-700 bg-darker/50">
          <h2 className="text-xl font-bold text-white">Total: {users.length}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="px-8 py-4 text-left text-gray-400 font-semibold">Nome</th>
                <th className="px-8 py-4 text-left text-gray-400 font-semibold">Email</th>
                <th className="px-8 py-4 text-left text-gray-400 font-semibold">Role</th>
                <th className="px-8 py-4 text-left text-gray-400 font-semibold">Status</th>
                <th className="px-8 py-4 text-left text-gray-400 font-semibold">Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i} className="border-b border-gray-700/50 hover:bg-darker/50 transition">
                  <td className="px-8 py-4">
                    <span className="text-white font-semibold">{user.name || 'N/A'}</span>
                  </td>
                  <td className="px-8 py-4 text-gray-400">{user.email}</td>
                  <td className="px-8 py-4">
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm font-semibold">
                      {user.role || 'user'}
                    </span>
                  </td>
                  <td className="px-8 py-4">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-green-400 text-sm">Online</span>
                    </span>
                  </td>
                  <td className="px-8 py-4 flex gap-2">
                    <button className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-200 px-3 py-1 rounded transition">
                      Editar
                    </button>
                    <button className="text-xs bg-red-600/20 hover:bg-red-600/30 text-red-400 px-3 py-1 rounded transition">
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button className="bg-primary hover:bg-primary/80 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105">
        ➕ Adicionar Novo Usuário
      </button>
    </div>
  )
}
