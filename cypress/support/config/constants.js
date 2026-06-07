// URLs da aplicação
export const BASE_URL = Cypress.env('BASE_URL') || 'http://localhost:3000';
export const LOGIN_URL = `${BASE_URL}/login.html`;
export const ADMIN_BOOKS_URL = `${BASE_URL}/admin-books.html`;

// Credenciais padrão
export const DEFAULT_ADMIN_EMAIL = Cypress.env('ADMIN_EMAIL') || 'admin@biblioteca.com';
export const DEFAULT_ADMIN_PASSWORD = Cypress.env('ADMIN_PASSWORD') || 'admin123';

// Esperas padrão (em ms)
export const WAIT_SHORT = 500;
export const WAIT_MEDIUM = 1000;
export const WAIT_LONG = 3000;

// Categorias de livros
export const BOOK_CATEGORIES = {
  FICTION: 'Ficção',
  NON_FICTION: 'Não Ficção',
  SCIENCE: 'Ciência',
  TECHNOLOGY: 'Tecnologia',
};

// Mensagens esperadas
export const SUCCESS_MESSAGES = {
  BOOK_CREATED: 'Livro adicionado com sucesso',
  BOOK_UPDATED: 'Livro atualizado com sucesso',
  BOOK_DELETED: 'Livro removido com sucesso',
};
