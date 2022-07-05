"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const bancoDeDados_1 = require("../bancoDeDados");
const usuario_1 = require("./usuario");
const user = new usuario_1.Usuario(bancoDeDados_1.conexaoMysql);
exports.user = user;
