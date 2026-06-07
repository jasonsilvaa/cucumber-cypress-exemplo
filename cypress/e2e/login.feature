# language: pt

Funcionalidade: Login no Hub de Leitura
    Como um usuário do Hub de Leitura
    Eu quero autenticar no sistema
    Para acessar as funcionalidades de acordo com meu perfil

    @login @positivo
    Cenário: Login com credenciais válidas de administrador
        Dado que estou na página de login do Hub de Leitura
        Quando informo credenciais válidas de administrador
        Então devo ser redirecionado para o painel administrativo

    @login @negativo
    Cenário: Login com credenciais inválidas
        Dado que estou na página de login do Hub de Leitura
        Quando informo credenciais inválidas
        Então devo ver uma mensagem de erro de autenticação
