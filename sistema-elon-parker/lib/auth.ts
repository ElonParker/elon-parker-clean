import { User, AuthResponse } from '@/types'

// Mock database de usuários (em produção, usar banco de dados real)
const users: Map<string, { email: string; password: string; name: string; role: 'admin' | 'user' }> = new Map()

// ✅ SEED: Usuários pré-registrados para teste
const initializeUsers = () => {
  users.set('admin@example.com', {
    email: 'admin@example.com',
    password: Buffer.from('admin123').toString('base64'),
    name: 'Admin User',
    role: 'admin',
  })

  users.set('user@example.com', {
    email: 'user@example.com',
    password: Buffer.from('user123').toString('base64'),
    name: 'Normal User',
    role: 'user',
  })

  users.set('demo@elon.com', {
    email: 'demo@elon.com',
    password: Buffer.from('demo123').toString('base64'),
    name: 'Demo Account',
    role: 'user',
  })

  // Gustavo - Admin master
  users.set('glcbranco96@icloud.com', {
    email: 'glcbranco96@icloud.com',
    password: Buffer.from('castelo2026').toString('base64'),
    name: 'Gustavo',
    role: 'admin',
  })
}

initializeUsers()

// Hash simplificado (em produção usar bcryptjs)
export async function hashPassword(password: string): Promise<string> {
  return Buffer.from(password).toString('base64')
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return Buffer.from(password).toString('base64') === hash
}

// ✅ TOKEN AGORA INCLUI: userId, email, role, name
export function generateToken(user: { id: string; email: string; role: string; name: string }): string {
  const payload = {
    userId: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24 horas
  }
  return Buffer.from(JSON.stringify(payload)).toString('base64')
}

// ✅ VERIFY TOKEN RETORNA: userId, email, role, name
export function verifyToken(token: string): { userId: string; email: string; role: string; name: string } | null {
  try {
    const payload = JSON.parse(Buffer.from(token, 'base64').toString())
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      return null // Token expirado
    }
    return {
      userId: payload.userId,
      email: payload.email,
      role: payload.role,
      name: payload.name,
    }
  } catch {
    return null
  }
}

// Registrar usuário
export async function registerUser(email: string, password: string, name: string): Promise<AuthResponse> {
  if (users.has(email)) {
    return { success: false, message: 'Email já registrado' }
  }

  if (password.length < 6) {
    return { success: false, message: 'Senha deve ter pelo menos 6 caracteres' }
  }

  const hashedPassword = await hashPassword(password)
  const userId = `user_${Date.now()}`

  users.set(email, {
    email,
    password: hashedPassword,
    name,
    role: 'user',
  })

  const token = generateToken({ id: userId, email, role: 'user', name })
  const user: User = {
    id: userId,
    email,
    name,
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return { success: true, message: 'Usuário registrado com sucesso', user, token }
}

// ✅ LOGIN RETORNA TOKEN COM ROLE
export async function loginUser(email: string, password: string): Promise<AuthResponse> {
  const user = users.get(email)

  if (!user) {
    return { success: false, message: 'Email ou senha inválidos' }
  }

  const isPasswordValid = await verifyPassword(password, user.password)
  if (!isPasswordValid) {
    return { success: false, message: 'Email ou senha inválidos' }
  }

  const userId = `user_${Array.from(users.keys()).indexOf(email)}`
  const token = generateToken({ id: userId, email: user.email, role: user.role, name: user.name })

  const userObj: User = {
    id: userId,
    email: user.email,
    name: user.name,
    role: user.role,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return { success: true, message: 'Login realizado com sucesso', user: userObj, token }
}

// Obter usuário por email
export function getUserByEmail(email: string): User | null {
  const user = users.get(email)
  if (!user) return null
  const userId = `user_${Array.from(users.keys()).indexOf(email)}`
  return {
    id: userId,
    email: user.email,
    name: user.name,
    role: user.role,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}
