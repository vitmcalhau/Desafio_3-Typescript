import { Cliente } from "./Cliente";
import { Credito } from "./Credito";
import { Debito } from "./Debito";

export abstract class Conta {
    private readonly numero: string;
    private readonly cliente: Cliente;
    private creditos: Credito[];
    private debitos: Debito[];

    constructor(numero: string, cliente: Cliente) {
        this.numero = numero;
        this.cliente = cliente;
        this.creditos = [];
        this.debitos = [];
    }

    public getNumero(): string {
        return this.numero;
    }

    public getCliente(): Cliente {
        return this.cliente;
    }

    public getCreditos(): Credito[] {
        return this.creditos;
    }

    public adicionarCredito(credito: Credito): void {
        this.creditos.push(credito);
    }

    public getDebitos(): Debito[] {
        return this.debitos;
    }

    public adicionarDebito(debito: Debito): void {
        this.debitos.push(debito);
    }

    public abstract depositar(valor: number): void;

    public abstract sacar(valor: number): void;
}