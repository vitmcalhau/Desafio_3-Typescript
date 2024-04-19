import { Cliente } from "./models/Cliente";
import { ContaCorrente } from "./models/ContaCorrente";
import { Endereco } from "./models/Endereco";

const endereco1 = new Endereco("12345000", "Rua Brasil", "100", "", "São Paulo", "SP");
const cliente = new Cliente("12345678900", "João da Silva", "19987654321", true, endereco1);
const cc = new ContaCorrente("1", cliente, 0);

cc.depositar(100);
cc.depositar(100);
cc.depositar(100);
cc.sacar(50);

console.log(cc.calcularSaldo());