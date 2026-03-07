# 📋 Documentação — Sprint 1
### Projeto: Loja Pet | POO Fase 01

---

## 📌 Visão Geral

| Item | Detalhe |
|---|---|
| **Projeto** | Loja Pet — Sistema de Gerenciamento |
| **Sprint** | 1 |
| **Disciplina** | Programação Orientada a Objetos (POO) |
| **Status** | ✅ Concluída |

---

## 🎯 Objetivo da Sprint

Desenvolver a base do sistema com CRUD completo para **Pets** e **Produtos**, integrando frontend estático (HTML + Bootstrap + jQuery) com backend Node.js + Express + TypeScript conectado a um banco MySQL via XAMPP.

---

## 🛠️ Stack Tecnológica

### Backend
| Tecnologia | Versão | Função |
|---|---|---|
| Node.js | — | Ambiente de execução |
| Express | 5.2.1 | Framework HTTP |
| TypeScript | 5.9.3 | Tipagem estática |
| ts-node | 10.9.2 | Execução TypeScript |
| mysql2 | 3.19.0 | Conexão com banco de dados |
| dotenv | 17.3.1 | Variáveis de ambiente |
| cors | 2.8.6 | Cross-Origin Resource Sharing |
| nodemon | 3.1.14 | Hot reload em desenvolvimento |

### Frontend
| Tecnologia | Versão | Função |
|---|---|---|
| HTML5 | — | Estrutura das páginas |
| Bootstrap | 5.3.3 | Framework CSS |
| Bootstrap Icons | 1.11.3 | Ícones |
| jQuery | 3.7.1 | Requisições Ajax e DOM |
| SweetAlert2 | 11 | Alertas e confirmações |

### Banco de Dados
| Tecnologia | Detalhe |
|---|---|
| MySQL | Via XAMPP |
| Banco | `loja_pet` |
| Porta | 3306 |

---

## 📁 Estrutura de Arquivos

```
Projeto_POO_Fase01/
├── backend/
│   ├── src/
│   │   ├── app.ts              # Servidor Express + rotas REST
│   │   ├── .env                # Variáveis de ambiente
│   │   ├── db/
│   │   │   └── database.ts     # Pool de conexão MySQL
│   │   └── models/
│   │       ├── Pet.ts          # Classe Pet (POO)
│   │       └── Produto.ts      # Classe Produto (POO)
│   ├── package.json
│   └── tsconfig.json
└── frontend/
    ├── index.html              # Redireciona para pets.html
    ├── pets.html               # Página CRUD de Pets
    ├── produtos.html           # Página CRUD de Produtos
    ├── css/
    │   └── style.css           # Estilos customizados
    └── js/
        ├── api.js              # Configuração base da API
        ├── pets.js             # Lógica CRUD de Pets
        └── produtos.js         # Lógica CRUD de Produtos
```

---

## 🗄️ Banco de Dados

### Tabela `pets`

```sql
CREATE TABLE pets (
  id          INT           NOT NULL AUTO_INCREMENT,
  nome        VARCHAR(100)  NOT NULL,
  especie     VARCHAR(50)   NOT NULL,
  peso        DECIMAL(5,2)  NOT NULL,
  idade       INT           NOT NULL,
  nascimento  DATE          NULL,
  created_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### Tabela `produtos`

```sql
CREATE TABLE produtos (
  id          INT            NOT NULL AUTO_INCREMENT,
  nome        VARCHAR(150)   NOT NULL,
  preco       DECIMAL(10,2)  NOT NULL,
  quantidade  INT            NOT NULL DEFAULT 0,
  validade    DATE           NULL,
  created_at  TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

---

## 🔌 API REST

### Base URL
```
http://localhost:3001
```

### Endpoints — Pets

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/pets` | Lista todos os pets |
| `GET` | `/pets/:id` | Busca pet por ID |
| `POST` | `/pets` | Cadastra novo pet |
| `PUT` | `/pets/:id` | Atualiza pet existente |
| `DELETE` | `/pets/:id` | Remove pet |

#### Exemplo de body — POST/PUT `/pets`
```json
{
  "nome": "Rex",
  "especie": "Cachorro",
  "peso": 5.40,
  "idade": 3,
  "nascimento": "2021-06-15"
}
```

### Endpoints — Produtos

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/produtos` | Lista todos os produtos |
| `GET` | `/produtos/:id` | Busca produto por ID |
| `POST` | `/produtos` | Cadastra novo produto |
| `PUT` | `/produtos/:id` | Atualiza produto existente |
| `DELETE` | `/produtos/:id` | Remove produto |

#### Exemplo de body — POST/PUT `/produtos`
```json
{
  "nome": "Ração Premium",
  "preco": 89.90,
  "quantidade": 50,
  "validade": "2026-12-31"
}
```

### Endpoint de Saúde

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/health` | Verifica conexão com o banco |

---

## 🧱 Models (POO)

### Classe `Pet`
```
Atributos privados:
  - #nome: string
  - #especie: string
  - #peso: number
  - #idade: number
  - #nascimento: string | null

Getters: nome, especie, peso, idade, nascimento
Setters: peso (valida > 0), idade (valida >= 0), nascimento
Métodos: toString()
```

### Classe `Produto`
```
Atributos privados:
  - #nome: string
  - #preco: number
  - #quantidade: number
  - #validade: string | null

Getters: nome, preco, quantidade, validade
Setters: preco (valida > 0), quantidade (valida >= 0), validade
Métodos: toString()
```

---

## 🖥️ Funcionalidades Implementadas

### Pets
- [x] Listar todos os pets em tabela
- [x] Cadastrar novo pet via modal
- [x] Editar pet existente via modal
- [x] Excluir pet com confirmação SweetAlert2
- [x] Campo espécie com select (Cachorro, Gato, Ave, Peixe, Animal Silvestre)
- [x] Campo data de nascimento (`<input type="date">`)
- [x] Feedback visual com SweetAlert2 (sucesso, erro, aviso)
- [x] Spinner de carregamento na tabela

### Produtos
- [x] Listar todos os produtos em tabela
- [x] Cadastrar novo produto via modal
- [x] Editar produto existente via modal
- [x] Excluir produto com confirmação SweetAlert2
- [x] Campo data de validade (`<input type="date">`)
- [x] Preço formatado em BRL (R$)
- [x] Feedback visual com SweetAlert2

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
- XAMPP instalado e rodando (MySQL na porta 3306)
- Node.js instalado
- Banco `loja_pet` criado no phpMyAdmin

### 1. Configurar o banco
Execute no phpMyAdmin o script `create_tables.sql`.

### 2. Iniciar o backend
```cmd
cd Projeto_POO_Fase01/backend
npm install
npm start
```
O servidor sobe em `http://localhost:3001`.

### 3. Acessar o frontend
Pelo XAMPP, acesse:
```
http://localhost/Projeto_POO_Fase01/frontend/pets.html
```

---

## 🐛 Bugs Encontrados e Resolvidos

| Bug | Causa | Solução |
|---|---|---|
| Data de nascimento não salvava | Processo zumbi ocupando porta 3000 (nodemon antigo) | Matar processo com `taskkill /PID <id> /F` e trocar para porta 3001 |
| Flatpickr não capturava data dentro do modal Bootstrap | Conflito de z-index e foco entre Flatpickr e Bootstrap Modal | Substituído por `<input type="date">` nativo |
| Backend ignorava campo `nascimento` | `app.ts` antigo sem o campo no INSERT/UPDATE | Atualizado `app.ts` com os campos `nascimento` e `validade` |
| nodemon não recarregava alterações | Cache do ts-node | Adicionado flag `--transpile-only` no script |

---

## 🔮 Próxima Sprint (Sprint 2)

- [ ] Página de Login
- [ ] Dashboard com estatísticas
- [ ] Organizar frontend em pasta `pages/`
- [ ] Novas tabelas no banco de dados
- [ ] Autenticação de usuários

---

*Documentação gerada ao fim da Sprint 1 — 07/03/2026*