import { Cliente } from "./models/Cliente";
import { ContaCorrente } from "./models/ContaCorrente";
import { Endereco } from "./models/Endereco";

const endereco1 = new Endereco("12345000", "Rua Brasil", "100", "", "São Paulo", "SP");
const cliente1 = new Cliente("12345678900", "João da Silva", "19987654321", true, endereco1);
const cc1 = new ContaCorrente("1", cliente1, 0);

cc1.depositar(300);

cc1.setLimite(100);

const endereco2 = new Endereco("54321000", "Rua Portugal", "200", "Bloco 2, Apto 3", "Campinas", "SP");
const cliente2 = new Cliente("98765432100", "Bruno Pereira", "19123456789", false, endereco2);
const cc2 = new ContaCorrente("2", cliente2, 0);

cc2.depositar(100);

try {
    cc1.transferir(cc2, 1000);
} catch (erro) {
    console.log((erro as Error).message);
}