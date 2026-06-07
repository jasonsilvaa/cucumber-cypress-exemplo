# Boas Práticas e Dicas

Guia de boas práticas para usar este projeto de forma eficiente.

## 🎯 Estrutura de Testes

### 1. Organização de Features
```gherkin
Feature: Administração de Livros
  Como administrador
  Quero gerenciar livros
  Para manter o catálogo atualizado

  Scenario: Adicionar novo livro
    Given que eu estou na página de administrador
    When eu adiciono um novo livro
    Then deve aparecer mensagem de sucesso
```

### 2. Cenários Bem Escritos
- **Descritivos**: Deixe claro o que está sendo testado
- **Independentes**: Cada cenário deve ser testável isoladamente
- **Simples**: Evite cenários muito complexos
- **Organizados**: Agrupe cenários relacionados

## 🛠 Trabalhando com Page Objects

### ✅ Correto
```javascript
class AdminBooksPage {
  fillTitle(title) {
    cy.get('#book-title').type(title);
    return this;
  }

  clickSave() {
    cy.get('#save-btn').click();
    return this;
  }
}
```

### ❌ Evitar
```javascript
// Não faça isso em steps - use POM
cy.get('#book-title').type('Livro');
cy.get('#save-btn').click();
```

## 📊 Padrão de Assertions

### ✅ Correto
```javascript
// Assertions claras e específicas
cy.get('#alert').should('contain', 'Livro adicionado');
cy.get('#book-list').should('have.length', 5);
cy.get('#button').should('be.enabled');
```

### ❌ Evitar
```javascript
// Assertions genéricas
cy.get('#alert').should('exist');
cy.get('#book-list').should('not.be.empty');
```

## ⏱ Lidando com Esperas

### ✅ Correto
```javascript
// Use cy.wait com endpoints reais
cy.intercept('POST', '/api/books').as('bookCreated');
adminBooksPage.clickSave();
cy.wait('@bookCreated');
```

### ❌ Evitar
```javascript
// Evite cy.wait com números fixos
cy.wait(5000);
cy.wait(2000);
```

## 🔐 Variáveis de Ambiente

### ✅ Use variáveis
```javascript
const email = Cypress.env('ADMIN_EMAIL');
const password = Cypress.env('ADMIN_PASSWORD');
```

### ❌ Evite hardcoding
```javascript
const email = 'admin@biblioteca.com';
const password = 'admin123';
```

## 🧩 Reutilizando Código

### ✅ Use Helpers
```javascript
// bookHelper.js
export const createBook = (bookData) => {
  AdminBooksPage.clickAddBook();
  AdminBooksPage.fillBookForm(bookData);
  AdminBooksPage.clickSaveBook();
};
```

### ❌ Repetindo Código
```javascript
// Não repita - criar helper
AdminBooksPage.clickAddBook();
AdminBooksPage.fillBookForm(data);
AdminBooksPage.clickSaveBook();
// ... repetindo em outro teste
```

## 🐛 Debug e Troubleshooting

### Visualizar o que o Cypress está fazendo
```javascript
// Use cy.debug() para pausar
cy.get('#element').debug().click();

// Use cy.pause() para pause manual
cy.pause();
```

### Verificar o estado da página
```bash
# Abra as DevTools
# Inspecione elementos
# Use o console
```

### Rodar teste específico
```bash
npx cypress run --spec cypress/e2e/admin-livros.feature
```

## 📈 Performance

### Otimizar Testes
1. **Paralele**: Execute testes em paralelo quando possível
2. **Limpe**: Use `beforeEach` para limpar estado
3. **Timeouts**: Configure timeouts apropriados
4. **Seletores**: Use seletores específicos e performáticos

### ✅ Bom Seletor
```javascript
cy.get('#book-title')  // ID específico
cy.get('[data-test="book-title"]')  // Data attribute
cy.get('.book-list > li:first')  // Seletor específico
```

### ❌ Ruim Seletor
```javascript
cy.get('div > div > div > button')  // Muito genérico
cy.get('.btn')  // Múltiplos elementos
cy.contains('Clique aqui')  // Frágil (mudança de texto quebra)
```

## 📝 Logs e Reports

### Adicione Logs Úteis
```javascript
cy.log('Criando novo livro...');
cy.log(`Título: ${bookData.title}`);
```

### Veja Logs no Cypress Runner
```bash
npm run test:open
# Expandir "Command Log" para ver detalhes
```

## 🎓 Recursos Adicionais

### Videos Úteis
- Como usar Page Objects
- Best Practices no Cypress
- BDD com Cucumber

### Documentação
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices.html)
- [Cucumber Best Practices](https://cucumber.io/docs/guides/migrating-to-pytest/)

## 🚀 Próximos Passos

1. **CI/CD**: Configure testes automáticos no GitHub Actions
2. **Reports**: Integre com Allure ou Mochawesome
3. **Testes Visuais**: Adicione comparação de imagens
4. **API**: Teste endpoints junto com UI
5. **Acessibilidade**: Adicione testes de acessibilidade

---

**Dúvidas? Abra uma issue no repositório!** 🤔
