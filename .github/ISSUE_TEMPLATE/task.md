name: 📋 Task
description: Criar uma tarefa ou item de trabalho
title: "[TASK] "
labels: ["task", "triage"]
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        Crie uma nova tarefa ou item de trabalho.

  - type: textarea
    id: description
    attributes:
      label: Descrição da Tarefa
      description: O que precisa ser feito?
      placeholder: "Descrever a tarefa..."
    validations:
      required: true

  - type: textarea
    id: checklist
    attributes:
      label: Checklist
      description: O que precisa ser feito?
      placeholder: |
        - [ ] Subtarefa 1
        - [ ] Subtarefa 2
        - [ ] Subtarefa 3
    validations:
      required: false

  - type: input
    id: epic
    attributes:
      label: Epic (Opcional)
      description: A qual epic pertence?
      placeholder: "Sprint 1, Release 2.0, etc"
    validations:
      required: false

  - type: checkboxes
    id: priority
    attributes:
      label: Prioridade
      options:
        - label: 🔴 Alta
        - label: 🟡 Média
        - label: 🟢 Baixa
