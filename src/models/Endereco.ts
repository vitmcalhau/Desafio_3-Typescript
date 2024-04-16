export class Endereco {
    private cep: string;
    private logradouro: string;
    private numero: string;
    private complemento: string;
    private cidade: string;
    private uf: string;

    constructor(cep: string, logradouro: string, numero: string, complemento: string, cidade: string, uf: string) {
        this.cep = cep.replace('-', '');  // remove possivel formatacao, guarda apenas numeros
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    }

    public getCepFormat(): string {
        return this.cep.substring(0, 5) + '-' + this.cep.substring(5);
    }

    public toString(): string {
        return `--- ENDEREÇO ---
                CEP: ${this.getCepFormat()}
                Logradouro: ${this.logradouro}
                Número: ${this.numero}
                Complemento: ${this.complemento || '-'}
                Cidade: ${this.cidade}
                UF: ${this.uf}
                `.replace(/(\n)\s+/g, '\n');  // remove identacao da string
    }
}