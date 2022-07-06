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
const logger_1 = __importDefault(require("../../infra/logger"));
const controlador = {
    cadastro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashSenha = bcryptjs_1.default.hashSync(req.body.senha, 10);
            const novoUsuario = yield modelos_1.user.instancia.create(Object.assign(Object.assign({}, req.body), { senha: hashSenha }));
            logger_1.default.info(`[cadastro] [*] Novo usuário cadastrado - corpo=${JSON.stringify(req.body)} client_ip=${req.ips}`);
            return res.json(novoUsuario);
        });
    }
};
exports.default = controlador;
