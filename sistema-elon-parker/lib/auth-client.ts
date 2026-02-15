// ============================================================
// AUTH CLIENT-SIDE — Toda lógica de autenticação roda no browser
// Para Cloudflare Pages (static export, sem server-side)
// ============================================================

export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
}

// ✅ Database de usuários (hardcoded para demo)
// Em produção: substituir por chamada a API externa (Cloudflare Workers, etc)
const USERS_DB: Record<string, { password: string; name: string; role: 'admin' | 'user' }> = {
  'admin@example.com': {
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
  },
  'glcbranco96@icloud.com': {
    password: 'castelo2026',
    name: 'Gustavo',
    role: 'admin',
  },
  'user@example.com': {
    password: 'user123',
    name: 'Normal User',
    role: 'user',
  },
  'demo@elon.com': {
    password: 'demo123',
    name: 'Demo Account',
    role: 'user',
  },
}

// ✅ LOGIN
export function login(email: string, password: string): { success: boolean; message: string; user?: User; token?: string } {
  const entry = USERS_DB[email]

  if (!entry) {
    return { success: false, message: 'Email ou senha inválidos' }
  }

  if (entry.password !== password) {
    return { success: false, message: 'Email ou senha inválidos' }
  }

  const user: User = {
    id: `user_${Object.keys(USERS_DB).indexOf(email)}`,
    email,
    name: entry.name,
    role: entry.role,
  }

  // Gerar token com dados do user
  const token = btoa(JSON.stringify({
    userId: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  }))

  // Salvar no localStorage
  localStorage.setItem('token', token)
  localStorage.setItem('user', JSON.stringify(user))

  return { success: true, message: 'Login realizado com sucesso', user, token }
}

// ✅ REGISTER
export function register(email: string, password: string, name: string): { success: boolean; message: string; user?: User } {
  if (USERS_DB[email]) {
    return { success: false, message: 'Email já registrado' }
  }

  if (password.length < 6) {
    return { success: false, message: 'Senha deve ter pelo menos 6 caracteres' }
  }

  // Em produção, salvar no backend
  // Para demo, apenas criar no localStorage
  const user: User = {
    id: `user_${Date.now()}`,
    email,
    name,
    role: 'user',
  }

  const token = btoa(JSON.stringify({
    userId: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  }))

  localStorage.setItem('token', token)
  localStorage.setItem('user', JSON.stringify(user))

  return { success: true, message: 'Usuário registrado com sucesso', user }
}

// ✅ LOGOUT
export function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

// ✅ GET CURRENT USER (do localStorage)
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null

  const token = localStorage.getItem('token')
  const userData = localStorage.getItem('user')

  if (!token || !userData) return null

  // Verificar se token não expirou
  try {
    const payload = JSON.parse(atob(token))
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      logout()
      return null
    }
  } catch {
    logout()
    return null
  }

  try {
    return JSON.parse(userData) as User
  } catch {
    logout()
    return null
  }
}

// ✅ IS ADMIN
export function isAdmin(): boolean {
  const user = getCurrentUser()
  return user?.role === 'admin'
}

// ✅ IS AUTHENTICATED
export function isAuthenticated(): boolean {
  return getCurrentUser() !== null
}
