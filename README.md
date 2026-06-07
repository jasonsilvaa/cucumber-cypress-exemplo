# cucumber-cypress-exemplo

Exemplo de automação de testes usando Cypress com Cucumber para estudantes da EBAC.

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Git

## 🚀 Como usar este projeto

### 1. Clone o repositório
```bash
git clone https://github.com/EBAC-QE/cucumber-cypress-exemplo.git
cd cucumber-cypress-exemplo
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
```bash
cp .env.example .env
```

Edite o arquivo `.env` com as credenciais apropriadas para seu ambiente.

### 4. Execute os testes
```bash
# Modo headless (sem interface gráfica)
npm test

# Com interface gráfica do Cypress
npm run test:open

# Modo headed (com navegador visível)
npm run test:headed

# Executar testes com tags específicas
npm run test:tags=@learn
```

### 5. Verificar qualidade do código
```bash
# Verificar linting
npm run lint

# Corrigir problemas de linting automaticamente
npm run lint:fix
```

## 🏗 Estrutura do Projeto

```
cypress/
├── e2e/                          # Arquivos de testes (features)
│   ├── admin-livros.feature
│   └── teste.feature
├── fixtures/                     # Dados de teste
│   └── example.json
├── support/
│   ├── config/
│   │   └── constants.js         # Constantes da aplicação
│   ├── pages/                   # Page Object Model
│   │   ├── LoginPage.js
│   │   └── AdminBooksPage.js
│   ├── helpers/                 # Funções auxiliares
│   │   ├── authHelper.js        # Funções de autenticação
│   │   └── bookHelper.js        # Funções relacionadas a livros
│   ├── step_definitions/        # Steps do Cucumber
│   │   ├── admin-livros.steps.js
│   │   └── teste.steps.js
│   ├── commands.js              # Comandos customizados do Cypress
│   └── e2e.js                   # Configuração de suporte
├── cypress.config.js            # Configuração do Cypress
└── package.json
```

## 🛠 Tecnologias utilizadas

- **Cypress** - Framework de testes E2E
- **Cucumber** - Ferramenta BDD para escrita de cenários
- **JavaScript** - Linguagem de programação
- **ESLint** - Linter para padronização de código

## 📚 Boas Práticas Implementadas

### 1. Page Object Model (POM)
Os seletores e ações são centralizados em classes de página:
- `LoginPage.js` - Trata login
- `AdminBooksPage.js` - Trata operações de livros

### 2. Configuração Centralizada
- `constants.js` - URLs, credenciais e constantes da aplicação
- Variáveis de ambiente via `.env`

### 3. Helpers e Utilitários
- `authHelper.js` - Operações de autenticação reutilizáveis
- `bookHelper.js` - Operações de livros reutilizáveis

### 4. Organização de Código
- Step definitions limpas e legíveis
- Métodos encadeáveis (fluent interface) no POM
- Reutilização de código

### 5. Configuração Melhorada
- ESLint para consistência de código
- Configurações otimizadas de timeouts
- Screenshot em caso de falhas
- Suporte a variáveis de ambiente

## 📖 Exemplo de Uso

### Usando Page Object Model
```javascript
import AdminBooksPage from '../pages/AdminBooksPage';

// Adicionar um livro
AdminBooksPage.clickAddBook();
AdminBooksPage.fillBookForm({
  title: 'Meu Livro',
  author: 'João Silva',
  isbn: '1234567890',
  category: 'Ficção',
  editor: 'Editora XYZ',
  year: '2024'
});
AdminBooksPage.clickSaveBook();
```

### Usando Helpers
```javascript
import { loginAndNavigateToBooks, createBook } from '../helpers/authHelper';
import { searchBook, deleteBook } from '../helpers/bookHelper';

// Login e navegar
loginAndNavigateToBooks();

// Criar livro
createBook({
  title: 'Novo Livro',
  author: 'Autor',
  isbn: '9876543210',
  category: 'Ficção',
  editor: 'Editora',
  year: '2024'
});

// Buscar e deletar
searchBook('Novo Livro');
deleteBook('Novo Livro');
```

## 🔧 Variáveis de Ambiente

Configure as seguintes variáveis no arquivo `.env`:

```env
# URL da aplicação
CYPRESS_BASE_URL=http://localhost:3000

# Credenciais de teste
CYPRESS_ADMIN_EMAIL=admin@biblioteca.com
CYPRESS_ADMIN_PASSWORD=admin123

# API (opcional)
CYPRESS_API_URL=http://localhost:3001

# Ambiente
NODE_ENV=development
```

## 📚 Recursos de aprendizado

Este projeto foi criado para fins educacionais da EBAC (Escola Britânica de Artes Criativas e Tecnologia).

## 📝 Melhorias Implementadas

✅ Page Object Model para melhor manutenção
✅ Configuração centralizada de constantes
✅ Helpers reutilizáveis
✅ Variáveis de ambiente
✅ ESLint para padronização de código
✅ Scripts npm melhorados
✅ Documentação atualizada
✅ Timeout otimizados
✅ Screenshot em falhas automático
