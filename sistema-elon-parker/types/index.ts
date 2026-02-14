export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
  createdAt: Date
  updatedAt: Date
}

export interface AuthToken {
  token: string
  expiresIn: number
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  name: string
  confirmPassword: string
}

export interface AuthResponse {
  success: boolean
  message: string
  user?: User
  token?: string
}

export interface Project {
  id: string
  name: string
  niche: string
  status: 'active' | 'paused' | 'archived'
  createdAt: Date
  updatedAt: Date
  userId: string
}
