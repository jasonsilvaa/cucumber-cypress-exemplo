import LoginPage from '../pages/LoginPage';
import AdminBooksPage from '../pages/AdminBooksPage';
import { DEFAULT_ADMIN_EMAIL, DEFAULT_ADMIN_PASSWORD, ADMIN_BOOKS_URL } from '../config/constants';

/**
 * Realiza login com credenciais de administrador
 * @param {string} email - Email do administrador
 * @param {string} password - Senha do administrador
 */
export const loginAsAdmin = (
  email = DEFAULT_ADMIN_EMAIL,
  password = DEFAULT_ADMIN_PASSWORD
) => {
  LoginPage.navigate();
  LoginPage.login(email, password);
};

/**
 * Realiza logout navegando para a página de login
 */
export const logout = () => {
  // Implementar conforme necessário
  cy.clearCookies();
  cy.clearLocalStorage();
};

/**
 * Realiza login e navega para a página de administrador de livros
 * @param {string} email - Email do administrador
 * @param {string} password - Senha do administrador
 */
export const loginAndNavigateToBooks = (
  email = DEFAULT_ADMIN_EMAIL,
  password = DEFAULT_ADMIN_PASSWORD
) => {
  loginAsAdmin(email, password);
  cy.visit(ADMIN_BOOKS_URL);
  cy.wait(3000);
};
