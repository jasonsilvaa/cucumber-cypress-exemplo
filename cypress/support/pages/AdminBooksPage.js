import { ADMIN_BOOKS_URL } from '../config/constants';

class AdminBooksPage {
  constructor() {
    this.saveButton = '#save-book-btn';
    this.confirmDeleteButton = '#confirm-delete-btn';
    this.titleInput = '#book-title';
    this.authorInput = '#book-author';
    this.isbnInput = '#book-isbn';
    this.categorySelect = '#book-category';
    this.editorInput = '#book-editor';
    this.yearInput = '#book-year';
    this.copiesInput = '#book-copies';
    this.searchInput = '#search-input';
    this.booksTableBody = '#books-tbody';
    this.booksLoading = '#books-loading';
    this.alertContainer = '#alert-container';
    this.bookModal = '#bookModal';
  }

  navigate() {
    cy.visit(ADMIN_BOOKS_URL);
    this.waitForBooksTable();
  }

  waitForBooksTable() {
    cy.get(this.booksLoading, { timeout: 15000 }).should('not.be.visible');
    cy.get(this.booksTableBody).should('be.visible');
    return this;
  }

  clickAddBook() {
    cy.contains('button', 'Novo Livro').click();
    cy.get(this.bookModal).should('be.visible');
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
    cy.get(this.yearInput).clear().type(String(year));
    return this;
  }

  fillCopies(copies) {
    cy.get(this.copiesInput).clear().type(String(copies));
    return this;
  }

  fillBookForm(bookData) {
    this.fillTitle(bookData.title);
    this.fillAuthor(bookData.author);
    if (bookData.isbn) {
      this.fillISBN(bookData.isbn);
    }
    this.selectCategory(bookData.category);
    if (bookData.editor) {
      this.fillEditor(bookData.editor);
    }
    if (bookData.year) {
      this.fillYear(bookData.year);
    }
    this.fillCopies(bookData.copies || '1');
    return this;
  }

  updateBookForm(bookData) {
    this.clearAndFillTitle(bookData.title);
    this.clearAndFillAuthor(bookData.author);
    if (bookData.isbn) {
      this.clearAndFillISBN(bookData.isbn);
    }
    this.selectCategory(bookData.category);
    if (bookData.editor) {
      this.clearAndFillEditor(bookData.editor);
    }
    if (bookData.year) {
      this.clearAndFillYear(bookData.year);
    }
    if (bookData.copies) {
      this.fillCopies(bookData.copies);
    }
    return this;
  }

  clickSaveBook() {
    cy.get(this.saveButton).click();
    cy.get(this.bookModal).should('not.be.visible');
    return this;
  }

  searchBook(bookTitle) {
    cy.get(this.searchInput).clear().type(bookTitle);
    cy.get(this.booksTableBody, { timeout: 10000 }).should('contain', bookTitle);
    return this;
  }

  clickEditButton(index = 0) {
    cy.get(this.booksTableBody)
      .find('button[title="Editar"]')
      .eq(index)
      .click();
    cy.get(this.bookModal).should('be.visible');
    return this;
  }

  clickDeleteButton(index = 0) {
    cy.get(this.booksTableBody)
      .find('button[title="Excluir"]')
      .eq(index)
      .click();
    return this;
  }

  confirmDelete() {
    cy.get(this.confirmDeleteButton).click();
    return this;
  }

  getAlertMessage() {
    return cy.get(this.alertContainer);
  }

  verifyAlertMessage(expectedMessage) {
    cy.get(this.alertContainer).should('be.visible').and('contain', expectedMessage);
    return this;
  }
}

export default new AdminBooksPage();
