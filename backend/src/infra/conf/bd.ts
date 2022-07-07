import ambiente from "./ambiente";

const bd = {
  username: ambiente.USUARIO_BD,
  password: ambiente.SENHA_BD,
  database: ambiente.NOME_BD,
  host: ambiente.HOST_BD,
  dialect: "mysql",
};

console.log(bd);

module.exports = bd;