# PetShop Digital --- Fase 1

## Projeto Integrador

**Disciplina:** Programação Orientada a Objetos

## Sistema de Gestão para Pet Shop

Este projeto será construído ao longo de todo o semestre. A cada aula,
um novo conceito será aplicado no mesmo sistema.

⚠️ **Não apague o código anterior --- ele será a base das próximas
fases.**

------------------------------------------------------------------------

# Fase 1 --- Classes e Encapsulamento

**Tecnologias utilizadas**

-   JavaScript ES6+
-   Node.js
-   Execução via Console

------------------------------------------------------------------------

# Como este projeto funciona

Você foi contratado(a) como **dev júnior no PetShop Digital**.

Seu líder técnico vai passar os requisitos aos poucos --- cada aula
funciona como um **novo sprint de desenvolvimento**.

Este é um **projeto contínuo**, e cada fase adiciona novas
funcionalidades ao mesmo sistema.

  ------------------------------------------------------------------------
  Fase                 Assunto                   O que você faz no projeto
  -------------------- ------------------------- -------------------------
  1                    Classes e Encapsulamento  Criar `Produto` e `Pet`
                                                 com `#` e getters/setters

  2                    Mais classes + métodos    Adicionar `Cliente`,
                                                 `Servico` e a classe
                                                 `PetShop`

  3                    Herança                   `Produto` vira pai de
                                                 `Racao`, `Brinquedo`,
                                                 `Medicamento`

  4                    Polimorfismo              Cálculo de preço e
                                                 desconto por tipo

  5                    Composição                Venda composta por itens;
                                                 Cliente tem Pets

  6                    Tratamento de Erros       Validações e exceções

  7                    Interface Web             Frontend conectado ao
                                                 sistema
  ------------------------------------------------------------------------

📌 **Você está na Fase 1.**

Implemente **apenas o que está pedido aqui**.

Nas próximas fases você irá **expandir este mesmo código**, por isso
**não apague nada**.

------------------------------------------------------------------------

# 1. Fase 1 --- O que fazer

Nesta fase você irá criar **2 classes simples**, utilizando:

-   Encapsulamento
-   Atributos privados (`#`)
-   Getters
-   Setters com validação

Você recebeu **arquivos-esqueleto**.

Cada arquivo contém comentários com **TODO** indicando o que deve ser
completado.

------------------------------------------------------------------------

# 1.1 Classe `Produto`

Representa um **item à venda no pet shop**.

📁 Arquivo: `src/Produto.js`

### Atributos

  Atributo (privado)   Tipo     Regra
  -------------------- -------- -------------------------
  `#nome`              string   Nome do produto
  `#preco`             number   Deve ser maior que zero
  `#quantidade`        number   Não pode ser negativa

### O que implementar

-   `constructor(nome, preco, quantidade)`
-   Getter para cada atributo (`nome`, `preco`, `quantidade`)
-   Setter para `preco`
    -   Rejeitar se `<= 0`
-   Setter para `quantidade`
    -   Rejeitar se `< 0`
-   `toString()`

Exemplo de retorno:

    Ração Premium - R$ 89.90 (Estoque: 50)

------------------------------------------------------------------------

# 1.2 Classe `Pet`

Representa um **animal cadastrado no sistema**.

📁 Arquivo: `src/Pet.js`

### Atributos

  Atributo (privado)   Tipo     Regra
  -------------------- -------- --------------------------------------
  `#nome`              string   Nome do pet
  `#especie`           string   "cachorro", "gato", "ave" ou "outro"
  `#peso`              number   Deve ser maior que zero

### O que implementar

-   `constructor(nome, especie, peso)`
-   Getter para cada atributo (`nome`, `especie`, `peso`)
-   Setter para `peso`
    -   Rejeitar se `<= 0`
-   `toString()`

Exemplo de retorno:

    Rex - cachorro, 28kg

------------------------------------------------------------------------

# 2. Estrutura de Pastas

    petshop-digital/

    ├── src/
    │   ├── Produto.js
    │   └── Pet.js
    │
    ├── app.js
    │
    └── README.md

  Arquivo        Descrição
  -------------- -------------------------
  `Produto.js`   Classe Produto
  `Pet.js`       Classe Pet
  `app.js`       Cenário de testes
  `README.md`    Documentação do projeto

------------------------------------------------------------------------

# 3. O que testar no `app.js`

Complete o `app.js` com os seguintes passos:

### 1️⃣ Criar produtos

``` javascript
new Produto(nome, preco, quantidade)
```

Crie **2 produtos**.

### 2️⃣ Criar pets

``` javascript
new Pet(nome, especie, peso)
```

Crie **2 pets**.

### 3️⃣ Usar getters

Exiba dados individuais.

Exemplo:

``` javascript
console.log(produto.nome)
```

### 4️⃣ Testar setters

-   Altere o preço para um valor **válido**
-   Depois tente **um valor negativo**

### 5️⃣ Exibir usando `toString()`

Mostre todos os objetos formatados.

------------------------------------------------------------------------

### Executar o projeto

``` bash
node app.js
```

------------------------------------------------------------------------

# 4. Critérios de Avaliação

  Critério                   Peso   O que será observado
  -------------------------- ------ --------------------------------
  Atributos privados (`#`)   30%    Uso correto de encapsulamento
  Getters                    20%    Getter para todos os atributos
  Setters com validação      25%    Rejeita dados inválidos
  `toString()`               15%    Retorna descrição formatada
  Testes (`app.js`)          10%    Cenário completo demonstrado

------------------------------------------------------------------------

# 5. O que vem na Fase 2

Na próxima aula você irá adicionar novas classes ao projeto.

Novas classes:

-   `Cliente`
-   `Servico`
-   `PetShop`

### Cliente

Atributos:

-   nome
-   CPF
-   telefone

### Servico

Exemplos:

-   banho
-   tosa
-   consulta

### PetShop

Será a **classe principal que gerencia todo o sistema**.

------------------------------------------------------------------------

⚠️ **Importante**

Você **NÃO vai reescrever nada**.

Apenas adicionará novos arquivos dentro da pasta:

    src/

Por isso, mantenha seu código:

-   organizado
-   funcionando
-   bem estruturado

------------------------------------------------------------------------

💻 **Bom trabalho e bons estudos!**
