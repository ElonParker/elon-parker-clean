import { loginUser } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return Response.json(
        { success: false, message: 'Email e senha são obrigatórios' },
        { status: 400 }
      )
    }

    const result = await loginUser(email, password)

    if (result.success && result.token) {
      // ✅ Retornar token no body E setar cookie (dupla segurança)
      return new Response(
        JSON.stringify({
          success: true,
          message: result.message,
          token: result.token,
          user: result.user,
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': `auth-token=${result.token}; Path=/; Max-Age=86400; HttpOnly; SameSite=Strict`,
          },
        }
      )
    } else {
      return Response.json(
        { success: false, message: result.message },
        { status: 401 }
      )
    }
  } catch (error) {
    return Response.json(
      { success: false, message: 'Erro no servidor' },
      { status: 500 }
    )
  }
}
