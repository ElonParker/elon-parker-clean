'use client'

export default function AnalyticsPage() {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50 rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-primary mb-2">📈 Analytics & Relatórios</h1>
        <p className="text-gray-400">Estatísticas detalhadas de desempenho do sistema</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-darker/50 border border-gray-700 rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-2">Taxa de Sucesso Agentes</p>
          <p className="text-4xl font-bold text-primary">100%</p>
          <p className="text-xs text-gray-500 mt-2">Todos operacionais</p>
        </div>
        <div className="bg-darker/50 border border-gray-700 rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-2">Tempo Médio por Tarefa</p>
          <p className="text-4xl font-bold text-primary">-</p>
          <p className="text-xs text-gray-500 mt-2">Sem tarefas ainda</p>
        </div>
        <div className="bg-darker/50 border border-gray-700 rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-2">Uptime do Sistema</p>
          <p className="text-4xl font-bold text-primary">100%</p>
          <p className="text-xs text-gray-500 mt-2">Sem downtime</p>
        </div>
      </div>

      <div className="bg-darker/50 border border-gray-700 rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">📊</div>
        <h2 className="text-2xl font-bold text-gray-400 mb-2">Análises em desenvolvimento</h2>
        <p className="text-gray-500">Dados de tarefas e performance aparecerão aqui após as primeiras execuções</p>
      </div>
    </div>
  )
}
