/**
 * CHANGELOG do Projeto
 * 
 * Registre todas as mudanças significativas aqui
 */

## [Não Lançado]

### Adicionado
- ✅ Page Object Model (POM) para AdminBooksPage e LoginPage
- ✅ Arquivo de configuração centralizada (constants.js)
- ✅ Helpers reutilizáveis (authHelper.js, bookHelper.js)
- ✅ Variáveis de ambiente (.env.example)
- ✅ ESLint com plugin do Cypress
- ✅ Prettier para formatação de código
- ✅ Documentação completa (README.md, CONTRIBUTING.md, BEST_PRACTICES.md, TEST_TEMPLATE.md)
- ✅ Comandos customizados do Cypress
- ✅ Configuração otimizada de timeouts
- ✅ Screenshot automático em falhas
- ✅ Scripts npm melhorados (test, test:open, test:headed, lint, lint:fix)
- ✅ GitHub Actions Workflows
  - ✅ test.yml - Testa em Node 18.x, 20.x e navegadores múltiplos
  - ✅ quality.yml - Análise de código e segurança
  - ✅ docs.yml - Validação de documentação
  - ✅ release.yml - Releases automáticas
- ✅ Templates de Issues (bug, feature, task)
- ✅ Template de Pull Request
- ✅ Código de Conduta
- ✅ Guia completo de GitHub Actions (GITHUB_ACTIONS.md)

### Melhorado
- ✅ Refatoração completa dos step definitions
- ✅ Cypress.config.js com suporte a variáveis de ambiente
- ✅ package.json com scripts mais úteis
- ✅ Estrutura de diretórios mais organizada
- ✅ Código mais limpo e reutilizável
- ✅ Comentários em português com melhor documentação

### Removido
- ✅ Hardcoding de URLs e credenciais
- ✅ Waits fixos (substituídos por esperas inteligentes)
- ✅ Código duplicado
- ✅ Seletores não centralizados

## [1.0.0] - 2024-06-07

### Inicial
- Projeto base com Cypress e Cucumber
- Testes básicos de administração de livros
