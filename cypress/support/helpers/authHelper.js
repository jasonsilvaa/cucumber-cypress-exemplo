import LoginPage from '../pages/LoginPage';
import AdminBooksPage from '../pages/AdminBooksPage';
import {
  DEFAULT_ADMIN_EMAIL,
  DEFAULT_ADMIN_PASSWORD,
  ADMIN_BOOKS_URL,
  INVALID_CREDENTIALS,
} from '../config/constants';

/**
 * Realiza login com credenciais de administrador
 */
export const loginAsAdmin = (
  email = DEFAULT_ADMIN_EMAIL,
  password = DEFAULT_ADMIN_PASSWORD
) => {
  LoginPage.navigate();
  LoginPage.login(email, password);
};

/**
 * Tenta login sem validar sucesso (útil para cenários negativos)
 */
export const attemptLogin = (email, password) => {
  LoginPage.navigate();
  LoginPage.attemptLogin(email, password);
};

/**
 * Tenta login com credenciais inválidas
 */
export const attemptInvalidLogin = () => {
  attemptLogin(INVALID_CREDENTIALS.email, INVALID_CREDENTIALS.password);
};

/**
 * Realiza logout limpando cookies e localStorage
 */
export const logout = () => {
  cy.clearCookies();
  cy.clearLocalStorage();
};

/**
 * Realiza login e navega para a página de administrador de livros
 */
export const loginAndNavigateToBooks = (
  email = DEFAULT_ADMIN_EMAIL,
  password = DEFAULT_ADMIN_PASSWORD
) => {
  loginAsAdmin(email, password);
  cy.visit(ADMIN_BOOKS_URL);
  AdminBooksPage.waitForBooksTable();
  cy.get('h1').should('contain', 'Gerenciar Livros');
};
