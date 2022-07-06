"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const criptografia_1 = require("../../../adaptadores/criptografia");
class ProfissionalCasoDeUso {
    constructor(ProfissionalRepositorio) {
        this.repository = ProfissionalRepositorio;
    }
    cadastrarProfissional(payload) {
        const novaSenha = criptografia_1.criptografia.hash(payload.senha);
        const novoProfissional = this.repository.criar(payload);
        return novoProfissional;
    }
    listarProfissional() {
        const lista = this.repository.listarTodos();
        return lista;
    }
    atualizarProfissional() {
    }
}
exports.default = ProfissionalCasoDeUso;
