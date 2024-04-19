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
        if (valor <= this.calcularSaldo()) {  // verifica se saldo disponivel + limite permite saque
            this.adicionarDebito(new Debito(valor, new Date()))
        }
        else
            throw new Error("Saldo insuficiente para realizar o saque.");
    }

    public transferir(contaDestino: Conta, valor: number): void {
        if (valor <= this.calcularSaldo() && valor > 0) {  // verifica se saldo disponivel + limite permite transferencia
            this.adicionarDebito(new Debito(valor, new Date()));
            contaDestino.adicionarCredito(new Credito(valor, new Date()));
        }
        else
            throw new Error("Saldo insuficiente para realizar a transferência.");
    }

    /**
     * Remove instancias de Credito dessa conta, ate somarem o valor de @param valor,
     * e credita valor na @param contaDestino . Trata casos especiais de quando precisar
     * usar o limite e quando os Creditos nao somam exatamente o valor.
     */
    /*
    public transferir(contaDestino: Conta, valor: number): void {
        if (valor <= this.calcularSaldo() && valor > 0) {  // verifica se saldo disponivel + limite permite transferencia
            let soma = 0;

            while (soma < valor && this.getCreditos().length > 0)
                soma += this.removerCredito(0).getValor();

            if (soma < valor)  // usou todos os creditos e nao foi suficiente, precisa usar limite da conta ainda
                this.adicionarDebito(new Debito(valor-soma, new Date()));
            else if (soma > valor)  // ultimo credito removido tinha mais que o necessario
                this.adicionarCredito(new Credito(soma - valor, new Date()));

            contaDestino.adicionarCredito(new Credito(valor, new Date()));
        }
        else
            throw new Error("Saldo insuficiente para realizar a transferência.");
    }
    */

    public setLimite(limite: number): void {
        if (limite >= 0)
            this.limite = limite;
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