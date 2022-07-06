"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profissionalControlador = void 0;
const casoDeUso_ts_1 = require("../casoDeUso.ts");
const ProfissionalControlador_1 = __importDefault(require("./ProfissionalControlador"));
const profissionalControlador = new ProfissionalControlador_1.default(casoDeUso_ts_1.profissionalCasoDeUso);
exports.profissionalControlador = profissionalControlador;
