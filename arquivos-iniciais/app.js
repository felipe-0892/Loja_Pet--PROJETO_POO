/**
 * ═══════════════════════════════════════════════════════════
 *  PetShop Digital - Testes da Fase 1
 * ═══════════════════════════════════════════════════════════
 * 
 *  Complete os TODOs e execute com: node app.js
 */

const Produto = require('./src/Produto');
const Pet = require('./src/Pet');

console.log("════════════════════════════════════════");
console.log("  🐾 PetShop Digital - Fase 1");
console.log("════════════════════════════════════════\n");

// ── 1. CRIAR PRODUTOS ───────────────────────────────────
console.log("📌 1. Criando produtos...\n");

// TODO: Criar 2 produtos usando new Produto(nome, preco, quantidade)
// Exemplo:
// const racao = new Produto("Ração Premium", 89.90, 50);
// console.log(racao.toString());


// ── 2. CRIAR PETS ────────────────────────────────────────
console.log("\n📌 2. Criando pets...\n");

// TODO: Criar 2 pets usando new Pet(nome, especie, peso)
// Exemplo:
// const rex = new Pet("Rex", "cachorro", 28);
// console.log(rex.toString());


// ── 3. TESTAR GETTERS ────────────────────────────────────
console.log("\n📌 3. Testando getters...\n");

// TODO: Usar os getters para mostrar dados individuais
// Exemplo:
// console.log("Nome do produto:", racao.nome);
// console.log("Preço:", racao.preco);
// console.log("Nome do pet:", rex.nome);
// console.log("Peso do pet:", rex.peso);


// ── 4. TESTAR SETTERS ───────────────────────────────────
console.log("\n📌 4. Testando setters...\n");

// TODO: Alterar o preço de um produto (valor válido)
// Exemplo:
// racao.preco = 99.90;
// console.log("Novo preço:", racao.preco);

// TODO: Tentar colocar um preço NEGATIVO (deve mostrar erro!)
// Exemplo:
// racao.preco = -10;
// console.log("Preço após tentativa inválida:", racao.preco);

// TODO: Tentar colocar peso ZERO no pet (deve mostrar erro!)
// Exemplo:
// rex.peso = 0;
// console.log("Peso após tentativa inválida:", rex.peso);


// ── 5. EXIBIR TUDO ──────────────────────────────────────
console.log("\n📌 5. Exibindo tudo...\n");

// TODO: Mostrar todos os produtos e pets com toString()
// Exemplo:
// console.log(racao.toString());
// console.log(rex.toString());


console.log("\n════════════════════════════════════════");
console.log("  ✅ Fase 1 concluída!");
console.log("════════════════════════════════════════");
