"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preCadastroUseCase = void 0;
const PreCadastro_1 = __importDefault(require("./PreCadastro"));
const repositories_1 = require("../../../repositories");
const preCadastroUseCase = new PreCadastro_1.default(repositories_1.preCadastroRepository);
exports.preCadastroUseCase = preCadastroUseCase;
