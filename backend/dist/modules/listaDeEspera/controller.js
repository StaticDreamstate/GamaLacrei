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
exports.cadastrar = void 0;
const profissoes_1 = __importDefault(require("../../constants/profissoes"));
const models_1 = require("../../models");
const cadastrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, profissao } = req.body;
    if (!profissoes_1.default.includes(profissao)) {
        return res.status(400).json({ error: "Sua profissao não é permitida" });
    }
    const novoCadastro = new models_1.listaEspera.instance({
        email: email,
        profissao: profissao
    });
    novoCadastro.save();
    return res.status(200).json(novoCadastro);
});
exports.cadastrar = cadastrar;
