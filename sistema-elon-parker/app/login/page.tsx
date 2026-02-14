import LoginForm from '@/components/LoginForm'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-darker to-dark px-4">
      <div className="w-full max-w-md">
        {/* Logo / Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🤖</div>
          <h1 className="text-3xl font-bold text-primary mb-2">Elon Parker</h1>
          <p className="text-gray-400">Sistema de Gestão SEO</p>
        </div>

        {/* Card */}
        <div className="bg-darker/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Faça Login</h2>

          <LoginForm />

          {/* Demo Login */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-xs text-gray-500 mb-3">Credenciais de demonstração:</p>
            <div className="bg-gray-800/50 rounded p-3 text-xs text-gray-300 space-y-1">
              <p>📧 <span className="font-mono">demo@elon.com</span></p>
              <p>🔑 <span className="font-mono">demo123</span></p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          © 2026 Elon Parker. Todos os direitos reservados.
        </p>
      </div>
    </div>
  )
}
