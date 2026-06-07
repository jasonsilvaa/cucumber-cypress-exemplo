# 📁 .github Directory

Configurações e templates do GitHub para o projeto.

## 📋 Conteúdo

### 📁 workflows/
Workflows automáticos do GitHub Actions:

- **`test.yml`** - Executa testes em cada push/PR
  - Testa com Node.js 18.x e 20.x
  - Testa em Chrome, Firefox e Edge
  - Salva artifacts (screenshots, vídeos)

- **`quality.yml`** - Verifica qualidade de código
  - Linting com ESLint
  - Análise de segurança
  - Relatórios de dependências

- **`docs.yml`** - Valida documentação
  - Verifica sintaxe Markdown
  - Gera relatórios de documentação

- **`release.yml`** - Cria releases automáticas
  - Dispara ao fazer tag `v*.*.*`
  - Cria GitHub Release

### 📁 ISSUE_TEMPLATE/
Templates para criar issues:

- **`bug_report.md`** - Template para reportar bugs
- **`feature_request.md`** - Template para sugerir features
- **`task.md`** - Template para criar tasks

### 📄 pull_request_template.md
Template para criar Pull Requests com checklist completo.

### 📄 CODE_OF_CONDUCT.md
Código de conduta para a comunidade.

---

## 🚀 Como Usar

### 1. **Workflows Automáticos**
Workflows executam automaticamente em eventos (push, PR, tags).

Ver [GITHUB_ACTIONS.md](../GITHUB_ACTIONS.md) para detalhes.

### 2. **Templates de Issues**
Ao criar nova issue, selecione um template:
1. Clique **New Issue**
2. Escolha o template apropriado
3. Preencha os campos

### 3. **Template de PR**
Ao criar PR, o template aparece automaticamente:
1. Preencha a descrição
2. Marque o checklist
3. Descreva como testar

---

## 📊 Estrutura

```
.github/
├── workflows/
│   ├── test.yml              # Testes
│   ├── quality.yml           # Qualidade
│   ├── docs.yml              # Documentação
│   └── release.yml           # Releases
├── ISSUE_TEMPLATE/
│   ├── bug_report.md         # Bug reports
│   ├── feature_request.md    # Feature requests
│   └── task.md               # Tasks
├── pull_request_template.md  # PR template
├── CODE_OF_CONDUCT.md        # Código de conduta
└── README.md                 # Este arquivo
```

---

## 📚 Recursos

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests)
- [Contributor Covenant](https://www.contributor-covenant.org/)

---

## 🔗 Arquivos Relacionados

- [GITHUB_ACTIONS.md](../GITHUB_ACTIONS.md) - Guia completo de workflows
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Como contribuir
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) - Código de conduta
