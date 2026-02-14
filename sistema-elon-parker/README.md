# 🤖 Elon Parker — Sistema de Gestão SEO

Sistema profissional de autenticação e gestão de projetos SEO, construído com **Next.js**, **TypeScript** e **Tailwind CSS**.

## 🚀 Recursos

✅ **Autenticação Completa**
- Login e Registro de usuários
- Senhas encriptadas (bcryptjs ready)
- JWT token com expiração
- Persistência de sessão

✅ **Interface Moderna**
- Dark mode profissional
- Responsive design
- Animações fluidas
- Componentes reutilizáveis

✅ **Rotas Protegidas**
- Dashboard exclusivo para usuários autenticados
- Logout seguro
- Redirecionamento automático

✅ **Base de Dados Pronta**
- Estrutura para usuários
- Estrutura para projetos
- Estrutura para backlinks, keywords, etc

## 📦 Estrutura do Projeto

```
sistema-elon-parker/
├── app/                    # App router do Next.js
│   ├── api/               # Rotas da API
│   │   └── auth/         # Endpoints de autenticação
│   ├── dashboard/        # Página protegida
│   ├── login/            # Página de login
│   ├── register/         # Página de registro
│   ├── layout.tsx        # Layout raiz
│   ├── page.tsx          # Home
│   └── globals.css       # Estilos globais
├── components/           # Componentes React
│   ├── Layout.tsx       # Layout com header
│   ├── LoginForm.tsx    # Formulário de login
│   └── RegisterForm.tsx # Formulário de registro
├── lib/                  # Funções utilitárias
│   └── auth.ts          # Funções de autenticação
├── types/               # Tipos TypeScript
│   └── index.ts         # Definições de tipos
├── tailwind.config.ts   # Configuração Tailwind
├── tsconfig.json        # Configuração TypeScript
└── package.json         # Dependências
```

## 🛠️ Instalação

### 1. Clonar ou criar projeto

```bash
cd /data/.openclaw/workspace/sistema-elon-parker
```

### 2. Instalar dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Rodar em desenvolvimento

```bash
npm run dev
# Acessa em http://localhost:3000
```

### 4. Build para produção

```bash
npm run build
npm run start
```

## 🔐 Credenciais de Demo

**Email:** `demo@elon.com`  
**Senha:** `demo123`

## 📚 Fluxo de Autenticação

### 1. Página Inicial
- Homepage com CTA (Entrar / Registrar-se)
- Showcase de features

### 2. Registro
- Form com validação
- Verificação de senhas iguais
- Criptografia de senhas
- JWT gerado automaticamente

### 3. Login
- Form simples e rápido
- Verificação de credenciais
- Token armazenado em localStorage
- Redirecionamento para dashboard

### 4. Dashboard
- Página protegida (requer autenticação)
- Exibe dados do usuário
- Cards com stats
- Ações rápidas

### 5. Logout
- Limpa token e dados do localStorage
- Redireciona para login

## 🔒 Segurança

- ✅ Senhas com hash (pronto para bcryptjs)
- ✅ JWT com expiração (24 horas)
- ✅ Validação de email
- ✅ Proteção de rotas
- ✅ CSRF ready
- ⏳ 2FA (planejado)

## 🎨 Personalização

### Cores
Edite `tailwind.config.ts`:
```ts
colors: {
  primary: '#00bcd4',      // Cyan (padrão)
  secondary: '#667eea',    // Roxo
  dark: '#1a1a2e',
  darker: '#0f0f1e',
}
```

### Marca
- Logo: `app/page.tsx` (emoji 🤖)
- Nome: `components/Layout.tsx`
- Descrição: `app/layout.tsx`

## 📝 Próximas Funcionalidades

- [ ] Criar projetos
- [ ] Adicionar backlinks
- [ ] Pesquisar keywords
- [ ] Dashboard com gráficos
- [ ] Relatórios de progresso
- [ ] Integração com APIs (SEMrush, Majestic)
- [ ] 2FA (Two-Factor Authentication)
- [ ] Reset de senha
- [ ] Editar perfil
- [ ] Banco de dados real (PostgreSQL, MongoDB)

## 🚀 Deploy

### Cloudflare Pages (Recomendado)
```bash
npm run build
git push origin main
```

### Vercel
```bash
vercel deploy
```

### Netlify
```bash
netlify deploy --prod
```

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**© 2026 Elon Parker. Todos os direitos reservados.**
