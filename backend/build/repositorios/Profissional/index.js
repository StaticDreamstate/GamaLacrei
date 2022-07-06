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
class ProfissionalRepository {
    constructor(profissionalModelo) {
        this.profissionalModelo = profissionalModelo.nomeModelo;
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.profissionalModelo.create(payload);
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    findAll(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = {};
            if (payload.ativo) {
                Object.assign(filter, {
                    where: {
                        ativo: true,
                    },
                });
            }
            return this.profissionalModelo.findAll(filter);
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.default = ProfissionalRepository;
