# 🐙 Como Subir o Projeto no GitHub

---

## 📋 Pré-requisitos

- Ter o [Git](https://git-scm.com/downloads) instalado
- Ter uma conta no [GitHub](https://github.com)
- Ter o projeto `Projeto_POO_Fase01` na sua máquina

---

## 🔧 Configuração Inicial do Git (só na primeira vez)

Abra o CMD ou PowerShell e configure seu nome e e-mail:

```cmd
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

---

## 📁 Criar o `.gitignore`

Antes de subir, crie um arquivo `.gitignore` na raiz do projeto para **não enviar arquivos desnecessários** ao GitHub.

Crie o arquivo `Projeto_POO_Fase01/.gitignore` com o conteúdo:

```gitignore
# Dependências Node
node_modules/

# Variáveis de ambiente (NUNCA subir isso!)
.env

# Build TypeScript
dist/

# Logs
*.log
npm-debug.log*

# Sistema operacional
.DS_Store
Thumbs.db

# VS Code
.vscode/
```

> ⚠️ **IMPORTANTE:** O arquivo `.env` contém senhas do banco de dados. Nunca suba ele para o GitHub!

---

## 🌐 Criar o Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"New"** (ou **"+"** no canto superior direito → **"New repository"**)
3. Preencha:
   - **Repository name:** `Projeto_POO_Fase01`
   - **Description:** `Sistema de gerenciamento de Loja Pet — POO Fase 01`
   - **Visibilidade:** Public ou Private (sua escolha)
   - ❌ **NÃO** marque "Add a README file" (já temos arquivos locais)
4. Clique em **"Create repository"**

---

## 🚀 Subir o Projeto

Abra o CMD na pasta raiz do projeto:

```cmd
cd C:\xampp\htdocs\Projeto_POO_Fase01
```

### Passo 1 — Inicializar o Git
```cmd
git init
```

### Passo 2 — Adicionar todos os arquivos
```cmd
git add .
```

### Passo 3 — Verificar o que será enviado (opcional)
```cmd
git status
```

### Passo 4 — Criar o primeiro commit
```cmd
git commit -m "feat: Sprint 1 - CRUD de Pets e Produtos"
```

### Passo 5 — Conectar ao repositório do GitHub
Substitua `SEU_USUARIO` pelo seu usuário do GitHub:
```cmd
git remote add origin https://github.com/SEU_USUARIO/Projeto_POO_Fase01.git
```

### Passo 6 — Subir o projeto
```cmd
git branch -M main
git push -u origin main
```

### Passo 7 — Inserir credenciais
O GitHub vai pedir login. Use seu **usuário** e um **Personal Access Token** (não a senha da conta).

> Para gerar o token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token → marque `repo` → Generate

---

## 📝 Como Atualizar o Repositório (próximas sprints)

Sempre que fizer alterações e quiser salvar no GitHub:

```cmd
git add .
git commit -m "feat: Sprint 2 - Login e Dashboard"
git push
```

---

## 🏷️ Boas Práticas de Commit

Use mensagens descritivas seguindo o padrão **Conventional Commits**:

| Prefixo | Quando usar |
|---|---|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `docs:` | Documentação |
| `style:` | Formatação, sem mudança de lógica |
| `refactor:` | Refatoração de código |
| `chore:` | Tarefas de manutenção |

### Exemplos
```cmd
git commit -m "feat: adicionar página de login"
git commit -m "fix: corrigir campo nascimento no CRUD de pets"
git commit -m "docs: adicionar documentação da Sprint 1"
```

---

## 🌿 Sugestão de Branches por Sprint

Para organizar melhor o projeto, crie uma branch por sprint:

```cmd
# Criar e entrar na branch da Sprint 2
git checkout -b sprint-2

# Depois de terminar, merge na main
git checkout main
git merge sprint-2
git push
```

---

## ✅ Estrutura esperada no GitHub

```
Projeto_POO_Fase01/
├── backend/
├── frontend/
├── SPRINT_1.md
├── GITHUB.md
└── .gitignore
```

---

*Documentação criada em 07/03/2026*