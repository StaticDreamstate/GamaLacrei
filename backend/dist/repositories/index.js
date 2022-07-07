"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preCadastroRepository = void 0;
const pre_cadastro_1 = __importDefault(require("./pre-cadastro"));
const models_1 = require("../models");
const preCadastroRepository = new pre_cadastro_1.default(models_1.cadastro);
exports.preCadastroRepository = preCadastroRepository;
