"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profissionalCasoDeUso = void 0;
const repositorios_1 = require("../../../repositorios");
const ProfissionalCasoDeUso_1 = __importDefault(require("./ProfissionalCasoDeUso"));
const profissionalCasoDeUso = new ProfissionalCasoDeUso_1.default(repositorios_1.profissionalRepositorio);
exports.profissionalCasoDeUso = profissionalCasoDeUso;
