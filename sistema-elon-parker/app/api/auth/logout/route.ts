export async function POST() {
  // Limpar cookie de autenticação
  return new Response(
    JSON.stringify({ success: true, message: 'Logout realizado com sucesso' }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': 'auth-token=; Path=/; Max-Age=0; HttpOnly; SameSite=Strict',
      },
    }
  )
}
