name: ✨ Feature Request
description: Sugerir uma nova funcionalidade
title: "[FEATURE] "
labels: ["enhancement", "triage"]
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        Obrigado por sugerir uma nova feature! Preencha os detalhes abaixo.

  - type: checkboxes
    id: prerequisites
    attributes:
      label: Pré-requisitos
      options:
        - label: Já fiz uma busca por features similares
          required: true

  - type: textarea
    id: problem
    attributes:
      label: Qual problema esta feature resolve?
      description: Descreva o problema ou limitação atual
      placeholder: "Atualmente não é possível..."
    validations:
      required: true

  - type: textarea
    id: solution
    attributes:
      label: Qual é a solução proposta?
      description: Descreva como a feature deveria funcionar
      placeholder: "A feature deveria permitir..."
    validations:
      required: true

  - type: textarea
    id: alternatives
    attributes:
      label: Alternativas Consideradas
      description: Existem outras soluções?
      placeholder: "Uma alternativa seria..."
    validations:
      required: false

  - type: textarea
    id: additional
    attributes:
      label: Contexto Adicional
      description: Screenshots, exemplos, links, etc.
    validations:
      required: false

  - type: checkboxes
    id: priority
    attributes:
      label: Prioridade
      options:
        - label: 🔴 Alta - Muito importante
        - label: 🟡 Média - Importante
        - label: 🟢 Baixa - Boa ter
