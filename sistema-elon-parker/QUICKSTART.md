# ⚡ Quick Start — Sistema de Autenticação Elon Parker

## 🚀 Começar em 3 passos

### 1️⃣ Instalar Dependências

```bash
cd /data/.openclaw/workspace/sistema-elon-parker
npm install
```

**Tempo estimado:** 2-3 minutos

### 2️⃣ Rodar em Desenvolvimento

```bash
npm run dev
```

**Output esperado:**
```
  ▲ Next.js 15.1.0
  - Local:        http://localhost:3000
  - Environments: .env.local
```

### 3️⃣ Acessar no Navegador

Abra: **http://localhost:3000**

## 📋 Fluxo de Teste

### Opção 1: Usar Credenciais de Demo

```
Email:    demo@elon.com
Senha:    demo123
```

1. Clique em "Entrar" na homepage
2. Cole as credenciais acima
3. Clique em "Entrar"
4. Você será redirecionado para o dashboard

### Opção 2: Criar Nova Conta

1. Na homepage, clique em "Registrar-se"
2. Preencha:
   - Nome: `Seu Nome`
   - Email: `seu@email.com`
   - Senha: `abc123` (mínimo 6 caracteres)
   - Confirmar Senha: `abc123`
3. Clique em "Registrar"
4. Você será redirecionado para o dashboard automaticamente

## 📁 Estrutura do Projeto

```
sistema-elon-parker/
├── app/                    # Rotas e páginas (Next.js App Router)
│   ├── api/auth/          # Endpoints de autenticação
│   ├── dashboard/         # Dashboard protegido
│   ├── login/             # Página de login
│   ├── register/          # Página de registro
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Homepage
├── components/            # Componentes React reutilizáveis
├── lib/                   # Funções utilitárias (auth.ts)
├── types/                 # Tipos TypeScript
├── tailwind.config.ts     # Config do Tailwind CSS
└── package.json           # Dependências
```

## 🔐 Sistema de Autenticação

### Como Funciona

1. **Registro** → Usuário cria conta
   - Email + Senha validados
   - Senha é hasheada
   - JWT token gerado

2. **Login** → Usuário faz login
   - Credenciais verificadas
   - JWT token retornado
   - Token salvo em localStorage

3. **Dashboard** → Página protegida
   - Verifica token em localStorage
   - Se não existir → Redireciona para login
   - Se existir → Mostra dashboard

4. **Logout** → Usuário sai
   - Limpa localStorage
   - Redireciona para login

## 🛠️ Rotas da API

### POST /api/auth/login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "demo@elon.com",
    "password": "demo123"
  }'
```

**Resposta:**
```json
{
  "success": true,
  "message": "Login realizado com sucesso",
  "token": "eyJ1c2VySWQiOiJ1c2VyXzE3MDc...",
  "user": {
    "id": "user_1707940123",
    "email": "demo@elon.com",
    "name": "Demo User",
    "role": "user",
    "createdAt": "2026-02-14T12:29:00Z"
  }
}
```

### POST /api/auth/register
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "novo@email.com",
    "password": "abc123",
    "name": "Novo Usuário",
    "confirmPassword": "abc123"
  }'
```

## 🎨 Personalizações Rápidas

### Mudar Cores

Edite `tailwind.config.ts`:
```ts
colors: {
  primary: '#00bcd4',    // Cyan
  secondary: '#667eea',  // Roxo
}
```

### Mudar Logo/Nome

Edite `components/Layout.tsx`:
```tsx
<h1 className="text-xl font-bold text-primary">
  Seu Nome Aqui
</h1>
```

## 🐛 Troubleshooting

### Port 3000 já em uso?

```bash
# Matar processo na porta 3000
lsof -ti :3000 | xargs kill -9

# Ou usar outra porta
npm run dev -- -p 3001
```

### Module not found?

```bash
# Limpar node_modules
rm -rf node_modules package-lock.json

# Reinstalar
npm install
```

### Erro de autenticação?

1. Abra DevTools (F12)
2. Verifique localStorage (Application → Local Storage)
3. Procure por `token` e `user`
4. Se não existirem, faça login novamente

## 📦 Build para Produção

```bash
# Build
npm run build

# Testar produção localmente
npm run start
```

## 🚀 Deploy (Cloudflare Pages)

```bash
# 1. Commit
git add .
git commit -m "feat: Complete auth system"
git push origin main

# 2. Cloudflare Pages vai fazer deploy automaticamente
# URL: https://elon-parker-clean.pages.dev/
```

## 📚 Documentação Completa

- `README.md` — Overview do projeto
- `ARCHITECTURE.md` — Detalhes técnicos
- `QUICKSTART.md` — Este arquivo

## 💡 Próximos Passos

1. ✅ Autenticação funcionando
2. ⏳ Criar projetos (novo endpoint: /api/projects)
3. ⏳ Adicionar backlinks
4. ⏳ Pesquisar keywords
5. ⏳ Dashboard com gráficos

## 🤝 Precisa de Ajuda?

- Dúvidas? Abra uma issue no GitHub
- Bugs? Relate com screenshot

---

**Tá tudo pronto pra começar! Bora codar! 🚀**
