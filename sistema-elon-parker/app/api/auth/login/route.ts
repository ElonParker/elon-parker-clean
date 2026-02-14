import { loginUser } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return Response.json({
        success: false,
        message: 'Email e senha são obrigatórios',
      })
    }

    const result = await loginUser(email, password)

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
      }, { status: 401 })
    }
  } catch (error) {
    return Response.json({
      success: false,
      message: 'Erro no servidor',
    }, { status: 500 })
  }
}
