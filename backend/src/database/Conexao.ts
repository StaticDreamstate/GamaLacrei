import { Sequelize, Options } from "sequelize";

export default class Conexao {

    private instancia: Sequelize;
   
    private db_name: string;
    private db_user: string;
    private db_pass: string;
    private db_config: Options;
  

    constructor(
        nome: string,
        usuario: string,
        senha: string,
        conf: Options 
    ) {
        this.db_name = nome;
        this.db_user = usuario;
        this.db_pass = senha;
        this.db_config = conf;

        try {
            this.instancia = new Sequelize(
                this.db_name,
                this.db_user,
                this.db_pass,
                this.db_config
            );
        } catch(erro) {
            console.error("[!] Conexão Recusada.");
            throw erro;
        }
    }

    getInstance() {
        return this.instancia;
    }

    async testeConexao() {
        try {
            await this.instancia.authenticate();
            console.log("[OK] Banco de dados conectado.");
        } catch(erro) {
            console.error("[!] Falha na conexão.");
        }
    }
};