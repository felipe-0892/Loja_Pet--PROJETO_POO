export default class Produto {
    #nome: string;
    #preco: number;
    #quantidade: number;
    #validade: string | null;

    constructor(nome: string, preco: number, quantidade: number, validade: string | null = null) {
        this.#nome = nome;
        this.#preco = preco;
        this.#quantidade = quantidade;
        this.#validade = validade;
    }

    // ── Getters ──────────────────────────────────────────────
    get nome(): string {
        return this.#nome;
    }

    get preco(): number {
        return this.#preco;
    }

    get quantidade(): number {
        return this.#quantidade;
    }

    get validade(): string | null {
        return this.#validade;
    }

    // ── Setters ──────────────────────────────────────────────
    set preco(valor: number) {
        if (valor <= 0) {
            console.error('O preço deve ser maior que zero.');
            return;
        }
        this.#preco = valor;
    }

    set quantidade(valor: number) {
        if (valor < 0) {
            console.error('A quantidade não pode ser negativa.');
            return;
        }
        this.#quantidade = valor;
    }

    set validade(valor: string | null) {
        this.#validade = valor;
    }

    // ── Métodos ──────────────────────────────────────────────
    toString(): string {
        const val = this.#validade ? ` - Validade: ${this.#validade}` : '';
        return `${this.#nome} - R$ ${this.#preco.toFixed(2)} - Quantidade no estoque: ${this.#quantidade}${val}`;
    }
}