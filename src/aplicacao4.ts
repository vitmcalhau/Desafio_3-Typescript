import { Cliente } from "./models/Cliente";
import { ContaCorrente } from "./models/ContaCorrente";
import { ContaPoupanca } from "./models/ContaPoupanca";
import { Endereco } from "./models/Endereco";

const endereco1 = new Endereco("12345000", "Rua Brasil", "100", "", "São Paulo", "SP");
const cliente1 = new Cliente("12345678900", "João da Silva", "19987654321", true, endereco1);
const cc = new ContaCorrente("1", cliente1, 0);

cc.depositar(1000);

const endereco2 = new Endereco("54321000", "Rua Portugal", "200", "Bloco 2, Apto 3", "Campinas", "SP");
const cliente2 = new Cliente("98765432100", "Bruno Pereira", "19123456789", false, endereco2);
const cp = new ContaPoupanca("2", cliente2);

cp.depositar(1000);

cc.transferir(cp, 500);

console.log("Conta Corrente: " + cc.calcularSaldo());
console.log("Conta Poupança: " + cp.calcularSaldo());