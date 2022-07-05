"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bancoDeDados_1 = require("../bancoDeDados");
const rotasBase_1 = __importDefault(require("./rotasBase"));
class App {
    constructor() {
        this.portaPadrao = 4000;
        this.instancia = (0, express_1.default)();
    }
    setup(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const portaSelecionada = options.porta ? options.porta : this.portaPadrao;
            this.instancia.use(express_1.default.static('public'));
            this.instancia.use(express_1.default.json());
            this.instancia.use(rotasBase_1.default);
            bancoDeDados_1.conexaoMysql.testeConexao();
            if (options.teste) {
                return console.log("[OK] Teste");
            }
            this.instancia.listen(portaSelecionada, () => console.log(`[OK] Servidor conectado. [Porta TCP ${portaSelecionada}]`));
        });
    }
    getIstance() {
        return this.instancia;
    }
}
exports.default = App;
;
