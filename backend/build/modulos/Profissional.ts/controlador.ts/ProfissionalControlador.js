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
Object.defineProperty(exports, "__esModule", { value: true });
class ProfissionalControlador {
    constructor(casoDeUso) {
        this.useCase = casoDeUso;
    }
    create() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                //recebemos a requisição
                const profissional = yield this.useCase.cadastrarProfissional(req.body);
                //devolvemos uma resposta
                return res.status(201).json(profissional);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json("Algo errado aconteceu, contate o suporte!");
            }
        });
    }
    listar() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const lista = yield this.useCase.listarProfissional({
                    ativo: !!req.query.ativo,
                });
                return res.json(lista);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json("Algo errado aconteceu, chame o batman!");
            }
        });
    }
}
exports.default = ProfissionalControlador;
