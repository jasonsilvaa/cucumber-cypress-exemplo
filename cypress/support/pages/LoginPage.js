import { LOGIN_URL } from '../config/constants';

class LoginPage {
  constructor() {
    this.emailInput = '#email';
    this.passwordInput = '#password';
    this.loginButton = '#login-btn';
    this.errorMessage = '#error-message';
  }

  navigate() {
    cy.visit(LOGIN_URL);
  }

  fillEmail(email) {
    cy.get(this.emailInput).clear().type(email);
    return this;
  }

  fillPassword(password) {
    cy.get(this.passwordInput).clear().type(password);
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
    cy.wait(1000); // Aguarda processamento do login
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }

  isErrorVisible() {
    return cy.get(this.errorMessage).should('be.visible');
  }
}

export default new LoginPage();
