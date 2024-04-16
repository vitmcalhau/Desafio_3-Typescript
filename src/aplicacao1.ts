import { Endereco } from "./models/Endereco";
import { Funcionario } from "./models/Funcionario";
import { Cliente } from "./models/Cliente";

const endereco1 = new Endereco("12345000", "Rua Brasil", "100", "", "São Paulo", "SP");
const endereco2 = new Endereco("54321000", "Rua Portugal", "2", "", "Bonito", "MS");
// console.log(endereco.toString());

// const func = new Funcionario("12345678900", "João", "19987654321", 1);
// console.log(func.getSalario())

const cliente = new Cliente("12345678900", "João", "19987654321", true, endereco1);
cliente.listarEnderecos();

cliente.adicionarEndereco(endereco2);
cliente.listarEnderecos();
