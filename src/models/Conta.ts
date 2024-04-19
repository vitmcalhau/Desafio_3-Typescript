import { Cliente } from "./Cliente";
import { Credito } from "./Credito";
import { Debito } from "./Debito";

export abstract class Conta {
    private numero: string;
    private cliente: Cliente;
    private creditos: Credito[];
    private debitos: Debito[];

    constructor(numero: string, cliente: Cliente) {
        this.numero = numero;
        this.cliente = cliente;
        this.creditos = [];
        this.debitos = [];
        cliente.adicionarConta(this);
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
    
    /**
     * Adiciona a instancia de Credito @param credito no vetor de Creditos, mantendo
     * a ordem ascendente de valor.
     */
    public adicionarCredito(credito: Credito): void {
        let i: number = 0;
        while (this.creditos[i]?.getValor() < credito.getValor())  // procura posicao para manter a ordem
            i++;

        this.creditos.splice(i, 0, credito);  // insere na posicao correta
    }

    /**
     * Remove e retorna a instancia de Credito na posicao @param indice do vetor
     */
    /*
    private removerCredito(indice: number): Credito {
        return this.creditos.splice(indice, 1)[0];
    }
    */

    public getDebitos(): Debito[] {
        return this.debitos;
    }

    /**
     * Adiciona a instancia de Debito @param debito no vetor de Debitos, mantendo
     * a ordem ascendente de valor.
     */
    public adicionarDebito(debito: Debito): void {
        let i: number = 0;
        while (this.debitos[i]?.getValor() < debito.getValor())  // procura posicao para manter a ordem
            i++;

        this.debitos.splice(i, 0, debito);  // insere na posicao correta
    }

    public abstract depositar(valor: number): void;

    public abstract sacar(valor: number): void;
}