import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { Credito } from "./Credito";
import { Debito } from "./Debito";

export class ContaCorrente extends Conta {
    private limite: number;

    constructor(numero: string, cliente:Cliente, limite: number) {
        super(numero, cliente);
        this.limite = limite;
    }

    public depositar(valor: number): void {
        this.adicionarCredito(new Credito(valor, new Date()));
    }

    public sacar(valor: number): void {
        if (valor >= this.calcularSaldo()) {  // verifica se saldo disponivel + limite permite saque
            this.adicionarDebito(new Debito(valor, new Date()))
        }
    }

    public transferir(contaDestino: Conta, valor: number): void {

    }

    public calcularSaldo(): number {
        let soma: number = this.limite;
        
        for (let credito of this.getCreditos()) {
            soma += credito.getValor();
        }
        for (let debito of this.getDebitos()) {
            soma -= debito.getValor();
        }

        return soma;
    }
}