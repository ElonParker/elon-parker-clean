'use client';

import { useState, useEffect } from 'react';

interface Task {
  id: string;
  title: string;
  status: 'planejado' | 'em-progresso' | 'bloqueado' | 'concluido';
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  trelloCard?: string;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        // Simulado - substituir com API real + Trello sync
        const mockTasks: Task[] = [
          {
            id: 'task-1',
            title: '[DEV] Criar rota /admin/ exclusiva com validação de role',
            status: 'em-progresso',
            priority: 'high',
            assignee: 'Elon Parker',
            trelloCard: 'https://trello.com/c/abc123',
          },
          {
            id: 'task-2',
            title: '[INTEG] Integrar Gmail API com RFC 2047 encoding',
            status: 'concluido',
            priority: 'high',
            assignee: 'Elon Parker',
            trelloCard: 'https://trello.com/c/def456',
          },
          {
            id: 'task-3',
            title: '[RESEARCH] Analisar 9-Agent System Architecture',
            status: 'concluido',
            priority: 'medium',
            assignee: 'Gustavo',
            trelloCard: 'https://trello.com/c/ghi789',
          },
          {
            id: 'task-4',
            title: '[BUG] Corrigir redirect para /admin/ após deploy',
            status: 'planejado',
            priority: 'high',
            assignee: 'Elon Parker',
          },
        ];
        setTasks(mockTasks);
      } catch (error) {
        console.error('Failed to load tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'concluido':
        return 'bg-green-500/20 text-green-300';
      case 'em-progresso':
        return 'bg-blue-500/20 text-blue-300';
      case 'bloqueado':
        return 'bg-red-500/20 text-red-300';
      case 'planejado':
        return 'bg-gray-500/20 text-gray-300';
      default:
        return 'bg-slate-500/20 text-slate-300';
    }
  };

  const getPriorityIcon = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return '🔴';
      case 'medium':
        return '🟡';
      case 'low':
        return '🟢';
    }
  };

  if (loading) {
    return <div className="text-white text-center py-8">Carregando tarefas...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">📋 Gerenciamento de Tarefas</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-slate-300">
          <thead className="bg-slate-800/50 border-b border-slate-700/50">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-white">Título</th>
              <th className="px-6 py-3 text-left font-semibold text-white">Status</th>
              <th className="px-6 py-3 text-left font-semibold text-white">Prioridade</th>
              <th className="px-6 py-3 text-left font-semibold text-white">Atribuído</th>
              <th className="px-6 py-3 text-left font-semibold text-white">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-slate-800/30 transition">
                <td className="px-6 py-4 font-medium text-white">{task.title}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                    {task.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span>{getPriorityIcon(task.priority)} {task.priority}</span>
                </td>
                <td className="px-6 py-4">{task.assignee}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="px-3 py-1 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 rounded text-xs transition">
                    Editar
                  </button>
                  {task.trelloCard && (
                    <a
                      href={task.trelloCard}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-slate-600/20 hover:bg-slate-600/30 text-slate-300 rounded text-xs transition"
                    >
                      Trello
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-6 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-2">📊 Sincronização Trello</h3>
        <p className="text-slate-400 text-sm mb-4">
          Todas as tarefas são sincronizadas em tempo real com o Trello. Atualizações ocorrem automaticamente.
        </p>
        <button className="px-4 py-2 bg-slate-600/20 hover:bg-slate-600/30 text-slate-300 rounded text-sm transition">
          🔄 Sincronizar Agora
        </button>
      </div>
    </div>
  );
}
