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
exports.cadastrar = exports.listarPendentes = void 0;
const profissoes_1 = __importDefault(require("../../constants/profissoes"));
const models_1 = require("../../models/");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const listarPendentes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield models_1.cadastro.instance.findOne({
        where: { aprovado: null },
        attributes: { exclude: [
                'senha', 'aprovado', 'dadosPessoais_id', 'dadosProfissionais_id', 'consultorio_id', 'servicos_id'
            ] }
    });
    return res.status(200).json(list);
});
exports.listarPendentes = listarPendentes;
const cadastrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, profissao, registro, senha } = req.body;
    if (!profissoes_1.default.includes(profissao)) {
        return res.status(400).json({ error: "Sua profissao não é permitida" });
    }
    const achadoPorEmail = yield models_1.cadastro.instance.findOne({ where: { email: email } });
    if (achadoPorEmail) {
        return res.status(400).json({ error: "Email já cadastrado" });
    }
    const achadoPorRegistro = yield models_1.cadastro.instance.findOne({ where: { registro: registro } });
    if (achadoPorRegistro) {
        return res.status(400).json({ error: "Registro já cadastrado" });
    }
    const senhaHash = bcryptjs_1.default.hashSync(senha, 10);
    const newUser = yield models_1.cadastro.instance.create({
        nome,
        email,
        profissao,
        registro,
        senha: senhaHash
    });
    return res.status(201).json({ nome, email, profissao, registro });
});
exports.cadastrar = cadastrar;
