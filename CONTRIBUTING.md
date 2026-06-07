# Contribuindo para o Projeto

Obrigado por querer melhorar este projeto! Aqui estão algumas diretrizes para ajudar.

## 🎯 Como Contribuir

### 1. Criando um Fork e Clonando
```bash
git clone https://github.com/seu-usuario/cucumber-cypress-exemplo.git
cd cucumber-cypress-exemplo
```

### 2. Criando uma Branch
```bash
git checkout -b feature/sua-feature
```

### 3. Fazendo Commits
```bash
git add .
git commit -m "feat: descrição clara da mudança"
```

### 4. Fazendo Push
```bash
git push origin feature/sua-feature
```

### 5. Abrindo um Pull Request
Descreva suas alterações de forma clara no PR.

## 📋 Padrões de Código

### Naming Conventions
- Arquivos: `camelCase` ou `PascalCase` para classes
- Variáveis: `camelCase`
- Constantes: `UPPER_SNAKE_CASE`
- Métodos: `camelCase` com verbo no inicio (get, set, fill, click, etc.)

### Page Object Model
Sempre que possível, use o POM:
```javascript
class MyPage {
  constructor() {
    this.selector = '#element';
  }

  clickElement() {
    cy.get(this.selector).click();
    return this;
  }
}
```

### Step Definitions
Mantenha steps simples e legíveis:
```javascript
Given('precondição clara', () => {
  // Uma ação clara
});

When('ação do usuário', () => {
  // Uma ação específica
});

Then('resultado esperado', (valor) => {
  // Uma asserção clara
});
```

### Helpers e Utilitários
Crie funções reutilizáveis e bem nomeadas:
```javascript
export const operacaoEspecifica = (parametro) => {
  // Implementação
};
```

## 🧪 Testando suas Alterações

```bash
# Verificar linting
npm run lint

# Corrigir linting
npm run lint:fix

# Executar testes
npm test

# Abrir Cypress para testes interativos
npm run test:open
```

## 📝 Padrão de Commit

Use o seguinte padrão:
- `feat:` - Nova feature
- `fix:` - Correção de bug
- `docs:` - Alterações na documentação
- `style:` - Formatação ou linting
- `refactor:` - Refatoração de código
- `test:` - Adição ou alteração de testes

Exemplo:
```bash
git commit -m "feat: adicionar nova page object para checkout"
git commit -m "fix: corrigir timeout em espera de elemento"
git commit -m "docs: atualizar README com instruções"
```

## 🐛 Reportando Bugs

Ao reportar um bug, inclua:
1. Descrição clara do problema
2. Passos para reproduzir
3. Comportamento esperado vs. comportamento atual
4. Logs ou screenshots se aplicável
5. Versões (Node.js, Cypress, etc.)

## ✨ Sugestões de Melhorias

Ideias para melhorar o projeto:
- [ ] Adicionar mais testes
- [ ] Melhorar documentação
- [ ] Adicionar CI/CD
- [ ] Adicionar reports automáticos
- [ ] Melhorar performance dos testes
- [ ] Adicionar testes de acessibilidade
- [ ] Integração com Allure Reports

## 📚 Recursos Úteis

- [Documentação Cypress](https://docs.cypress.io)
- [Documentação Cucumber](https://cucumber.io)
- [BDD Best Practices](https://cucumber.io/docs/bdd/)

---

**Obrigado pela contribuição! 🎉**
