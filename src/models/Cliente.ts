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

    public adicionarEndereco(endereco: Endereco): void {
        if (endereco) {
            this.enderecos.push(endereco);
        }
    }

    public isVip(): boolean {
        return this.vip;
    }

    public listarEnderecos(): void {
        for (let endereco of this.enderecos) {
            console.log(endereco.toString());
        }
    }
}