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
const nodemailer_1 = __importDefault(require("nodemailer"));
const smtp_1 = __importDefault(require("../infra/configuracoes/smtp"));
const transport = nodemailer_1.default.createTransport({
    host: smtp_1.default.host,
    port: smtp_1.default.port,
    secure: smtp_1.default.secure,
    auth: {
        user: smtp_1.default.user,
        pass: smtp_1.default.pass
    },
    tls: {
        rejectUnauthorized: false,
    }
});
function enviar() {
    return __awaiter(this, void 0, void 0, function* () {
        const emailEnviado = yield transport.sendMail({
            subject: "Teste de disparo de e-mail da api",
            text: "Só trabalho sem diversão faz de Yuri um puta loucão.",
            from: `Seu nome aqui <${smtp_1.default.user}>`,
            to: ['destinatario@email.com'] // Esse array pode ser usado para múltiplos destinatários.
        });
    });
}
exports.default = enviar;
