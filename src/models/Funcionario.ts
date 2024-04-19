import { IUsuario } from "../interfaces/IUsuario";
import { Cargo } from "./Cargo";
import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa implements IUsuario {
    private salario: number;
    private cargos: Cargo[] = [];

    constructor(cpf: string, nome: string, telefone: string, salario: number, cargo: Cargo) {
        super(cpf, nome, telefone);
        this.salario = salario;
        this.cargos.push(cargo);
    }

    public autenticar(): boolean {
        return true;
    }

    public adicionarCargo(cargo: Cargo): void {
        if (cargo) {
            this.cargos.push(cargo);
        }
    }

    // sobrecarga de metodo para adicionar varios cargos de uma vez
    public adicionarCargos(cargos: Cargo[]): void {
        if (cargos) {
            for (let cargo of cargos) {
                this.cargos.push(cargo);
            }
        }
    }

    public getSalario(): number {
        return this.salario;
    }

    public toString(): string {
        return `--- FUNCIONARIO ---
                CPF: ${this.getCpfFormat()}
                Nome: ${this.getNome()}
                Telefone: ${this.getTelefoneFormat()}
                Cargo: ${this.cargos.join(", ")}
                Salário: ${this.salario}
                `.replace(/(\n)\s+/g, '\n');  // remove identacao da string
    }
}