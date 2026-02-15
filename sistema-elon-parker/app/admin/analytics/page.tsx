'use client';

import { useState, useEffect } from 'react';

interface Metric {
  label: string;
  value: string | number;
  icon: string;
  trend?: 'up' | 'down' | 'stable';
}

export default function AnalyticsPage() {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMetrics = async () => {
      try {
        // Simulado - substituir com API real
        const mockMetrics: Metric[] = [
          {
            label: 'Agentes Ativos',
            value: 3,
            icon: '🤖',
            trend: 'up',
          },
          {
            label: 'Tarefas Completadas',
            value: 47,
            icon: '✅',
            trend: 'up',
          },
          {
            label: 'Taxa de Sucesso',
            value: '94%',
            icon: '📈',
            trend: 'stable',
          },
          {
            label: 'Tempo Médio por Tarefa',
            value: '2.4h',
            icon: '⏱️',
            trend: 'down',
          },
          {
            label: 'Usuários Ativos',
            value: 2,
            icon: '👥',
            trend: 'stable',
          },
          {
            label: 'Sincronizações Trello',
            value: 156,
            icon: '🔄',
            trend: 'up',
          },
        ];
        setMetrics(mockMetrics);
      } catch (error) {
        console.error('Failed to load metrics:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMetrics();
  }, []);

  if (loading) {
    return <div className="text-white text-center py-8">Carregando analytics...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">📊 Analytics & Monitoramento</h1>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-6 hover:border-slate-600/50 transition"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">{metric.icon}</div>
              {metric.trend === 'up' && <div className="text-green-400 text-lg">📈</div>}
              {metric.trend === 'down' && <div className="text-red-400 text-lg">📉</div>}
              {metric.trend === 'stable' && <div className="text-yellow-400 text-lg">➡️</div>}
            </div>
            <p className="text-slate-400 text-sm mb-2">{metric.label}</p>
            <p className="text-3xl font-bold text-white">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Atividade Recente</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">Tarefa concluída: [DEV] Criar rota /admin/</span>
            <span className="text-slate-500">há 5 min</span>
          </div>
          <div className="flex items-center justify-between text-sm border-t border-slate-700/50 pt-3">
            <span className="text-slate-400">Sincronização Trello realizada</span>
            <span className="text-slate-500">há 15 min</span>
          </div>
          <div className="flex items-center justify-between text-sm border-t border-slate-700/50 pt-3">
            <span className="text-slate-400">Novo usuário adicionado ao projeto</span>
            <span className="text-slate-500">há 2h</span>
          </div>
        </div>
      </div>

      {/* System Health */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Saúde do Sistema</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Gateway OpenClaw</span>
              <span className="text-green-400 font-medium">✓ Operacional</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">API Trello</span>
              <span className="text-green-400 font-medium">✓ Operacional</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Gmail API</span>
              <span className="text-green-400 font-medium">✓ Operacional</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">GitHub API</span>
              <span className="text-green-400 font-medium">✓ Operacional</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Próximas Tarefas</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-blue-400">→</span>
              <span className="text-slate-300">Completar páginas admin (analytics, settings)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400">→</span>
              <span className="text-slate-300">Fazer commit & push para GitHub</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400">→</span>
              <span className="text-slate-300">Consolidação diária 23h</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400">→</span>
              <span className="text-slate-300">Iniciar fase 1 do 9-agent system</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
