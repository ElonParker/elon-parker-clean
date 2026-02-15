import { verifyToken } from '@/lib/auth'

export async function GET(request: Request) {
  try {
    // Tentar pegar token do header Authorization OU do cookie
    const authHeader = request.headers.get('Authorization')
    let token: string | null = null

    if (authHeader?.startsWith('Bearer ')) {
      token = authHeader.slice(7)
    }

    // Se não tem token no header, tentar cookie
    if (!token) {
      const cookieHeader = request.headers.get('Cookie')
      if (cookieHeader) {
        const cookies = Object.fromEntries(
          cookieHeader.split(';').map(c => {
            const [key, ...val] = c.trim().split('=')
            return [key, val.join('=')]
          })
        )
        token = cookies['auth-token'] || null
      }
    }

    if (!token) {
      return Response.json(
        { success: false, message: 'Token não fornecido' },
        { status: 401 }
      )
    }

    const decoded = verifyToken(token)

    if (!decoded) {
      return Response.json(
        { success: false, message: 'Token inválido ou expirado' },
        { status: 401 }
      )
    }

    return Response.json({
      success: true,
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role,
      name: decoded.name,
    })
  } catch (error) {
    return Response.json(
      { success: false, message: 'Erro no servidor' },
      { status: 500 }
    )
  }
}
