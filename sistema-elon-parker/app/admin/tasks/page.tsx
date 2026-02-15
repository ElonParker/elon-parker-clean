'use client'

export default function TasksPage() {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50 rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-primary mb-2">📋 Gerenciar Tarefas</h1>
        <p className="text-gray-400">Crie e monitore tarefas para os agentes executarem</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-darker/50 border border-gray-700 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Total</p>
          <p className="text-3xl font-bold text-primary">0</p>
        </div>
        <div className="bg-darker/50 border border-gray-700 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Em Andamento</p>
          <p className="text-3xl font-bold text-yellow-400">0</p>
        </div>
        <div className="bg-darker/50 border border-gray-700 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Concluídas</p>
          <p className="text-3xl font-bold text-green-400">0</p>
        </div>
        <div className="bg-darker/50 border border-gray-700 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Taxa de Sucesso</p>
          <p className="text-3xl font-bold text-primary">0%</p>
        </div>
      </div>

      <div className="bg-darker/50 border border-gray-700 rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">📋</div>
        <h2 className="text-2xl font-bold text-gray-400 mb-2">Nenhuma tarefa criada ainda</h2>
        <p className="text-gray-500 mb-6">Crie sua primeira tarefa para os 9 agentes executarem!</p>
        <button className="bg-primary hover:bg-primary/80 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105">
          ➕ Criar Nova Tarefa
        </button>
      </div>
    </div>
  )
}
