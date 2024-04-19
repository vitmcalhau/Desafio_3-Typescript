export abstract class Pessoa {
    private cpf: string;
    private nome: string;
    private telefone: string;

    constructor(cpf: string, nome: string, telefone: string) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
    }

    public getCpf(): string {
        return this.cpf;
    }
    
    public getCpfFormat(): string {
        return this.cpf.substring(0, 3) + '.' + this.cpf.substring(3, 6) + '.' +
                this.cpf.substring(6, 9) + '-' + this.cpf.substring(9);
    }

    public getNome(): string {
        return this.nome;
    }

    public getTelefone(): string {
        return this.telefone;
    }

    public getTelefoneFormat(): string {
        return '(' + this.telefone.substring(0, 2) + ') ' + this.telefone.substring(2, 7) +
                '-' + this.telefone.substring(7)
    }
}