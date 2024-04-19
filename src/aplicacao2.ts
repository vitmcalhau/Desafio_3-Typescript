import { Cliente } from "./models/Cliente";
import { Endereco } from "./models/Endereco";

const endereco1 = new Endereco("12345000", "Rua Brasil", "100", "", "São Paulo", "SP");
const endereco2 = new Endereco("54321000", "Rua Portugal", "200", "Bloco 2, Apto 3", "Campinas", "SP");
const endereco3 = new Endereco("99999000", "Rua Seixas", "50", "", "Bonito", "MS");

const cliente = new Cliente("12345678900", "João da Silva", "19987654321", true, endereco1);
cliente.adicionarEnderecos([endereco2, endereco3]);

for (let endereco of cliente.getEnderecos()) {
    console.log(endereco.toString());
}