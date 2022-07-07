"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.criptografia = void 0;
const Criptografia_1 = __importDefault(require("./Criptografia"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const criptografia = new Criptografia_1.default(bcryptjs_1.default);
exports.criptografia = criptografia;
