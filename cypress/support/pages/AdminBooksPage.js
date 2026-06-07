import { ADMIN_BOOKS_URL, WAIT_MEDIUM, WAIT_LONG } from '../config/constants';

class AdminBooksPage {
  constructor() {
    // Botões
    this.addBookButton = '.btn-success';
    this.editButton = '.btn-outline-primary';
    this.deleteButton = '.btn-outline-danger';
    this.saveButton = '#save-book-btn';
    this.confirmDeleteButton = '#confirm-delete-btn';

    // Formulário
    this.titleInput = '#book-title';
    this.authorInput = '#book-author';
    this.isbnInput = '#book-isbn';
    this.categorySelect = '#book-category';
    this.editorInput = '#book-editor';
    this.yearInput = '#book-year';

    // Busca
    this.searchInput = '#search-input';

    // Mensagens
    this.alertContainer = '#alert-container';
  }

  navigate() {
    cy.visit(ADMIN_BOOKS_URL);
    cy.wait(WAIT_LONG); // Aguarda carregamento completo
  }

  clickAddBook() {
    cy.get(this.addBookButton).click({ force: true });
    return this;
  }

  fillTitle(title) {
    cy.get(this.titleInput).type(title);
    return this;
  }

  clearAndFillTitle(title) {
    cy.get(this.titleInput).clear().type(title);
    return this;
  }

  fillAuthor(author) {
    cy.get(this.authorInput).type(author);
    return this;
  }

  clearAndFillAuthor(author) {
    cy.get(this.authorInput).clear().type(author);
    return this;
  }

  fillISBN(isbn) {
    cy.get(this.isbnInput).type(isbn);
    return this;
  }

  clearAndFillISBN(isbn) {
    cy.get(this.isbnInput).clear().type(isbn);
    return this;
  }

  selectCategory(category) {
    cy.get(this.categorySelect).select(category);
    return this;
  }

  fillEditor(editor) {
    cy.get(this.editorInput).type(editor);
    return this;
  }

  clearAndFillEditor(editor) {
    cy.get(this.editorInput).clear().type(editor);
    return this;
  }

  fillYear(year) {
    cy.get(this.yearInput).type(year);
    return this;
  }

  clearAndFillYear(year) {
    cy.get(this.yearInput).clear().type(year);
    return this;
  }

  fillBookForm(bookData) {
    this.fillTitle(bookData.title);
    this.fillAuthor(bookData.author);
    this.fillISBN(bookData.isbn);
    this.selectCategory(bookData.category);
    this.fillEditor(bookData.editor);
    this.fillYear(bookData.year);
    return this;
  }

  updateBookForm(bookData) {
    this.clearAndFillTitle(bookData.title);
    this.clearAndFillAuthor(bookData.author);
    this.clearAndFillISBN(bookData.isbn);
    this.selectCategory(bookData.category);
    this.clearAndFillEditor(bookData.editor);
    this.clearAndFillYear(bookData.year);
    return this;
  }

  clickSaveBook() {
    cy.get(this.saveButton).click();
    cy.wait(WAIT_MEDIUM);
    return this;
  }

  searchBook(bookTitle) {
    cy.get(this.searchInput).clear().type(bookTitle);
    cy.wait(WAIT_MEDIUM);
    return this;
  }

  clickEditButton(index = 0) {
    cy.get(this.editButton).eq(index).click({ force: true });
    cy.wait(WAIT_MEDIUM);
    return this;
  }

  clickDeleteButton(index = 0) {
    cy.get(this.deleteButton).eq(index).click({ force: true });
    cy.wait(WAIT_MEDIUM);
    return this;
  }

  confirmDelete() {
    cy.get(this.confirmDeleteButton).click({ force: true });
    cy.wait(WAIT_LONG);
    return this;
  }

  getAlertMessage() {
    return cy.get(this.alertContainer);
  }

  verifyAlertMessage(expectedMessage) {
    cy.get(this.alertContainer).should('contain', expectedMessage);
    return this;
  }
}

export default new AdminBooksPage();
