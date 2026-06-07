# FAQ - Perguntas Frequentes

## 🔍 Como Resolver Problemas Comuns

### P: Os testes não encontram os elementos
**R:** Verifique se os seletores estão corretos:
```bash
npm run test:open
# Use o inspetor para verificar os elementos
```

### P: Testes falham por timeout
**R:** Aumente o timeout ou use cy.wait com alias:
```javascript
// Aumentar timeout global (cypress.config.js)
"defaultCommandTimeout": 10000

// Ou localmente
cy.get('#element', { timeout: 15000 })
```

### P: Como usar variáveis de ambiente?
**R:** Crie um arquivo `.env` baseado no `.env.example`:
```bash
cp .env.example .env
# Edite com suas credenciais
```

### P: Posso rodar testes em paralelo?
**R:** Sim, com Cypress Cloud ou localmente:
```bash
npx cypress run --parallel
```

### P: Como debugar um teste?
**R:** Use `cy.debug()` ou `cy.pause()`:
```javascript
cy.get('#element').debug().click();
// ou
cy.pause(); // Pausa a execução
```

### P: Erro "Cannot find module"
**R:** Instale as dependências:
```bash
npm install
```

### P: Como limpar cache do Cypress?
**R:** Delete a pasta de cache:
```bash
rm -rf ~/.cache/Cypress
npm install cypress
```

### P: ESLint reclamando de imports?
**R:** Certifique-se que tem um `.eslintrc.json` e instale as dependências:
```bash
npm install
npm run lint:fix
```

### P: Os testes abrem no navegador errado
**R:** Especifique o navegador:
```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge
```

### P: Screenshot não está sendo salvo
**R:** Verifique a configuração em `cypress.config.js`:
```javascript
screenshot: 'only-on-failure',
screenshotOnRunFailure: true,
```

### P: Como rodar apenas um teste?
**R:** Use --spec:
```bash
npx cypress run --spec cypress/e2e/admin-livros.feature
```

### P: Erro de CORS em testes
**R:** Desative chromeWebSecurity em `cypress.config.js`:
```javascript
chromeWebSecurity: false,
```

---

## 🛠 Configuração Inicial

### Não consegue instalar dependências?

```bash
# Limpar cache npm
npm cache clean --force

# Instalar de novo
npm install

# Se ainda tiver problema, use yarn
yarn install
```

### Node.js versão incompatível?

```bash
# Verificar versão
node --version

# Precisa ser Node 14+
# Atualize em https://nodejs.org
```

---

## 📚 Estrutura de Diretórios Explicada

```
cypress/
├── e2e/                    # Testes (features)
├── fixtures/               # Dados de teste (JSON)
└── support/                # Código compartilhado
    ├── config/             # Constantes e configurações
    ├── pages/              # Page Objects
    ├── helpers/            # Funções reutilizáveis
    └── step_definitions/   # Steps do Cucumber
```

---

## 🚀 Comandos Mais Úteis

```bash
# Rodar testes
npm test

# Interface gráfica
npm run test:open

# Com navegador visível
npm run test:headed

# Verificar código
npm run lint

# Corrigir código
npm run lint:fix

# Com tags específicas
npm run test:tags=@tag
```

---

## 🐛 Relatórios de Erro

### Erro: "Element not found"
- Verifique o seletor
- Aumente o timeout
- Aguarde a página carregar

### Erro: "Timed out"
- Aumente `defaultCommandTimeout`
- Verifique se servidor está rodando
- Veja se há erro de CORS

### Erro: "Page load error"
- Verifique a URL base em `.env`
- Confirme que a aplicação está rodando
- Limpe cache e tente de novo

---

## 💡 Dicas e Truques

### Executar teste enquanto desenvolve
```bash
npm run test:open
# Deixe aberto e escreva o código
# Cypress reexecuta automaticamente ao salvar
```

### Pegar screenshot de um elemento específico
```bash
cy.get('#element').screenshot('meu-elemento');
```

### Ver variáveis de ambiente
```javascript
cy.log(Cypress.env('ADMIN_EMAIL'));
```

### Simular comportamento lento
```javascript
cy.intercept('GET', '/api/**', (req) => {
  req.reply((res) => {
    res.delay(2000); // Atraso de 2 segundos
  });
});
```

---

## 📞 Precisa de Ajuda?

1. Consulte [BEST_PRACTICES.md](./BEST_PRACTICES.md)
2. Veja [TEST_TEMPLATE.md](./TEST_TEMPLATE.md)
3. Leia [Documentação Cypress](https://docs.cypress.io)
4. Abra uma issue no repositório

---

**Última atualização:** Junho de 2024
