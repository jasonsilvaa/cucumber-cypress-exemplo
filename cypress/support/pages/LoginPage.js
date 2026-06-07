import { LOGIN_URL } from '../config/constants';

class LoginPage {
  constructor() {
    this.emailInput = '#email';
    this.passwordInput = '#password';
    this.loginButton = '#login-btn';
    this.errorMessage = '#error-container';
  }

  navigate() {
    cy.visit(LOGIN_URL);
  }

  fillEmail(email) {
    cy.get(this.emailInput).clear().type(email);
    return this;
  }

  fillPassword(password) {
    cy.get(this.passwordInput).clear().type(password, { log: false });
    return this;
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
    return this;
  }

  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickLoginButton();
    cy.window().its('localStorage.authToken').should('exist');
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }

  isErrorVisible() {
    return cy.get(this.errorMessage).should('be.visible');
  }
}

export default new LoginPage();
