"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./infra/App"));
// import enviar from "./mail/";
const application = new App_1.default();
// application.setup({ porta: 4000, teste: true });
application.setup({ porta: 4000 });
// enviar();
