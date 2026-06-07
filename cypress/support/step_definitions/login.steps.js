import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/LoginPage';
import {
  DEFAULT_ADMIN_EMAIL,
  DEFAULT_ADMIN_PASSWORD,
  INVALID_CREDENTIALS,
  ERROR_MESSAGES,
} from '../config/constants';

Given('que estou na página de login do Hub de Leitura', () => {
  LoginPage.navigate();
});

When('informo credenciais válidas de administrador', () => {
  LoginPage.attemptLogin(DEFAULT_ADMIN_EMAIL, DEFAULT_ADMIN_PASSWORD);
});

When('informo credenciais inválidas', () => {
  LoginPage.attemptLogin(INVALID_CREDENTIALS.email, INVALID_CREDENTIALS.password);
});

Then('devo ser redirecionado para o painel administrativo', () => {
  LoginPage.verifyAdminDashboardRedirect();
});

Then('devo ver uma mensagem de erro de autenticação', () => {
  LoginPage.verifyAuthenticationFailed(ERROR_MESSAGES.INVALID_LOGIN);
});
