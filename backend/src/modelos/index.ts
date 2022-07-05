import { conexaoMysql } from "../bancoDeDados";
import { Usuario } from "./usuario";

const user = new Usuario(conexaoMysql);
export { user };
