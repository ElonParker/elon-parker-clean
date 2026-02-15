import { User, AuthResponse } from '@/types'

// Mock database de usuários (em produção, usar banco de dados real)
const users: Map<string, { email: string; password: string; name: string; role: string }> = new Map()

// ✅ SEED: Usuários pré-registrados para teste
// (Serão removidos quando D1 estiver pronto)
const initializeUsers = () => {
  // Admin user
  users.set('admin@example.com', {
    email: 'admin@example.com',
    password: Buffer.from('admin123').toString('base64'), // "admin123"
    name: 'Admin User',
    role: 'admin',
  })

  // Normal user
  users.set('user@example.com', {
    email: 'user@example.com',
    password: Buffer.from('user123').toString('base64'), // "user123"
    name: 'Normal User',
    role: 'user',
  })

  // Demo user
  users.set('demo@elon.com', {
    email: 'demo@elon.com',
    password: Buffer.from('demo123').toString('base64'), // "demo123"
    name: 'Demo Account',
    role: 'user',
  })
}

// Inicializar usuários de teste na primeira execução
initializeUsers()

// Função para hash (simplificada - em produção usar bcryptjs)
export async function hashPassword(password: string): Promise<string> {
  // Em um ambiente real, usar bcryptjs
  // const bcrypt = require('bcryptjs')
  // return bcrypt.hash(password, 10)
  
  // Para demo, usar uma função simples
  return Buffer.from(password).toString('base64')
}

// Função para verificar senha
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const passwordHash = Buffer.from(password).toString('base64')
  return passwordHash === hash
}

// Gerar token JWT (simplificado)
export function generateToken(userId: string): string {
  const payload = {
    userId,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24 horas
  }
  // Em produção, usar jsonwebtoken
  return Buffer.from(JSON.stringify(payload)).toString('base64')
}

// Verificar token
export function verifyToken(token: string): { userId: string } | null {
  try {
    const payload = JSON.parse(Buffer.from(token, 'base64').toString())
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      return null // Token expirado
    }
    return { userId: payload.userId }
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

  const token = generateToken(userId)
  const user: User = {
    id: userId,
    email,
    name,
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return {
    success: true,
    message: 'Usuário registrado com sucesso',
    user,
    token,
  }
}

// Login de usuário
export async function loginUser(email: string, password: string): Promise<AuthResponse> {
  const user = users.get(email)

  if (!user) {
    return { success: false, message: 'Email ou senha inválidos' }
  }

  const isPasswordValid = await verifyPassword(password, user.password)

  if (!isPasswordValid) {
    return { success: false, message: 'Email ou senha inválidos' }
  }

  const userId = `user_${Array.from(users.entries()).findIndex(([k]) => k === email)}`
  const token = generateToken(userId)
  const userObj: User = {
    id: userId,
    email: user.email,
    name: user.name,
    role: user.role as 'admin' | 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return {
    success: true,
    message: 'Login realizado com sucesso',
    user: userObj,
    token,
  }
}

// Obter usuário por ID
export function getUserById(userId: string): User | null {
  // Em produção, buscar do banco de dados
  for (const [email, user] of users) {
    if (`user_${Array.from(users.entries()).findIndex(([k]) => k === email)}` === userId) {
      return {
        id: userId,
        email: user.email,
        name: user.name,
        role: user.role as 'admin' | 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    }
  }
  return null
}
