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
const controlador = {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, senha } = req.body;
            const usuarioAlvo = yield modelos_1.user.instancia.findOne({
                where: {
                    email,
                },
            });
            if (!usuarioAlvo) {
                return res.status(400).json("[!] Email não cadastrado.");
            }
            if (!bcryptjs_1.default.compareSync(senha, usuarioAlvo.senha)) {
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
            const { email } = req.body;
            const usuarioSalvo = yield modelos_1.user.instancia.findOne({
                where: {
                    email,
                },
            });
            if (!usuarioSalvo) {
                return res.status(404).json("[!] Email não encontrado");
            }
            const token = CryptoJS.AES.encrypt(`${usuarioSalvo.email}`, "LACREI").toString();
            usuarioSalvo.hashResetSenha = token;
            yield usuarioSalvo.save();
            return res.json(token);
        });
    },
    recuperarSenha(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token, senha } = req.body;
            const bytes = CryptoJS.AES.decrypt(token, "LACREI");
            const email = bytes.toString(CryptoJS.enc.Utf8);
            if (!email) {
                return res.status(400).json("token invalido");
            }
            const usuarioSalvo = yield modelos_1.user.instancia.findOne({
                where: {
                    email,
                },
            });
            if (!usuarioSalvo) {
                return res.status(404).json("Email não encontrado");
            }
            if (!usuarioSalvo.hashResetSenha || usuarioSalvo.hashResetSenha !== token) {
                return res.status(400).json("token invalido");
            }
            if (bcryptjs_1.default.compareSync(senha, usuarioSalvo.senha)) {
                return res.status(400).json("Senha ja utilizada");
            }
            const newSenha = bcryptjs_1.default.hashSync(senha, 10);
            usuarioSalvo.senha = newSenha;
            usuarioSalvo.hashResetSenha = null;
            yield usuarioSalvo.save();
            return res.sendStatus(201);
        });
    },
};
exports.default = controlador;
