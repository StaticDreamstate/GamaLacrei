"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ambiente_1 = __importDefault(require("./ambiente"));
const emailConf = {
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    user: ambiente_1.default.USUARIO_EMAIL,
    pass: ambiente_1.default.SENHA_EMAIL
};
exports.default = emailConf;
