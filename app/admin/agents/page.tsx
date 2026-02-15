'use client';

import { useState, useEffect } from 'react';

interface Agent {
  id: string;
  name: string;
  status: 'active' | 'inactive';
  lastSeen: string;
  tasks: number;
}

export default function AgentsPage() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAgents = async () => {
      try {
        // Simulado - substituir com API real
        const mockAgents: Agent[] = [
          {
            id: 'elon-1',
            name: 'Elon Parker',
            status: 'active',
            lastSeen: new Date().toISOString(),
            tasks: 12,
          },
          {
            id: 'agent-2',
            name: 'Financial Agent',
            status: 'active',
            lastSeen: new Date(Date.now() - 3600000).toISOString(),
            tasks: 5,
          },
          {
            id: 'agent-3',
            name: 'Market Analysis',
            status: 'inactive',
            lastSeen: new Date(Date.now() - 86400000).toISOString(),
            tasks: 8,
          },
        ];
        setAgents(mockAgents);
      } catch (error) {
        console.error('Failed to load agents:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAgents();
  }, []);

  if (loading) {
    return <div className="text-white text-center py-8">Carregando agentes...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">🤖 Gerenciamento de Agentes</h1>

      <div className="grid gap-6">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-6 hover:border-slate-600/50 transition"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{agent.name}</h3>
                <p className="text-sm text-slate-400">{agent.id}</p>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  agent.status === 'active'
                    ? 'bg-green-500/20 text-green-300'
                    : 'bg-gray-500/20 text-gray-300'
                }`}
              >
                {agent.status === 'active' ? '🟢 Ativo' : '⚪ Inativo'}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-400">Última atividade</p>
                <p className="text-white">
                  {new Date(agent.lastSeen).toLocaleString('pt-BR')}
                </p>
              </div>
              <div>
                <p className="text-slate-400">Tarefas em andamento</p>
                <p className="text-white font-semibold">{agent.tasks}</p>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="px-3 py-1 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 rounded text-sm transition">
                Ver Detalhes
              </button>
              <button className="px-3 py-1 bg-slate-600/20 hover:bg-slate-600/30 text-slate-300 rounded text-sm transition">
                Configurar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
