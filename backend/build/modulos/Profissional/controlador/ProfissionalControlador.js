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
    constructor(useCase) {
        this.useCase = useCase;
    }
    criar() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const profissional = yield this.useCase.cadastrarProfissional(req.body);
                return res.status(201).json(profissional);
            }
            catch (error) {
                return res
                    .status(500)
                    .json("Algo errado aconteceu, contate o suporte!");
            }
        });
    }
    listarTodos() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const lista = yield this.useCase.listarProfissional();
                return res.json(lista);
            }
            catch (error) {
                console.log(error);
                return res
                    .status(500)
                    .json("Algo errado aconteceu, contate o suporte!");
            }
        });
    }
}
exports.default = ProfissionalControlador;
