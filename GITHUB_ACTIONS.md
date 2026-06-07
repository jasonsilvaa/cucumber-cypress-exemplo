# 🚀 GitHub Actions - Guia de Configuração

## 📋 Workflows Disponíveis

Este projeto inclui 4 workflows automáticos no GitHub Actions:

### 1. **Test Workflow** (`test.yml`)
Executa testes automaticamente em cada push e pull request.

**Acionadores:**
- Push em `main` ou `develop`
- Pull request para `main` ou `develop`
- Agendado diariamente às 8 da manhã UTC

**O que faz:**
- ✅ Testa com Node.js 18.x e 20.x
- ✅ Testa em Chrome, Firefox e Edge
- ✅ Executa linting
- ✅ Salva screenshots em caso de falha
- ✅ Salva vídeos de teste

**Saída:**
```
Artifacts:
├── cypress-screenshots-*
├── cypress-videos-*
└── Code Quality Report
```

### 2. **Quality Workflow** (`quality.yml`)
Verifica qualidade de código e segurança.

**Acionadores:**
- Push em `main` ou `develop`
- Pull request para `main` ou `develop`

**O que faz:**
- 🔍 Análise de código com ESLint
- 📊 Relatório de qualidade
- 🔐 Auditoria de segurança
- 📋 Lista de dependências

**Saída:**
```
Artifacts:
├── code-quality-report
└── dependencies-list
```

### 3. **Documentation Workflow** (`docs.yml`)
Valida e gera relatórios de documentação.

**Acionadores:**
- Push de arquivos `.md`
- Pull request para `main` ou `develop`

**O que faz:**
- ✅ Valida sintaxe Markdown
- 🔗 Verifica links internos
- 📊 Gera relatório de documentação
- 📈 Conta linhas de documentação

**Saída:**
```
Artifacts:
└── documentation-report
```

### 4. **Release Workflow** (`release.yml`)
Cria releases automáticas ao fazer tag.

**Acionadores:**
- Tag no formato `v*.*.*` (exemplo: `v1.0.0`)

**O que faz:**
- 📦 Cria release no GitHub
- 📝 Gera notas de release
- 📊 Registra mudanças

**Saída:**
```
GitHub Releases:
└── Release v1.0.0
```

---

## 🔧 Como Usar

### 1. **Verificar Status dos Workflows**

1. Vá para seu repositório no GitHub
2. Clique na aba **Actions**
3. Veja todos os workflows em execução

### 2. **Adicionar Novo Workflow**

1. Crie um novo arquivo em `.github/workflows/seu-workflow.yml`
2. Copie a estrutura de um workflow existente
3. Configure os triggers e jobs
4. Faça commit e push

### 3. **Usar em Local (Opcional)**

Para testar workflows localmente, use [act](https://github.com/nektos/act):

```bash
# Instalar
brew install act

# Executar workflow
act -j test

# Listar workflows disponíveis
act -l
```

---

## 📊 Matriz de Testes

O workflow de teste usa uma **matriz de estratégia**:

```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x]
    browser: [chrome, firefox, edge]
```

Isso gera **6 combinações**:
- Node 18.x + Chrome
- Node 18.x + Firefox
- Node 18.x + Edge
- Node 20.x + Chrome
- Node 20.x + Firefox
- Node 20.x + Edge

**Benefícios:**
- ✅ Testa em múltiplas versões de Node
- ✅ Testa em múltiplos navegadores
- ✅ Execução paralela (mais rápido)
- ✅ Melhor cobertura

---

## 🔒 Secrets e Variáveis

Se seus testes precisarem de variáveis secretas:

### 1. **Adicionar Secret no GitHub**

1. Vá para **Settings** → **Secrets and variables** → **Actions**
2. Clique **New repository secret**
3. Nome: `ADMIN_PASSWORD` (exemplo)
4. Valor: sua senha
5. Clique **Add secret**

### 2. **Usar no Workflow**

```yaml
env:
  CYPRESS_ADMIN_PASSWORD: ${{ secrets.ADMIN_PASSWORD }}
```

### 3. **Variáveis (Não-secretas)**

Para valores públicos, use variáveis:

```yaml
env:
  BASE_URL: ${{ vars.BASE_URL }}
```

---

## 🎯 Badges de Status

Adicione badges ao seu README para mostrar o status:

```markdown
[![Tests](https://github.com/SEU_USER/SEU_REPO/workflows/Tests/badge.svg)](https://github.com/SEU_USER/SEU_REPO/actions)
[![Quality](https://github.com/SEU_USER/SEU_REPO/workflows/Code%20Quality/badge.svg)](https://github.com/SEU_USER/SEU_REPO/actions)
[![Docs](https://github.com/SEU_USER/SEU_REPO/workflows/Documentation/badge.svg)](https://github.com/SEU_USER/SEU_REPO/actions)
```

---

## 🚨 Troubleshooting

### ❌ Workflow não executa

**Causas possíveis:**
1. Arquivo YAML tem erro de sintaxe
2. Trigger não foi configurado corretamente
3. Não tem permissão para ativar workflows

**Solução:**
- Verifique sintaxe YAML em [yaml-lint.com](https://www.yamllint.com/)
- Verifique triggers no arquivo `.yml`
- Vá para **Settings** → **Actions** → habilite workflows

### ❌ Testes falhando

**Causas possíveis:**
1. Dependências não instaladas
2. Servidor não está rodando
3. Credenciais faltando

**Solução:**
```bash
# Verificar localmente
npm install
npm run lint
npm test
```

### ❌ Screenshots/Videos não salvos

**Solução:**
Verifique o caminho em `upload-artifact`:
```yaml
path: cypress/screenshots  # Verificar se existe
```

---

## 📈 Monitorando Workflows

### Dashboard

1. Vá para **Actions**
2. Veja histórico de execuções
3. Clique em execução para ver detalhes
4. Veja logs de cada step
5. Baixe artifacts

### Notificações

GitHub notifica automaticamente:
- ✅ Quando workflow completa
- ❌ Quando workflow falha
- 🔔 Por email (configurável)

### Status Badge

Adicione ao README:
```markdown
[![Test Status](https://github.com/SEU_USER/SEU_REPO/actions/workflows/test.yml/badge.svg)](https://github.com/SEU_USER/SEU_REPO/actions/workflows/test.yml)
```

---

## 🔄 Pull Requests

Os workflows automaticamente:
- ✅ Executam testes em cada PR
- ✅ Exigem aprovação se configurado
- ✅ Mostram status na PR
- ✅ Bloqueiam merge se falhar

**Para configurar:**
1. **Settings** → **Branches** → **Branch protection rules**
2. Selecione branch (`main`)
3. Habilite **Require status checks to pass**
4. Selecione workflows que devem passar

---

## 🏃 Otimizando Performance

### 1. **Cache NPM**

```yaml
uses: actions/setup-node@v4
with:
  node-version: 20.x
  cache: 'npm'  # Cachea node_modules
```

### 2. **Fail Fast**

```yaml
strategy:
  fail-fast: true  # Para assim que um teste falha
```

### 3. **Paralelização**

Workflows com múltiplos jobs executam em paralelo.

### 4. **Artifacts com Retenção**

```yaml
retention-days: 7  # Limpar automaticamente
```

---

## 📚 Recursos

### Documentação
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Cypress on CI](https://docs.cypress.io/guides/continuous-integration/introduction)

### Ferramentas
- [act - Rodar workflows localmente](https://github.com/nektos/act)
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)

### Exemplos
- [Cypress Example](https://github.com/cypress-io/github-action)
- [Node.js Workflow](https://github.com/actions/setup-node)

---

## ✅ Próximos Passos

- [ ] Fazer push do código para GitHub
- [ ] Verificar workflows na aba Actions
- [ ] Testar com um PR
- [ ] Configurar branch protection
- [ ] Adicionar badges ao README
- [ ] Criar primeira tag/release

---

## 📝 Exemplo Prático

### 1. Push para triggerar test workflow
```bash
git add .
git commit -m "feat: adicionar novo teste"
git push origin develop
# → Workflow test.yml executa automaticamente
```

### 2. Criar Pull Request
```bash
# No GitHub: Crie PR de develop → main
# → Workflow test.yml executa
# → Workflow quality.yml executa
# → Se passar, pode fazer merge
```

### 3. Criar Release
```bash
git tag v1.1.0
git push origin v1.1.0
# → Workflow release.yml executa
# → Release criado no GitHub
```

---

**Seus workflows estão prontos! 🚀**

Para mais informações, consulte a [documentação oficial](https://docs.github.com/en/actions).
