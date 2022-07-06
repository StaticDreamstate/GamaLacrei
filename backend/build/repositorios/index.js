"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profissionalRepositorio = void 0;
const modelos_1 = require("../modelos");
const Profissional_1 = __importDefault(require("./Profissional"));
const profissionalRepositorio = new Profissional_1.default(modelos_1.profissional);
exports.profissionalRepositorio = profissionalRepositorio;
