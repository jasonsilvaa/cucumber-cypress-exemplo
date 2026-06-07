# Template de Novo Teste

Este arquivo mostra como estruturar um novo teste usando as boas práticas do projeto.

## 1. Criar Feature File

**Arquivo:** `cypress/e2e/novo-modulo.feature`

```gherkin
Feature: Novo Módulo
  Como usuário
  Quero realizar ações no novo módulo
  Para atingir meu objetivo

  Background:
    Given que eu estou autenticado como administrador

  Scenario: Cenário de sucesso
    When eu realizo uma ação
    Then deve aparecer uma mensagem de sucesso

  Scenario: Cenário de erro
    When eu realizo uma ação inválida
    Then deve aparecer uma mensagem de erro
```

## 2. Criar Page Object

**Arquivo:** `cypress/support/pages/NovoModuloPage.js`

```javascript
import { WAIT_MEDIUM, WAIT_LONG } from '../config/constants';

class NovoModuloPage {
  constructor() {
    // Seletores
    this.botaoPrimaria = '.btn-primary';
    this.botaoSecundaria = '.btn-secondary';
    this.inputPrincipal = '#input-principal';
    this.mensagemAlerta = '.alert-message';
  }

  // Navegação
  navigate() {
    cy.visit('/novo-modulo');
    cy.wait(WAIT_MEDIUM);
  }

  // Ações
  preencherInput(valor) {
    cy.get(this.inputPrincipal).type(valor);
    return this;
  }

  limparInput() {
    cy.get(this.inputPrincipal).clear();
    return this;
  }

  clicarBotaoPrimaria() {
    cy.get(this.botaoPrimaria).click();
    cy.wait(WAIT_MEDIUM);
    return this;
  }

  // Verificações
  verificarMensagem(mensagem) {
    cy.get(this.mensagemAlerta).should('contain', mensagem);
    return this;
  }

  verificarInputVazio() {
    cy.get(this.inputPrincipal).should('have.value', '');
    return this;
  }
}

export default new NovoModuloPage();
```

## 3. Criar Step Definitions

**Arquivo:** `cypress/support/step_definitions/novo-modulo.steps.js`

```javascript
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import NovoModuloPage from '../pages/NovoModuloPage';
import { loginAndNavigateToBooks } from '../helpers/authHelper';

// Background
Given('que eu estou autenticado como administrador', () => {
  loginAndNavigateToBooks();
});

// Steps de When
When('eu realizo uma ação', () => {
  NovoModuloPage.preencherInput('Valor de teste');
  NovoModuloPage.clicarBotaoPrimaria();
});

When('eu realizo uma ação inválida', () => {
  NovoModuloPage.preencherInput('');
  NovoModuloPage.clicarBotaoPrimaria();
});

// Steps de Then
Then('deve aparecer uma mensagem de sucesso', () => {
  NovoModuloPage.verificarMensagem('Sucesso');
});

Then('deve aparecer uma mensagem de erro', () => {
  NovoModuloPage.verificarMensagem('Erro');
});
```

## 4. Criar Helper (Opcional)

**Arquivo:** `cypress/support/helpers/novoModuloHelper.js`

```javascript
import NovoModuloPage from '../pages/NovoModuloPage';

/**
 * Realiza operação padrão
 */
export const realizarOperacaoPadrao = (dados) => {
  NovoModuloPage.preencherInput(dados.valor);
  NovoModuloPage.clicarBotaoPrimaria();
};

/**
 * Verifica se operação foi concluída com sucesso
 */
export const verificarSucesso = () => {
  NovoModuloPage.verificarMensagem('Sucesso');
};
```

## 5. Checklist

- [ ] Feature file criado com cenários bem descritos
- [ ] Page Object criado com seletores centralizados
- [ ] Step definitions implementados
- [ ] Helpers criados (se necessário)
- [ ] Testes passam localmente
- [ ] ESLint passa (`npm run lint`)
- [ ] README atualizado (se necessário)
- [ ] Documentação adicionada

## 6. Rodando o Novo Teste

```bash
# Rodar apenas o novo teste
npx cypress run --spec cypress/e2e/novo-modulo.feature

# Rodar com interface visual
npx cypress open
```

## 7. Estrutura Final

```
cypress/
├── e2e/
│   └── novo-modulo.feature
├── support/
│   ├── pages/
│   │   └── NovoModuloPage.js
│   ├── step_definitions/
│   │   └── novo-modulo.steps.js
│   └── helpers/
│       └── novoModuloHelper.js
```

## ✅ Exemplo Prático Completo

Veja o arquivo `cypress/support/step_definitions/admin-livros.steps.js` e suas páginas correspondentes para um exemplo completo de como estruturar testes.

---

**Dúvidas? Consulte BEST_PRACTICES.md** 📚
