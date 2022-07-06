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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const modelos_1 = require("../../modelos");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_js_1 = __importDefault(require("crypto-js"));
const logger_1 = __importDefault(require("../../infra/logger"));
const controlador = {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, senha } = req.body;
            const usuarioAlvo = yield modelos_1.user.instancia.findOne({
                where: {
                    email,
                },
            });
            logger_1.default.info(`[login] [*] Iniciando processo de login - corpo=${JSON.stringify(req.body)} client_ip=${req.ips}`);
            if (!usuarioAlvo) {
                logger_1.default.error(`[login] [!] Email não cadastrado - corpo=${JSON.stringify(req.body)} client_ip=${req.ips}`);
                return res.status(400).json("[!] Email não cadastrado.");
            }
            if (!bcryptjs_1.default.compareSync(senha, usuarioAlvo.senha)) {
                logger_1.default.error(`[login] [!] Senha inválida - corpo=${JSON.stringify(req.body)} client_ip=${req.ips}`);
                return res.status(401).json("[!] Senha inválida.");
            }
            const token = jsonwebtoken_1.default.sign({
                id: usuarioAlvo.id,
                email: usuarioAlvo.email,
                nome: usuarioAlvo.name,
                nivel: usuarioAlvo.nivel,
            }, "LACREI");
            return res.json(token);
        });
    },
    gerarTokenDeSenha(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.default.info(`[gerarTokenDeSenha] [*] Início de função - corpo=${JSON.stringify(req.body)} client_ip=${req.ips}`);
            const { email } = req.body;
            const usuarioSalvo = yield modelos_1.user.instancia.findOne({
                where: {
                    email,
                },
            });
            if (!usuarioSalvo) {
                logger_1.default.error(`[gerarTokenDeSenha] [!] Email não encontrado - corpo=${JSON.stringify(req.body)} client_ip=${req.ips}`);
                return res.status(404).json("[!] Email não encontrado");
            }
            const token = crypto_js_1.default.AES.encrypt(`${usuarioSalvo.email}`, "LACREI").toString();
            logger_1.default.info(`[gerarTokenDeSenha] [*] Token gerado - corpo=${JSON.stringify(req.body)} client_ip=${req.ips}`);
            usuarioSalvo.hashResetSenha = token;
            yield usuarioSalvo.save();
            logger_1.default.info(`[gerarTokenDeSenha] [*] Senha redefinida - corpo=${JSON.stringify(req.body)} client_ip=${req.ips}`);
            return res.json(token);
        });
    },
    recuperarSenha(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token, senha } = req.body;
            const bytes = crypto_js_1.default.AES.decrypt(token, "LACREI");
            const email = bytes.toString(crypto_js_1.default.enc.Utf8);
            logger_1.default.info(`[recuperarSenha] [*] Início de função - corpo=${JSON.stringify(req.body)} client_ip=${req.ips}`);
            if (!email) {
                logger_1.default.error(`[recuperarenha] [!] Token inválido - corpo=${JSON.stringify(req.body)} client_ip=${req.ips}`);
                return res.status(400).json("token invalido");
            }
            const usuarioSalvo = yield modelos_1.user.instancia.findOne({
                where: {
                    email,
                },
            });
            if (!usuarioSalvo) {
                logger_1.default.error(`[recuperarenha] [!] Email não encontrado - corpo=${JSON.stringify(req.body)} client_ip=${req.ips}`);
                return res.status(404).json("Email não encontrado");
            }
            if (!usuarioSalvo.hashResetSenha || usuarioSalvo.hashResetSenha !== token) {
                logger_1.default.error(`[recuperarenha] [!] Token inválido - corpo=${JSON.stringify(req.body)} client_ip=${req.ips}`);
                return res.status(400).json("token invalido");
            }
            if (bcryptjs_1.default.compareSync(senha, usuarioSalvo.senha)) {
                logger_1.default.error(`[recuperarenha] [!] Senha já utilizada - corpo=${JSON.stringify(req.body)} client_ip=${req.ips}`);
                return res.status(400).json("Senha ja utilizada");
            }
            const newSenha = bcryptjs_1.default.hashSync(senha, 10);
            usuarioSalvo.senha = newSenha;
            usuarioSalvo.hashResetSenha = null;
            yield usuarioSalvo.save();
            logger_1.default.info(`[recuperarSenha] [*] Senha recuperada - corpo=${JSON.stringify(req.body)} client_ip=${req.ips}`);
            return res.sendStatus(201);
        });
    },
};
exports.default = controlador;
