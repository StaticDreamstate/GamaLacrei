import { conexaoMysql } from "../bancoDeDados";
import { Profissional } from "./Profissional";
import { Consultorio } from "./Consultorio";
import { Servico } from "./Servico";
import { Endereco } from "./Endereco";

const profissional = new Profissional(conexaoMysql);
const consultorio = new Consultorio(conexaoMysql);
const servico = new Servico(conexaoMysql);
const endereco = new Endereco(conexaoMysql);

export { profissional, consultorio, servico, endereco };
