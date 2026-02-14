import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-dark via-darker to-dark px-4">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="text-7xl mb-6 animate-fade-in">🤖</div>
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Elon Parker</h1>
        <p className="text-xl text-gray-400 mb-8">
          Sistema integrado de gestão de projetos SEO com autenticação de usuários
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <Link
            href="/login"
            className="px-8 py-3 bg-primary hover:bg-primary/80 text-white font-semibold rounded-lg transition transform hover:scale-105"
          >
            Entrar
          </Link>
          <Link
            href="/register"
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition transform hover:scale-105"
          >
            Registrar-se
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
        <div className="bg-darker/50 border border-gray-700 rounded-xl p-6">
          <div className="text-3xl mb-3">🔐</div>
          <h3 className="text-lg font-semibold text-primary mb-2">Segurança</h3>
          <p className="text-gray-400 text-sm">Autenticação robusta com JWT e senhas encriptadas</p>
        </div>

        <div className="bg-darker/50 border border-gray-700 rounded-xl p-6">
          <div className="text-3xl mb-3">📊</div>
          <h3 className="text-lg font-semibold text-primary mb-2">Analytics</h3>
          <p className="text-gray-400 text-sm">Acompanhe seu progresso em tempo real</p>
        </div>

        <div className="bg-darker/50 border border-gray-700 rounded-xl p-6">
          <div className="text-3xl mb-3">⚡</div>
          <h3 className="text-lg font-semibold text-primary mb-2">Performance</h3>
          <p className="text-gray-400 text-sm">Interface rápida e responsiva com Next.js</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm w-full">
        <p>© 2026 Elon Parker. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
