import { IUsuario } from "../interfaces/IUsuario";
import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa implements IUsuario {
    private vip: boolean;
    private enderecos: Endereco[] = [];

    constructor(cpf: string, nome: string, telefone: string, vip: boolean, endereco: Endereco) {
        super(cpf, nome, telefone);
        this.vip = vip;
        this.enderecos.push(endereco);
    }

    public autenticar(): boolean {
        return true;
    }

    public getEnderecos(): Endereco[] {
        return this.enderecos;
    }

    public adicionarEndereco(endereco: Endereco): void {
        if (endereco) {
            this.enderecos.push(endereco);
        }
    }

    // sobrecarga de metodo para adicionar varios enderecos de uma vez
    public adicionarEnderecos(enderecos: Endereco[]): void {
        if (enderecos) {
            for (let endereco of enderecos) {
                this.enderecos.push(endereco);
            }
        }
    }

    public getVip(): boolean {
        return this.vip;
    }

    public listarEnderecos(): void {
        for (let endereco of this.enderecos) {
            console.log(endereco.toString());
        }
    }

    public toString(): string {
        return `--- CLIENTE ---
                CPF: ${this.getCpfFormat()}
                Nome: ${this.getNome()}
                Telefone: ${this.getTelefoneFormat()}
                VIP: ${this.vip ? "Sim" : "Não"}
                Endereço(s):\n${this.enderecos.join("")}
                `.replace(/(\n)\s+/g, '\n');  // remove identacao da string
    }
}