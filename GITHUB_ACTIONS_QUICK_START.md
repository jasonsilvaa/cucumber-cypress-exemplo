# 🎯 Guia Rápido - GitHub Actions Configurado

## ✅ Workflows Criados

### 1️⃣ **test.yml** - Testes Automáticos
```yaml
Acionadores:
  - Push em main/develop
  - Pull Request para main/develop
  - Agendado diariamente 8 AM UTC

Ambiente:
  - Node.js 18.x e 20.x
  - Chrome, Firefox, Edge
  
Testes:
  - ESLint (linting)
  - Cypress (6 combinações)
  - Screenshots em falhas
  - Vídeos de testes
```

### 2️⃣ **quality.yml** - Qualidade de Código
```yaml
Acionadores:
  - Push em main/develop
  - Pull Request para main/develop

Verificações:
  - ESLint (code style)
  - Análise de complexidade
  - Auditoria de segurança (npm audit)
  - Relatórios
```

### 3️⃣ **docs.yml** - Documentação
```yaml
Acionadores:
  - Push de arquivos .md
  - Pull Request para main/develop

Validações:
  - Sintaxe Markdown
  - Links internos
  - Relatórios de docs
```

### 4️⃣ **release.yml** - Releases
```yaml
Acionadores:
  - Tag v*.*.*

Ações:
  - Cria GitHub Release
  - Gera notas de release
```

---

## 🎁 Templates Criados

### Issues
- ✅ Bug Report Template
- ✅ Feature Request Template
- ✅ Task Template

### Pull Request
- ✅ PR Template com checklist

### Comunidade
- ✅ Código de Conduta

---

## 🚀 Começar em 3 Passos

### 1. **Upload para GitHub**
```bash
git add .github/
git commit -m "ci: adicionar GitHub Actions workflows"
git push origin main
```

### 2. **Ativar Workflows**
1. Vá para GitHub → **Actions**
2. Clique em cada workflow
3. Clique **Enable workflow**

### 3. **Testar**
Abra um Pull Request ou faça um push - os workflows executarão automaticamente!

---

## 📊 Matrix de Testes

O workflow `test.yml` testa:

```
Node 18.x
  ├─ Chrome ✅
  ├─ Firefox ✅
  └─ Edge ✅

Node 20.x
  ├─ Chrome ✅
  ├─ Firefox ✅
  └─ Edge ✅

Total: 6 combinações em paralelo
```

---

## 🔒 Configurar Secrets (Opcional)

Se seus testes precisam de credenciais:

1. **GitHub** → **Settings** → **Secrets and variables** → **Actions**
2. Clique **New repository secret**
3. Nome: `ADMIN_PASSWORD`
4. Valor: sua senha
5. Use no workflow: `${{ secrets.ADMIN_PASSWORD }}`

---

## 📦 Artifacts Gerados

### Test Workflow
- Screenshots (em falhas)
- Vídeos (todos os testes)

### Quality Workflow
- Relatório de qualidade
- Lista de dependências

### Docs Workflow
- Relatório de documentação

### Release Workflow
- Release notes

---

## 📈 Status Badges

Adicione ao README:

```markdown
[![Tests](https://github.com/SEU_USER/SEU_REPO/actions/workflows/test.yml/badge.svg)](https://github.com/SEU_USER/SEU_REPO/actions/workflows/test.yml)
[![Quality](https://github.com/SEU_USER/SEU_REPO/actions/workflows/quality.yml/badge.svg)](https://github.com/SEU_USER/SEU_REPO/actions/workflows/quality.yml)
[![Docs](https://github.com/SEU_USER/SEU_REPO/actions/workflows/docs.yml/badge.svg)](https://github.com/SEU_USER/SEU_REPO/actions/workflows/docs.yml)
```

---

## 🎓 Documentação Completa

Para entender todos os workflows em detalhes:
👉 **[GITHUB_ACTIONS.md](./GITHUB_ACTIONS.md)**

---

## ⚙️ Estrutura de Arquivos

```
.github/
├── workflows/               # Workflows automáticos
│   ├── test.yml            # ✅ Testes
│   ├── quality.yml         # ✅ Qualidade
│   ├── docs.yml            # ✅ Documentação
│   └── release.yml         # ✅ Releases
│
├── ISSUE_TEMPLATE/         # Templates de issues
│   ├── bug_report.md       # ✅ Bug report
│   ├── feature_request.md  # ✅ Feature request
│   └── task.md             # ✅ Task
│
├── pull_request_template.md # ✅ Template PR
├── CODE_OF_CONDUCT.md      # ✅ Código de conduta
└── README.md               # ✅ Este diretório
```

---

## 🔧 Troubleshooting Rápido

### ❌ Workflow não inicia
- Verifique se está em `main` ou `develop`
- Vá para **Settings** → **Actions** e habilite

### ❌ Testes falhando
- Rode localmente: `npm test`
- Verifique logs no GitHub Actions

### ❌ Preciso de variáveis secretas
- Vá para **Settings** → **Secrets and variables**
- Crie novo secret
- Use no workflow: `${{ secrets.NOME }}`

---

## ✨ Próximos Passos

- [ ] Upload dos arquivos
- [ ] Ativar workflows no GitHub
- [ ] Fazer push/PR para testar
- [ ] Configurar branch protection
- [ ] Adicionar badges ao README
- [ ] Criar primeira tag/release

---

## 📚 Links Úteis

- [GITHUB_ACTIONS.md](./GITHUB_ACTIONS.md) - Guia completo
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Cypress on CI](https://docs.cypress.io/guides/continuous-integration/ci-provider-example-circleci)

---

**Pronto para CI/CD profissional! 🚀**
