# 🚀 Guia de Deployment

Este guia mostra como fazer o deploy do dashboard no Cloudflare Pages via GitHub.

## 📋 Pré-requisitos

- ✅ Conta no GitHub (https://github.com)
- ✅ Conta no Cloudflare (https://cloudflare.com)
- ✅ Repositório Git criado (vazio ou com este código)

## 🔧 Passo a Passo

### 1️⃣ Criar Repositório no GitHub

```bash
# Opção A: Criar novo repositório
# Via GitHub.com:
# 1. Vá para https://github.com/new
# 2. Nome: elon-parker-dashboard
# 3. Descrição: Dashboard pessoal do Elon Parker
# 4. Visibilidade: Public ou Private
# 5. Clique em "Create repository"

# Opção B: Clone este repositório
git clone https://github.com/seu-usuario/elon-parker-dashboard.git
cd elon-parker-dashboard
```

### 2️⃣ Fazer Push do Código

```bash
# Se criou vazio:
git init
git add .
git branch -M main
git remote add origin https://github.com/seu-usuario/elon-parker-dashboard.git
git commit -m "Initial commit: Elon Parker Dashboard"
git push -u origin main

# Se clonou:
git add .
git commit -m "Update dashboard"
git push origin main
```

### 3️⃣ Conectar com Cloudflare Pages

**Via Dashboard:**

1. Acesse: https://dash.cloudflare.com/pages
2. Clique em **"Connect to Git"**
3. Selecione **GitHub** como provedor
4. Autorize o Cloudflare a acessar suas repos
5. Selecione **elon-parker-dashboard**
6. Configure as build settings:
   - **Production branch:** `main`
   - **Build command:** (deixe vazio)
   - **Build output directory:** `.` (ponto)
   - **Environment variables:** (nenhuma necessária)
7. Clique em **"Save and Deploy"**

**Pronto!** 🎉 Cloudflare fará o deploy automático.

### 4️⃣ Acessar a Página

Após alguns segundos:

```
https://elon-parker-dashboard.pages.dev
```

## 🔄 Deploy Automático

Toda vez que você fizer um `push` em `main`:

```bash
git add .
git commit -m "Update dashboard"
git push origin main
# Cloudflare fará deploy automaticamente
```

Você pode acompanhar o status em: https://dash.cloudflare.com/pages

## 📝 Editar a Página

### Mudança Simples (Texto/Números)

Edite `index.html`:

```html
<!-- Tokens Gastos -->
<div class="stat-value">5.5K</div>  <!-- Mude aqui -->

<!-- Tarefas Concluídas -->
<div class="stat-value">7</div>     <!-- Ou aqui -->
```

### Mudança de Design

Edite o CSS dentro da tag `<style>`:

```css
/* Cores -->
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Fonts, spacing, etc. -->
```

## 🆘 Troubleshooting

### "Cannot find deployment"

- Aguarde 1-2 minutos após fazer push
- Verifique se o branch está em `main`
- Confira o status em https://dash.cloudflare.com/pages

### "Error 522 - Connection Timeout"

- Build settings incorretas
- Solução: Deixe o "Build output directory" como `.` (ponto)

### "Index.html not found"

- O arquivo precisa estar na **raiz do repositório**
- Não coloque em pasta `public/` ou `src/`

## 🎯 Fluxo de Trabalho Recomendado

```
1. Clone/Fork o repositório
2. Edite localmente (index.html)
3. Teste no navegador
4. Commit e push para GitHub
5. Cloudflare faz deploy automático
6. Acesse a URL publicada
```

## 📊 Monitorar Deployment

### Analytics

https://dash.cloudflare.com/pages → Seu projeto → **Analytics**

Veja:
- Requisições
- Usuários únicos
- Performance
- Erros

### Builds

https://dash.cloudflare.com/pages → Seu projeto → **Deployments**

Veja:
- Histórico de deploys
- Status de cada build
- Logs de erro

## 🔐 Segurança

- ✅ HTTPS automático
- ✅ DDoS Protection
- ✅ WAF (Web Application Firewall)
- ✅ Headers de segurança

## 💡 Próximos Passos

1. **Domínio Custom**
   - Cloudflare Pages → Settings → Custom Domain
   - Aponte seu domínio para Cloudflare

2. **Analytics Avançado**
   - Adicione Google Analytics
   - Ou Cloudflare Analytics Engine

3. **CI/CD Avançado**
   - Adicione GitHub Actions
   - Para testes antes do deploy

## 📚 Recursos Úteis

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [GitHub Pages](https://pages.github.com/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

---

**Versão:** 1.0.0  
**Última atualização:** 14/02/2026
