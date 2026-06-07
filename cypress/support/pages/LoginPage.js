import { LOGIN_URL } from '../config/constants';

class LoginPage {
  constructor() {
    this.emailInput = '#email';
    this.passwordInput = '#password';
    this.loginButton = '#login-btn';
    this.alertContainer = '#alert-container';
  }

  navigate() {
    cy.visit(LOGIN_URL);
    cy.get(this.loginButton).should('be.visible');
  }

  fillEmail(email) {
    cy.get(this.emailInput).clear().type(email);
    return this;
  }

  fillPassword(password) {
    cy.get(this.passwordInput).clear().type(password, { log: false });
    return this;
  }

  fillCredentials(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    return this;
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
    return this;
  }

  attemptLogin(email, password) {
    this.fillCredentials(email, password);
    this.clickLoginButton();
    return this;
  }

  login(email, password) {
    this.attemptLogin(email, password);
    cy.window().its('localStorage.authToken').should('exist');
  }

  verifyAdminDashboardRedirect() {
    cy.url({ timeout: 10000 }).should('include', 'admin-dashboard');
    cy.window().its('localStorage.authToken').should('exist');
    cy.window().its('localStorage.isAdmin').should('match', /true|1/);
  }

  verifyAlertMessage(expectedMessage) {
    cy.get(this.alertContainer).should('be.visible').and('contain', expectedMessage);
    return this;
  }

  verifyAuthenticationFailed(expectedMessage) {
    this.verifyAlertMessage(expectedMessage);
    cy.url().should('include', 'login');
    cy.window().its('localStorage.authToken').should('not.exist');
  }
}

export default new LoginPage();
