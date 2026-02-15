'use client'

export default function AgentsPage() {
  const agents = [
    { emoji: '💰', name: 'Financeiro', desc: 'Análise de ROI e fluxo de caixa', status: 'online' },
    { emoji: '📊', name: 'Analista de Mercado', desc: 'Pesquisa de tendências e volume', status: 'online' },
    { emoji: '🔍', name: 'Analista de Concorrentes', desc: 'Análise de backlinks e gaps', status: 'online' },
    { emoji: '🌐', name: 'Procurador de Domínios', desc: 'Procura domínios disponíveis', status: 'online' },
    { emoji: '🔑', name: 'Procurador de Keywords', desc: 'Pesquisa keywords com potencial', status: 'online' },
    { emoji: '📢', name: 'Procurador de Anúncios', desc: 'Testa ad copies virais', status: 'online' },
    { emoji: '🎥', name: 'Procurador de Vídeos', desc: 'Encontra ângulos virais', status: 'online' },
    { emoji: '💳', name: 'Comprador de Domínios', desc: 'Automatiza compra de domínios', status: 'online' },
    { emoji: '🚀', name: 'Dev Full Cloudflare', desc: 'Cria infraestrutura e deploy', status: 'online' },
  ]

  return (
    <div className="animate-fade-in space-y-8">
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50 rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-primary mb-2">🤖 Agentes Especializados</h1>
        <p className="text-gray-400">9 agentes IA colaborativos trabalhando em tempo real</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent, i) => (
          <div key={i} className="bg-darker/50 border border-gray-700 rounded-xl p-6 hover:border-primary/50 transition">
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">{agent.emoji}</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">{agent.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{agent.desc}</p>
            <div className="flex items-center justify-between pt-4 border-t border-gray-600">
              <span className="text-xs text-green-400">✓ {agent.status}</span>
              <button className="text-xs bg-primary/20 hover:bg-primary/30 text-primary px-3 py-1 rounded transition">
                Ver detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
