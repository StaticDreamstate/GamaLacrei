"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = __importDefault(require("./controlador"));
const rotaCadastro = (0, express_1.Router)();
rotaCadastro.post("/pre-cadastro", controlador_1.default.preCadastro);
exports.default = rotaCadastro;
