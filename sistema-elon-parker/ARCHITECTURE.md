# 🏗️ Arquitetura do Sistema

## Visão Geral

Elon Parker é um sistema full-stack de gestão de projetos SEO com autenticação de usuários, construído com **Next.js App Router**.

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENTE (Browser)                     │
│  ┌────────────────────────────────────────────────────┐  │
│  │ React Components (Login, Register, Dashboard)      │  │
│  │ Tailwind CSS (Styling)                             │  │
│  │ localStorage (Token & User Data)                   │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────┬──────────────────────────────────┘
                       │ HTTP/REST API
                       ↓
┌─────────────────────────────────────────────────────────┐
│                   SERVIDOR (Next.js)                     │
│  ┌────────────────────────────────────────────────────┐  │
│  │ API Routes (/api/auth/login, /api/auth/register)  │  │
│  │ Middleware (Autenticação)                          │  │
│  │ Lib (auth.ts - JWT, hashing)                       │  │
│  │ Database Layer (pronto para integração)            │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────┬──────────────────────────────────┘
                       │ Queries
                       ↓
┌─────────────────────────────────────────────────────────┐
│              BASE DE DADOS (Futuro)                      │
│  ┌────────────────────────────────────────────────────┐  │
│  │ PostgreSQL / MongoDB                               │  │
│  │ - Users                                            │  │
│  │ - Projects                                         │  │
│  │ - Backlinks                                        │  │
│  │ - Keywords                                         │  │
│  └────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## Stack Tecnológico

| Camada | Tecnologia | Propósito |
|--------|-----------|-----------|
| **Frontend** | React 19 + Next.js 15 | Interface do usuário |
| **Styling** | Tailwind CSS 3 | Design responsivo |
| **Backend** | Next.js API Routes | Servidor |
| **Autenticação** | JWT + localStorage | Gestão de sessão |
| **Linguagem** | TypeScript 5 | Type-safety |
| **BD** | Preparado para PostgreSQL/MongoDB | Persistência |

## Fluxo de Autenticação

### 1. Registro

```
Cliente                           Servidor
  │                                  │
  ├─ POST /api/auth/register ──────> │
  │  (email, password, name)          │
  │                                  │
  │                    Validar dados  │
  │                    Fazer hash     │
  │                    Salvar usuário │
  │                    Gerar JWT      │
  │                                  │
  │ <────── { token, user } ─────────┤
  │                                  │
  └─ Salvar em localStorage           │
    Redirecionar para dashboard      │
```

### 2. Login

```
Cliente                           Servidor
  │                                  │
  ├─ POST /api/auth/login ────────> │
  │  (email, password)               │
  │                                  │
  │                    Buscar usuário │
  │                    Verificar pass │
  │                    Gerar JWT      │
  │                                  │
  │ <────── { token, user } ─────────┤
  │                                  │
  └─ Salvar em localStorage           │
    Redirecionar para dashboard      │
```

### 3. Verificação de Sessão

```
Cliente (Page Load)
  │
  ├─ Verificar localStorage
  │  ├─ Token existe?
  │  └─ User data existe?
  │
  ├─ Sim → Redirecionar para dashboard
  └─ Não → Redirecionar para login
```

## Estrutura de Dados

### User
```typescript
{
  id: string,           // user_1707940123
  email: string,        // gustavo@elon.com
  name: string,         // Gustavo
  password: string,     // hash (nunca enviado)
  role: 'user' | 'admin',
  createdAt: Date,
  updatedAt: Date
}
```

### Project
```typescript
{
  id: string,
  name: string,         // acompanhantes10.com
  niche: string,        // Adult
  status: 'active' | 'paused' | 'archived',
  userId: string,       // Link para User
  createdAt: Date,
  updatedAt: Date
}
```

### JWT Token
```typescript
{
  userId: string,
  iat: number,          // Issued at
  exp: number,          // Expiration (24h)
}
```

## Fluxo de Requisições

### Autenticada

```
1. Cliente faz requisição
   ├─ Adiciona header: Authorization: Bearer <token>
   └─ Envia request

2. Servidor recebe
   ├─ Valida token
   ├─ Extrai userId
   └─ Processa requisição

3. Resposta
   └─ Retorna dados + novo token (opcional)
```

### Não Autenticada

```
1. Cliente tenta acessar /dashboard
   └─ useEffect detecta sem token

2. Redirecionamento
   ├─ router.push('/login')
   └─ Renderiza login form
```

## Rotas Protegidas

| Rota | Autenticação | Descrição |
|------|-------------|-----------|
| `/` | ❌ Não | Homepage |
| `/login` | ❌ Não | Página de login |
| `/register` | ❌ Não | Página de registro |
| `/dashboard` | ✅ Sim | Dashboard principal |
| `/projects` | ✅ Sim | Listagem de projetos |
| `/api/auth/login` | ❌ Não | Endpoint de login |
| `/api/auth/register` | ❌ Não | Endpoint de registro |
| `/api/projects` | ✅ Sim | API de projetos |

## Segurança

### Implementadas ✅
- Senhas com hash (pronto para bcryptjs)
- JWT com expiração
- Validação de entrada
- CORS ready
- HTTPS (em produção)

### Planejadas 🔄
- Rate limiting
- 2FA (Two-Factor)
- CSRF protection
- SQL injection prevention
- XSS protection

## Performance

### Otimizações
- Next.js Image component (lazy loading)
- Code splitting automático
- CSS-in-JS (Tailwind)
- Server-side rendering (SSR) quando necessário
- Static generation (SSG) para páginas públicas

### Métricas Alvo
- First Contentful Paint (FCP): < 1s
- Time to Interactive (TTI): < 2s
- Cumulative Layout Shift (CLS): < 0.1

## Escalabilidade

### Para Banco de Dados
```typescript
// Integrar PostgreSQL
import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})
```

### Para Cache
```typescript
// Integrar Redis
import redis from 'redis'

const client = redis.createClient()
```

### Para Fila de Jobs
```typescript
// Integrar Bull
import Queue from 'bull'

const emailQueue = new Queue('email-notifications')
```

## Implantação

### Desenvolvimento
```bash
npm run dev
```

### Produção (Vercel)
```bash
vercel deploy --prod
```

### Produção (Cloudflare Pages)
```bash
npm run build
git push origin main
# Cloudflare auto-deploy
```

---

**Última atualização:** 2026-02-14
