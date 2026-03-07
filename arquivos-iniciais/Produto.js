/**
 * ═══════════════════════════════════════════════════════════
 * Classe Produto - Um item à venda no PetShop
 * ═══════════════════════════════════════════════════════════
 * 
 * O QUE FAZER:
 *   1. Declare os atributos privados com #
 *   2. Complete o constructor
 *   3. Crie os getters
 *   4. Crie os setters COM validação
 *   5. Complete o método toString()
 * 
 * EXECUTE COM: node app.js
 */
class Produto {

  // TODO: Declarar os 3 atributos privados abaixo
  // #nome
  // #preco
  // #quantidade

  /**
   * Cria um novo produto
   * @param {string} nome - Nome do produto (ex: "Ração Premium")
   * @param {number} preco - Preço (deve ser maior que zero)
   * @param {number} quantidade - Estoque (deve ser >= 0)
   */
  constructor(nome, preco, quantidade) {
    // TODO: Atribuir os valores aos atributos privados
    // DICA: use this.#nome = nome (e assim por diante)
  }

  // ── GETTERS ──────────────────────────────────────────
  // TODO: Criar um getter para cada atributo
  //
  // Exemplo de getter:
  //   get nome() {
  //     return this.#nome;
  //   }


  // ── SETTERS (com validação!) ─────────────────────────
  //
  // TODO: Criar setter para 'preco'
  //   - Se o valor for <= 0, mostrar: "Erro: preco deve ser maior que zero."
  //   - Se for válido, atualizar o atributo
  //
  // Exemplo:
  //   set preco(novoPreco) {
  //     if (novoPreco <= 0) {
  //       console.log("Erro: preco deve ser maior que zero.");
  //       return;
  //     }
  //     this.#preco = novoPreco;
  //   }

  // TODO: Criar setter para 'quantidade'
  //   - Não aceitar valores negativos (< 0)


  // ── MÉTODOS ──────────────────────────────────────────

  /**
   * Retorna uma descrição do produto como texto
   * Formato esperado: "Ração Premium - R$ 89.90 (Estoque: 50)"
   */
  toString() {
    // TODO: Implementar
    // DICA: use this.#preco.toFixed(2) para formatar o preço
  }
}

module.exports = Produto;
