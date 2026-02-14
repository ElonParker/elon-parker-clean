# 📋 Estrutura de Projetos — Guia Rápido

**Última atualização:** 2026-02-14

## 📂 Organização

```
/projetos/
├── PORTFOLIO.md          # Índice de todos os projetos
├── ESTRUTURA.md          # Este arquivo
├── acompanhantes10/
│   ├── README.md         # Overview do projeto
│   ├── metricas.md       # Dashboard de KPIs
│   ├── backlinks/
│   │   ├── monitoramento.md    # Sites e PA/DA
│   │   ├── contatos.md         # Webmasters + histórico
│   │   ├── orcamentos.md       # Propostas e pagamentos
│   │   └── renovacoes.md       # Cronograma de renovação
│   ├── dominios/
│   │   ├── pesquisa.md         # Nomes pesquisados
│   │   ├── comprados.md        # Registro de compras
│   │   └── renovacoes.md       # Datas de expiração
│   └── keywords/
│       ├── principais.md       # Top keywords
│       ├── volume.md           # Análise de volume/CPC
│       └── estrategia.md       # Plano de targeting
├── 7k-bet-br/            # [Mesma estrutura]
├── qualcep-org/          # [Mesma estrutura]
└── fastjournal-ig/       # [Mesma estrutura - Social]
```

## 🚀 Fluxo de Trabalho

### Ao Iniciar um Novo Projeto

1. Criar pasta `/projetos/nome-projeto/`
2. Copiar estrutura de `acompanhantes10/`
3. Atualizar `README.md` com dados do projeto
4. Adicionar à lista em `PORTFOLIO.md`
5. Fazer commit: `git add . && git commit -m "Add project: nome-projeto"`

### Ao Trabalhar em uma Categoria

1. Abrir arquivo relativo (ex: `backlinks/monitoramento.md`)
2. Adicionar dados/encontrados
3. Atualizar timestamp de "Última atualização"
4. Fazer commit: `git add . && git commit -m "Update: projeto > categoria"`

### Daily Workflow

1. Ler `memory/YYYY-MM-DD.md` (anotações do dia)
2. Verificar `PORTFOLIO.md` para prioridades
3. Trabalhar em categorias conforme necessário
4. Registrar progresso no diário
5. **Fazer commit ao final de cada tarefa**
6. Atualizar Trello em tempo real

## 📌 Checklist de Tarefas Comuns

### Backlinks
- [ ] Scan inicial com Majestic/Ahrefs
- [ ] Listar top 50 sites candidatos
- [ ] Compilar 20-30 emails de webmasters
- [ ] Enviar primer batch de contatos
- [ ] Acompanhar respostas
- [ ] Negociar valores
- [ ] Processar pagamentos
- [ ] Confirmar links publicados
- [ ] Monitorar renovações

### Domínios
- [ ] Pesquisar 30-50 nomes potenciais
- [ ] Verificar disponibilidade
- [ ] Checar histórico (WayBack, spam)
- [ ] Priorizar top 3-5 candidatos
- [ ] Comprar domínios estratégicos
- [ ] Configurar DNS/nameservers
- [ ] Ativar auto-renewal

### Keywords
- [ ] Pesquisa inicial (100+ keywords)
- [ ] Análise de volume e CPC
- [ ] Mapeamento para páginas
- [ ] Priorizadoras por oportunidade
- [ ] Content refresh em top pages
- [ ] Criar novas páginas (long-tail)
- [ ] Monitorar rankings mensalmente

## 🔄 Sincronização

- **Git:** Commit após cada tarefa concluída
- **Trello:** Atualizar em tempo real (via update_trello_card.py)
- **Memory:** Resumo diário em `memory/YYYY-MM-DD.md`
- **MEMORY.md:** Consolidação mensal de aprendizados

## 📞 Contato de Suporte

- Qualquer dúvida sobre estrutura: ver `PORTFOLIO.md`
- Problemas técnicos: documentar em `memory/YYYY-MM-DD.md`
- Decisões importantes: registrar em `MEMORY.md` (topics)

---

**Última revisão:** 2026-02-14  
**Próxima revisão:** Conforme necessidade
