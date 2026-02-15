'use client';

import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'viewer';
  status: 'active' | 'inactive';
  joinedDate: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        // Simulado - substituir com API real
        const mockUsers: User[] = [
          {
            id: 'user-1',
            name: 'Gustavo Castelo Branco',
            email: 'glcbranco96@icloud.com',
            role: 'admin',
            status: 'active',
            joinedDate: '2026-02-01',
          },
          {
            id: 'user-2',
            name: 'Elon Parker',
            email: 'elon.parker@castelodigital.net',
            role: 'admin',
            status: 'active',
            joinedDate: '2026-02-01',
          },
          {
            id: 'user-3',
            name: 'Team Member',
            email: 'team@example.com',
            role: 'user',
            status: 'active',
            joinedDate: '2026-02-10',
          },
        ];
        setUsers(mockUsers);
      } catch (error) {
        console.error('Failed to load users:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const getRoleColor = (role: User['role']) => {
    switch (role) {
      case 'admin':
        return 'bg-red-500/20 text-red-300';
      case 'user':
        return 'bg-blue-500/20 text-blue-300';
      case 'viewer':
        return 'bg-gray-500/20 text-gray-300';
      default:
        return 'bg-slate-500/20 text-slate-300';
    }
  };

  if (loading) {
    return <div className="text-white text-center py-8">Carregando usuários...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">👥 Gerenciamento de Usuários</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-slate-300">
          <thead className="bg-slate-800/50 border-b border-slate-700/50">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-white">Nome</th>
              <th className="px-6 py-3 text-left font-semibold text-white">Email</th>
              <th className="px-6 py-3 text-left font-semibold text-white">Role</th>
              <th className="px-6 py-3 text-left font-semibold text-white">Status</th>
              <th className="px-6 py-3 text-left font-semibold text-white">Membro desde</th>
              <th className="px-6 py-3 text-left font-semibold text-white">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-slate-800/30 transition">
                <td className="px-6 py-4 font-medium text-white">{user.name}</td>
                <td className="px-6 py-4 text-slate-400">{user.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'active'
                        ? 'bg-green-500/20 text-green-300'
                        : 'bg-gray-500/20 text-gray-300'
                    }`}
                  >
                    {user.status === 'active' ? '🟢 Ativo' : '⚪ Inativo'}
                  </span>
                </td>
                <td className="px-6 py-4">{user.joinedDate}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="px-3 py-1 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 rounded text-xs transition">
                    Editar
                  </button>
                  <button className="px-3 py-1 bg-slate-600/20 hover:bg-slate-600/30 text-slate-300 rounded text-xs transition">
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
          + Adicionar Usuário
        </button>
      </div>
    </div>
  );
}
