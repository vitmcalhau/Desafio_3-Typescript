import { Cargo } from "./models/Cargo";
import { Funcionario } from "./models/Funcionario";

const gerente = new Cargo("Gerente");
const func1 = new Funcionario("12345678900", "João da Silva", "19987654321", 5000, gerente);

const atendente = new Cargo("Atendente");
const func2 = new Funcionario("98765432100", "Bruno Pereira", "19123456789", 2500, atendente);