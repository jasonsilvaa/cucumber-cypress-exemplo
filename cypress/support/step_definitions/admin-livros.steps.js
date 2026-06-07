import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AdminBooksPage from '../pages/AdminBooksPage';
import { loginAndNavigateToBooks } from '../helpers/authHelper';
import { createBook, ensureBookInCatalog, deleteBook } from '../helpers/bookHelper';
import {
  DEFAULT_ADMIN_EMAIL,
  DEFAULT_ADMIN_PASSWORD,
  DEFAULT_TEST_BOOK,
  UPDATED_TEST_BOOK,
} from '../config/constants';

Given('que eu estou na página de administrador de livros', () => {
  loginAndNavigateToBooks(DEFAULT_ADMIN_EMAIL, DEFAULT_ADMIN_PASSWORD);
});

When('eu adiciono um novo livro com os dados obrigatórios', () => {
  createBook(DEFAULT_TEST_BOOK);
});

Then('deve aparecer uma mensagem {string}', (mensagem) => {
  AdminBooksPage.verifyAlertMessage(mensagem);
});

Given('existe um livro listado no catálogo', () => {
  ensureBookInCatalog(DEFAULT_TEST_BOOK);
});

When('eu edito os detalhes do livro', () => {
  AdminBooksPage.clickEditButton(0);
  AdminBooksPage.updateBookForm(UPDATED_TEST_BOOK);
  AdminBooksPage.clickSaveBook();
});

Then('deve aparecer uma mensagem de atualização: {string}', (mensagem) => {
  AdminBooksPage.verifyAlertMessage(mensagem);
});

When('eu removo o livro do catálogo', () => {
  deleteBook(DEFAULT_TEST_BOOK.title);
});

Then('deve aparecer uma mensagem de exclusão: {string}', (mensagem) => {
  AdminBooksPage.verifyAlertMessage(mensagem);
});
