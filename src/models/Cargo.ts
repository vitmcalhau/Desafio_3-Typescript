export class Cargo {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome.toUpperCase();
    }
    
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        if (nome) {
            this.nome = nome.toUpperCase();
        }
    }

    public toString(): string {
        return this.nome;
    }
}