"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repositorios_1 = require("../../../repositorios");
class ProfissionalCasoDeUso {
    constructor(ProfissionalRepositorio) {
        this.repository = repositorios_1.profissionalRepositorio;
    }
    cadastrarProfissional(payload) {
        const novoProfissional = this.repository.create(payload);
        return novoProfissional;
    }
    listarProfissional(payload) {
        const lista = this.repository.findAll(payload);
        return lista;
    }
    atualizarProfissional() {
    }
}
exports.default = ProfissionalCasoDeUso;
