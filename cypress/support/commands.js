/**
 * Comandos customizados do Cypress
 * Adicione aqui funções que serão reutilizadas em múltiplos testes
 */

// Comando customizado: Login como administrador
Cypress.Commands.add('loginAsAdmin', (email, password) => {
  cy.visit('/login.html');
  cy.get('#email').type(email);
  cy.get('#password').type(password, { log: false });
  cy.get('#login-btn').click();
  cy.window().its('localStorage.authToken').should('exist');
});

// Comando customizado: Logout
Cypress.Commands.add('logout', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

// Comando customizado: Verificar elemento visível
Cypress.Commands.add('shouldBeVisible', { prevSubject: true }, (subject) => {
  cy.wrap(subject).should('be.visible');
  return subject;
});

// Comando customizado: Aguardar elemento desaparecer
Cypress.Commands.add('waitForElementToDisappear', (selector, timeout = 5000) => {
  cy.get(selector, { timeout }).should('not.exist');
});

// Ignorar mensagens de erro não capturadas
Cypress.on('uncaught:exception', () => false);