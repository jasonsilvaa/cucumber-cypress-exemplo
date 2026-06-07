# 🔄 GitHub Actions - Fluxo Visual

## 🎯 Visão Geral do Pipeline

```
┌─────────────────────────────────────────────────────────────────────┐
│                         GitHub Actions Pipeline                     │
└─────────────────────────────────────────────────────────────────────┘

                        TRIGGER EVENTS
                             │
                ┌────────────┼────────────┐
                │            │            │
            PUSH/PR        SCHEDULE      TAG
                │            │            │
                ▼            ▼            ▼
           ┌────────┐   ┌────────┐   ┌────────┐
           │ test   │   │ test   │   │release │
           │ quality│   │quality │   │        │
           │ docs   │   │ docs   │   │        │
           └────────┘   └────────┘   └────────┘
                │            │            │
                └────────────┼────────────┘
                             │
                        ✅ SUCCESS?
                        /          \
                    YES/            \NO
                    /                \
              ✅ PASS          ❌ FAIL
              │                   │
              │                   └─→ Bloqueia merge
              │                      Notifica time
              │
              └─→ Permite merge
                  Cria artifacts
                  GitHub Release (se tag)
```

---

## 📊 Matriz de Testes

```
test.yml Strategy Matrix:

┌─────────────────────────────────────────────┐
│ Node Version × Browser Combinations        │
├─────────────────────────────────────────────┤
│                                             │
│  Node 18.x          Node 20.x               │
│    │                   │                    │
│    ├─ Chrome       ├─ Chrome                │
│    ├─ Firefox      ├─ Firefox               │
│    └─ Edge         └─ Edge                  │
│                                             │
│  Total: 6 Jobs em Paralelo                 │
│  Tempo: ~5-10 minutos                      │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🔄 Fluxo Detalhado

### 1. PUSH / PULL REQUEST

```
Developer
   │
   ├─ git push origin feature
   │
   ▼
GitHub Repository
   │
   ├─ Detecta novo push
   │
   ├─ Acionadores:
   │  ├─ branches: [main, develop]
   │  └─ [on.push, on.pull_request]
   │
   ├─→ test.yml
   │   ├─ Job: lint-and-format
   │   ├─ Job: test (6 combinações)
   │   └─ Job: result
   │
   ├─→ quality.yml
   │   ├─ Job: code-quality
   │   └─ Job: dependency-check
   │
   ├─→ docs.yml (se .md)
   │   └─ Job: docs-validate
   │
   ▼
Status Check
   │
   ├─ ✅ Tudo passou?
   │  └─→ Merge button ativa
   │
   └─ ❌ Algo falhou?
      └─→ Merge button desativa + feedback

```

---

### 2. AGENDADO (Diário)

```
08:00 AM UTC (Todos os dias)
   │
   ├─ Cron trigger
   │
   ├─→ test.yml
   │   └─ Executa todos os testes
   │
   ├─→ quality.yml
   │   └─ Verifica qualidade
   │
   ├─→ docs.yml
   │   └─ Valida documentação
   │
   ▼
Relatórios salvos
Notificações enviadas (se falhar)
```

---

### 3. TAG/RELEASE

```
Developer
   │
   ├─ git tag v1.0.0
   ├─ git push origin v1.0.0
   │
   ▼
GitHub Tags
   │
   ├─ Detecta nova tag
   │
   ├─→ release.yml
   │   ├─ Cria GitHub Release
   │   ├─ Gera release notes
   │   └─ Publica release
   │
   ▼
GitHub Releases
   │
   └─ Release publicada ✅
```

---

## 📦 Artifacts Gerados

```
test.yml
├─ 📸 Screenshots (em falhas)
│  └─ cypress/screenshots-[version]-[browser]
│
└─ 🎥 Videos (todos os testes)
   └─ cypress-videos-[version]-[browser]

quality.yml
├─ 📄 code-quality-report
└─ 📋 dependencies-list

docs.yml
└─ 📊 documentation-report

release.yml
└─ 📝 release-notes
```

---

## ⏱️ Timeline de Execução

```
PUSH/PR → Jobs Iniciados (paralelos)

├─ test.yml
│  ├─ [2 min] Checkout + Setup Node
│  ├─ [3 min] Lint
│  ├─ [5 min] Tests (6 paralelos)
│  └─ [1 min] Upload artifacts
│  Total: ~10 min
│
├─ quality.yml (paralelo)
│ ├─ [2 min] Code analysis
│ ├─ [1 min] Security check
│ └─ [1 min] Upload report
│ Total: ~4 min
│
└─ docs.yml (se .md)
   ├─ [1 min] Validate
   └─ [1 min] Report
   Total: ~2 min

Final: ~10 min (execution time com paralelo)
```

---

## 🔐 Branch Protection Workflow

```
        PR Criada
            │
            ▼
    Workflows Iniciam
            │
     ┌──────┴──────┐
     │             │
  test.yml    quality.yml
     │             │
     └──────┬──────┘
            ▼
      Todos passaram?
         /    \
       SIM    NÃO
        │      │
        ▼      ▼
      ✅    ❌ FAILED
      │       │
      │       └─ Merge bloqueado
      │       └─ Feedback enviado
      │
      ▼
   Merge permitido (Aprovação)
      │
      └─ Branch protegido ✅
```

---

## 📊 Status Badge

```
Adicionando ao README:

[![Test Status](https://github.com/USER/REPO/actions/workflows/test.yml/badge.svg)](https://github.com/USER/REPO/actions/workflows/test.yml)

Mostra: ✅ passing / ❌ failing / ⏳ running
```

---

## 🔍 Monitoramento em Tempo Real

```
GitHub Actions Dashboard
│
├─ Current runs (Agora)
│  ├─ ✅ test.yml (5 min, 6/6 passed)
│  ├─ ✅ quality.yml (2 min, passed)
│  └─ 🟡 docs.yml (running)
│
├─ Recent runs (Histórico)
│  ├─ ✅ v1.2.0 release (1 hour ago)
│  ├─ ✅ PR #45 merged (3 hours ago)
│  └─ ❌ Scheduled run (5 hours ago)
│
└─ Artifacts
   ├─ 📸 screenshots-20.x-firefox (7 days)
   ├─ 🎥 videos-20.x-chrome (7 days)
   └─ 📄 code-quality-report (30 days)
```

---

## 🎯 Ciclo Completo de Desenvolvimento

```
1. Developer cria feature branch
   │
   ├─→ Escreve testes e código
   │
   ├─→ git commit
   │
   ├─→ git push
   │   └─ ✅ test.yml executa
   │   └─ ✅ quality.yml executa
   │
   ├─→ Cria Pull Request
   │   └─ Workflows executam novamente
   │
   ├─→ PR é aprovado
   │   └─ Merge é feito em main
   │
   ├─→ Tag é criada (v1.0.0)
   │   └─ ✅ release.yml executa
   │   └─ Release publicada
   │
   └─→ ✅ Code está em produção
```

---

## 🚀 Performance & Paralelização

```
SEM Paralelização (Sequencial):
├─ Node 18 + Chrome: 10 min
├─ Node 18 + Firefox: 10 min
├─ Node 18 + Edge: 10 min
├─ Node 20 + Chrome: 10 min
├─ Node 20 + Firefox: 10 min
└─ Node 20 + Edge: 10 min
Total: 60 minutos ⏳

COM Paralelização (Matrix):
├─ [Job 1] Node 18 + Chrome: 10 min \
├─ [Job 2] Node 18 + Firefox: 10 min \
├─ [Job 3] Node 18 + Edge: 10 min     ├─ Em paralelo = ~10 min ✅
├─ [Job 4] Node 20 + Chrome: 10 min  /
├─ [Job 5] Node 20 + Firefox: 10 min /
└─ [Job 6] Node 20 + Edge: 10 min   /
Total: 10 minutos ⚡

Economia: 50 min por execução!
```

---

## 📈 Workflow Stats

```
┌─────────────────────────────────────────┐
│ GitHub Actions Usage Statistics        │
├─────────────────────────────────────────┤
│ Workflows: 4                            │
│ Jobs por workflow: 2-3                  │
│ Paralelo: 6 jobs máximo                 │
│ Runtime: 10-15 min por execução         │
│ Artifacts retention: 7-30 days          │
│ Execuções/mês: ~150+                    │
├─────────────────────────────────────────┤
│ GitHub Free Plan: 2000 min/mês ✅       │
│ Uso atual: ~500 min/mês                 │
│ Margem: 1500 min disponível             │
└─────────────────────────────────────────┘
```

---

## 🎓 Legenda de Status

```
✅ Success - Tudo passou
❌ Failure - Algo falhou
🟡 Running - Executando agora
⏭️ Skipped - Pulado (por condição)
🟠 Cancelled - Cancelado manualmente
⏳ Queued - Aguardando execução
```

---

## 🔗 Relação Entre Workflows

```
                    Developer Code
                          │
              ┌───────────┴───────────┐
              │                       │
         PUSH/PR              TAG/RELEASE
              │                       │
              ├─→ test.yml           └─→ release.yml
              │
              ├─→ quality.yml
              │
              └─→ docs.yml
              
Todos precisam passar antes de merge!
```

---

## 💡 Dica Pro

```
🎯 Otimizar CI/CD:

1. Cache npm (já configurado)
   └─ Economiza tempo em setup

2. Paralelização (já configurado)
   └─ 6 jobs rodando ao mesmo tempo

3. Fail fast (on PR)
   └─ Para logo ao falhar

4. Artifacts com TTL
   └─ Limpa automaticamente

5. Scheduled runs
   └─ Detecta flakiness noturno
```

---

**Pronto para usar! 🚀**

Veja a documentação completa em [GITHUB_ACTIONS.md](./GITHUB_ACTIONS.md)
