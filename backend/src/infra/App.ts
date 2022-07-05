import Express, { Application } from "express";
import { conexaoMysql } from "../bancoDeDados";

import rotasBase from "./rotasBase";

type SetupOptions = {
    teste?: boolean;
    porta?: number;
};

export default class App {
    private instancia: Application;
    private portaPadrao: number = 4000;

    constructor() {
        this.instancia = Express();
    }

    async setup(options: SetupOptions): Promise<void> {
        const portaSelecionada = options.porta ? options.porta : this.portaPadrao;
        this.instancia.use(Express.static('public'));
        this.instancia.use(Express.json());
        this.instancia.use(rotasBase);
        
        conexaoMysql.testeConexao();
        if(options.teste) { return console.log("[OK] Teste"); }
   
        this.instancia.listen(portaSelecionada, () =>
        console.log(`[OK] Servidor conectado. [Porta TCP ${portaSelecionada}]`));

    }

    getIstance() {
        return this.instancia;
    }
};

