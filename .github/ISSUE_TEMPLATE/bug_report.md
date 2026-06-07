name: 🐛 Bug Report
description: Reportar um bug ou problema
title: "[BUG] "
labels: ["bug", "triage"]
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        Obrigado por reportar um bug! Preencha os detalhes abaixo.

  - type: checkboxes
    id: prerequisites
    attributes:
      label: Pré-requisitos
      options:
        - label: Já fiz uma busca por issues similares
          required: true
        - label: Estou usando a versão mais recente
          required: true

  - type: input
    id: version
    attributes:
      label: Versão do Projeto
      description: Qual versão você está usando?
      placeholder: "1.0.0"
    validations:
      required: true

  - type: textarea
    id: description
    attributes:
      label: Descrição do Problema
      description: Descreva o bug de forma clara
      placeholder: "Quando eu [ação], [resultado esperado] não acontece..."
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Passos para Reproduzir
      description: Como reproduzir o bug?
      placeholder: |
        1. Vá para...
        2. Clique em...
        3. Veja o erro...
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Resultado Esperado
      description: O que deveria acontecer?
      placeholder: "Deveria mostrar mensagem de sucesso"
    validations:
      required: true

  - type: textarea
    id: actual
    attributes:
      label: Resultado Atual
      description: O que está acontecendo?
      placeholder: "Mostra erro 500"
    validations:
      required: true

  - type: input
    id: environment
    attributes:
      label: Ambiente
      description: Qual é o seu ambiente?
      placeholder: "Node 20.x, Chrome, macOS"
    validations:
      required: false

  - type: textarea
    id: logs
    attributes:
      label: Logs/Erro
      description: Cole logs ou mensagens de erro
      render: shell
    validations:
      required: false

  - type: textarea
    id: additional
    attributes:
      label: Informações Adicionais
      description: Qualquer outra informação relevante
    validations:
      required: false
