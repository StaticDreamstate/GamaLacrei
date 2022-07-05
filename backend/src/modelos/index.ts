import { conexaoMysql } from "../bancoDeDados";
import { Profissional } from "./Profissional";
import { Consultorio } from "./Consultorio";
import { Servico } from "./Servico";
import { Endereco } from "./Endereco";
import { Usuario } from "./usuario";

const profissional = new Profissional(conexaoMysql);
const consultorio = new Consultorio(conexaoMysql);
const servico = new Servico(conexaoMysql);
const endereco = new Endereco(conexaoMysql);
const user = new Usuario(conexaoMysql);

export { profissional, consultorio, servico, endereco, user };
