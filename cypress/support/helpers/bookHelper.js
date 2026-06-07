import AdminBooksPage from '../pages/AdminBooksPage';
import { DEFAULT_TEST_BOOK } from '../config/constants';

/**
 * Cria um novo livro com os dados fornecidos
 * @param {Object} bookData - Dados do livro
 * @returns {Object} Os dados do livro criado
 */
export const createBook = (bookData) => {
  AdminBooksPage.clickAddBook();
  AdminBooksPage.fillBookForm(bookData);
  AdminBooksPage.clickSaveBook();
  return bookData;
};

/**
 * Busca um livro pelo título
 * @param {string} title - Título do livro a buscar
 */
export const searchBook = (title) => {
  AdminBooksPage.searchBook(title);
};

/**
 * Garante que um livro exista no catálogo (cria se necessário)
 * @param {Object} bookData - Dados do livro
 */
export const ensureBookInCatalog = (bookData = DEFAULT_TEST_BOOK) => {
  AdminBooksPage.waitForBooksTable();

  cy.get('#books-tbody').then(($tbody) => {
    if (!$tbody.text().includes(bookData.title)) {
      createBook(bookData);
    }
  });

  searchBook(bookData.title);
  cy.get('#books-tbody').should('contain', bookData.title);
};

/**
 * Edita um livro existente
 * @param {string} bookTitle - Título do livro a editar
 * @param {Object} updatedData - Dados atualizados do livro
 */
export const editBook = (bookTitle, updatedData) => {
  searchBook(bookTitle);
  AdminBooksPage.clickEditButton(0);
  AdminBooksPage.updateBookForm(updatedData);
  AdminBooksPage.clickSaveBook();
};

/**
 * Deleta um livro existente
 * @param {string} bookTitle - Título do livro a deletar
 */
export const deleteBook = (bookTitle) => {
  searchBook(bookTitle);
  AdminBooksPage.clickDeleteButton(0);
  AdminBooksPage.confirmDelete();
};

/**
 * Verifica se um livro existe na lista
 * @param {string} bookTitle - Título do livro a verificar
 */
export const verifyBookExists = (bookTitle) => {
  searchBook(bookTitle);
  cy.get('#books-tbody').should('contain', bookTitle);
};
