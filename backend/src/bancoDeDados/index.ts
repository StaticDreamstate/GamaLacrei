import Conexao from "./Conexao";
import ambiente from "../infra/configuracoes/ambiente"

const conexaoMysql = new Conexao(ambiente.NOME_BD, ambiente.USUARIO_BD, ambiente.SENHA_BD, {
    dialect: "mysql",
    port: ambiente.PORTA_BD,
    host: ambiente.HOST_BD
});

export { conexaoMysql };