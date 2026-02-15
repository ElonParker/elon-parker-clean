'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/verify', {
          credentials: 'include',
        });

        if (!response.ok) {
          router.push('/dashboard');
          return;
        }

        const data = await response.json();
        
        if (data.role !== 'admin') {
          router.push('/dashboard');
          return;
        }

        setIsAdmin(true);
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/dashboard');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
              ⚙️
            </div>
            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-slate-800/30 backdrop-blur border-r border-slate-700/50 min-h-screen">
          <nav className="p-6 space-y-2">
            <Link
              href="/admin/agents"
              className="block px-4 py-2 rounded-lg hover:bg-slate-700/50 text-slate-200 hover:text-white transition"
            >
              🤖 Agentes
            </Link>
            <Link
              href="/admin/tasks"
              className="block px-4 py-2 rounded-lg hover:bg-slate-700/50 text-slate-200 hover:text-white transition"
            >
              📋 Tarefas
            </Link>
            <Link
              href="/admin/users"
              className="block px-4 py-2 rounded-lg hover:bg-slate-700/50 text-slate-200 hover:text-white transition"
            >
              👥 Usuários
            </Link>
            <Link
              href="/admin/analytics"
              className="block px-4 py-2 rounded-lg hover:bg-slate-700/50 text-slate-200 hover:text-white transition"
            >
              📊 Analytics
            </Link>
            <Link
              href="/admin/settings"
              className="block px-4 py-2 rounded-lg hover:bg-slate-700/50 text-slate-200 hover:text-white transition"
            >
              ⚙️ Configurações
            </Link>
            <hr className="my-4 border-slate-700/50" />
            <Link
              href="/dashboard"
              className="block px-4 py-2 rounded-lg hover:bg-slate-700/50 text-slate-200 hover:text-white transition"
            >
              ← Voltar ao Dashboard
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
