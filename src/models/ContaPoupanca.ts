import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { Credito } from "./Credito";
import { Debito } from "./Debito";

export class ContaPoupanca extends Conta {
    
    constructor(numero: string, cliente:Cliente) {
        super(numero, cliente);
    }

    public depositar(valor: number): void {
        this.adicionarCredito(new Credito(valor, new Date()));
    }

    public sacar(valor: number): void {
        if (valor >= this.calcularSaldo()) {  // verifica se saldo disponivel permite saque
            this.adicionarDebito(new Debito(valor, new Date()))
        }
    }

    public calcularSaldo(): number {
        let soma: number = 0;

        for (let credito of this.getCreditos()) {
            soma += credito.getValor();
        }
        for (let debito of this.getDebitos()) {
            soma -= debito.getValor();
        }

        return soma;
    }
}