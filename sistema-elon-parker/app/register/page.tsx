import RegisterForm from '@/components/RegisterForm'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-darker to-dark px-4">
      <div className="w-full max-w-md">
        {/* Logo / Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🤖</div>
          <h1 className="text-3xl font-bold text-primary mb-2">Elon Parker</h1>
          <p className="text-gray-400">Crie sua conta</p>
        </div>

        {/* Card */}
        <div className="bg-darker/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Registrar-se</h2>

          <RegisterForm />
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          © 2026 Elon Parker. Todos os direitos reservados.
        </p>
      </div>
    </div>
  )
}
