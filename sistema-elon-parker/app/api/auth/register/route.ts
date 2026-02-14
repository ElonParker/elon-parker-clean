import { registerUser } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password, name, confirmPassword } = body

    if (!email || !password || !name) {
      return Response.json({
        success: false,
        message: 'Email, nome e senha são obrigatórios',
      })
    }

    if (password !== confirmPassword) {
      return Response.json({
        success: false,
        message: 'As senhas não correspondem',
      })
    }

    const result = await registerUser(email, password, name)

    if (result.success) {
      return Response.json({
        success: true,
        message: result.message,
        token: result.token,
        user: result.user,
      })
    } else {
      return Response.json({
        success: false,
        message: result.message,
      }, { status: 400 })
    }
  } catch (error) {
    return Response.json({
      success: false,
      message: 'Erro no servidor',
    }, { status: 500 })
  }
}
