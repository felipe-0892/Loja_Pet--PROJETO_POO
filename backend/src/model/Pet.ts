export default class Pet {
    #nome: string;
    #especie: string;
    #peso: number;
    #idade: number;
    #nascimento: string | null;

    constructor(nome: string, especie: string, peso: number, idade: number, nascimento: string | null = null) {
        this.#nome = nome;
        this.#especie = especie;
        this.#peso = peso;
        this.#idade = idade;
        this.#nascimento = nascimento;
    }

    // ── Getters ──────────────────────────────────────────────
    get nome(): string {
        return this.#nome;
    }

    get especie(): string {
        return this.#especie;
    }

    get peso(): number {
        return this.#peso;
    }

    get idade(): number {
        return this.#idade;
    }

    get nascimento(): string | null {
        return this.#nascimento;
    }

    // ── Setters ──────────────────────────────────────────────
    set peso(valor: number) {
        if (valor <= 0) {
            console.error('O peso deve ser maior que zero.');
            return;
        }
        this.#peso = valor;
    }

    set idade(valor: number) {
        if (valor < 0) {
            console.error('A idade deve ser um número positivo.');
            return;
        }
        this.#idade = valor;
    }

    set nascimento(valor: string | null) {
        this.#nascimento = valor;
    }

    // ── Métodos ──────────────────────────────────────────────
    toString(): string {
        const nasc = this.#nascimento ? ` - Nascimento: ${this.#nascimento}` : '';
        return `${this.#nome} - ${this.#especie} - Peso: ${this.#peso}kg - Idade: ${this.#idade} anos${nasc}`;
    }
}