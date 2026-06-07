// URLs da aplicação
export const BASE_URL = Cypress.env('BASE_URL') || 'http://localhost:3000';
export const LOGIN_URL = `${BASE_URL}/login.html`;
export const ADMIN_BOOKS_URL = `${BASE_URL}/admin-books.html`;

// Credenciais padrão
export const DEFAULT_ADMIN_EMAIL = Cypress.env('ADMIN_EMAIL') || 'admin@biblioteca.com';
export const DEFAULT_ADMIN_PASSWORD = Cypress.env('ADMIN_PASSWORD') || 'admin123';

// Dados de livro para testes
export const DEFAULT_TEST_BOOK = {
  title: 'Livro de Teste',
  author: 'Autor de Teste',
  isbn: '1234567890',
  category: 'Ficção',
  editor: 'Editora de Teste',
  year: '2024',
  copies: '1',
};

export const UPDATED_TEST_BOOK = {
  ...DEFAULT_TEST_BOOK,
  title: 'Livro de Teste Editado',
};

// Categorias de livros
export const BOOK_CATEGORIES = {
  FICTION: 'Ficção',
  NON_FICTION: 'Não Ficção',
  SCIENCE: 'Ciência',
  TECHNOLOGY: 'Tecnologia',
};

// Mensagens esperadas
export const SUCCESS_MESSAGES = {
  BOOK_CREATED: 'Livro adicionado com sucesso!',
  BOOK_UPDATED: 'Livro atualizado com sucesso!',
  BOOK_DELETED: 'Livro excluído com sucesso!',
};
