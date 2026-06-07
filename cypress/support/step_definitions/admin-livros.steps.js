import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/LoginPage';
import AdminBooksPage from '../pages/AdminBooksPage';
import { loginAndNavigateToBooks } from '../helpers/authHelper';
import { createBook, searchBook, editBook, deleteBook } from '../helpers/bookHelper';
import { DEFAULT_ADMIN_EMAIL, DEFAULT_ADMIN_PASSWORD, ADMIN_BOOKS_URL } from '../config/constants';

Given(`que eu estou na página de administrador de livros`, () => {
  loginAndNavigateToBooks(DEFAULT_ADMIN_EMAIL, DEFAULT_ADMIN_PASSWORD);
});

When(`eu adiciono um novo livro com os dados obrigatórios`, () => {
  const bookData = {
    title: 'Livro de Teste',
    author: 'Autor de Teste',
    isbn: '1234567890',
    category: 'Ficção',
    editor: 'Editora de Teste',
    year: '2024',
  };
  createBook(bookData);
});

Then(`deve aparacer uma mensagem {string}`, (mensagem) => {
  AdminBooksPage.verifyAlertMessage(mensagem);
});

Given(`existe um livro listado no catálogo`, () => {
  searchBook('Livro de Teste');
});

When(`eu edito os detalhes do livro`, () => {
  const updatedBookData = {
    title: 'Livro de Teste Editado',
    author: 'Autor de Teste',
    isbn: '1234567890',
    category: 'Ficção',
    editor: 'Editora de Teste',
    year: '2024',
  };
  AdminBooksPage.clickEditButton(0);
  AdminBooksPage.updateBookForm(updatedBookData);
  AdminBooksPage.clickSaveBook();
});

Then(`deve aparacer uma mensagem de atualização: {string}`, (mensagem) => {
  AdminBooksPage.verifyAlertMessage(mensagem);
});

When(`eu removo o livro do catálogo`, () => {
  searchBook('Livro de Teste Editado');
  AdminBooksPage.clickDeleteButton(0);
  AdminBooksPage.confirmDelete();
});

Then(`deve aparacer uma mensagem de exclusão: {string}`, (mensagem) => {
  AdminBooksPage.verifyAlertMessage(mensagem);
});