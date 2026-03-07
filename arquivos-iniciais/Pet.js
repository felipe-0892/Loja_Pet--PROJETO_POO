/**
 * ═══════════════════════════════════════════════════════════
 * Classe Pet - Um animal cadastrado no PetShop
 * ═══════════════════════════════════════════════════════════
 * 
 * O QUE FAZER:
 *   1. Declare os atributos privados com #
 *   2. Complete o constructor
 *   3. Crie os getters
 *   4. Crie o setter de 'peso' com validação
 *   5. Complete o método toString()
 * 
 * EXECUTE COM: node app.js
 */
class Pet {

  // TODO: Declarar os 3 atributos privados abaixo
  // #nome
  // #especie
  // #peso

  /**
   * Cria um novo pet
   * @param {string} nome - Nome do pet (ex: "Rex")
   * @param {string} especie - "cachorro", "gato", "ave" ou "outro"
   * @param {number} peso - Peso em kg (deve ser maior que zero)
   */
  constructor(nome, especie, peso) {
    // TODO: Atribuir os valores aos atributos privados
  }

  // ── GETTERS ──────────────────────────────────────────
  // TODO: Criar um getter para cada atributo (nome, especie, peso)


  // ── SETTERS (com validação!) ─────────────────────────
  //
  // TODO: Criar setter para 'peso'
  //   - Se o valor for <= 0, mostrar: "Erro: peso deve ser maior que zero."
  //   - Se for válido, atualizar o atributo


  // ── MÉTODOS ──────────────────────────────────────────

  /**
   * Retorna uma descrição do pet como texto
   * Formato esperado: "Rex - cachorro, 28kg"
   */
  toString() {
    // TODO: Implementar
  }
}

module.exports = Pet;
