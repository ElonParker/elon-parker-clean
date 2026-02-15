'use client'

export default function SettingsPage() {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50 rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-primary mb-2">⚙️ Configurações</h1>
        <p className="text-gray-400">Ajuste as configurações do sistema Elon</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Configurações Gerais */}
        <div className="bg-darker/50 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">🔧 Configurações Gerais</h2>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm font-semibold block mb-2">Nome do Sistema</label>
              <input
                type="text"
                defaultValue="Elon System v1.0"
                className="w-full bg-darker border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm font-semibold block mb-2">Descrição</label>
              <textarea
                defaultValue="Sistema integrado de gestão de projetos SEO com 9 agentes IA"
                className="w-full bg-darker border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary outline-none h-20"
              />
            </div>
          </div>
        </div>

        {/* Segurança */}
        <div className="bg-darker/50 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">🔐 Segurança</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-4 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-gray-300">Exigir 2FA para admin</span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-gray-300">Logs de auditoria habilitados</span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-gray-300">CORS habilitado</span>
            </label>
          </div>
        </div>

        {/* API */}
        <div className="bg-darker/50 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">🔌 API</h2>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm font-semibold block mb-2">Base URL</label>
              <input
                type="text"
                defaultValue="https://api.elonsystem.com"
                disabled
                className="w-full bg-darker border border-gray-700 rounded-lg px-4 py-2 text-gray-500 focus:border-primary outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm font-semibold block mb-2">Rate Limit (req/min)</label>
              <input
                type="number"
                defaultValue="60"
                className="w-full bg-darker border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary outline-none"
              />
            </div>
          </div>
        </div>

        {/* Agentes */}
        <div className="bg-darker/50 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">🤖 Configuração de Agentes</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-4 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-gray-300">Habilitar paralelização de agentes</span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-gray-300">Cache de resultados</span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-gray-300">Conversas em tempo real</span>
            </label>
          </div>
        </div>

        {/* Botões */}
        <div className="flex gap-4 pt-4">
          <button className="bg-primary hover:bg-primary/80 text-white font-semibold px-8 py-3 rounded-lg transition">
            💾 Salvar Alterações
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition">
            ↩️ Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}
