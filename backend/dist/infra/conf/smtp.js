"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("./env"));
const emailConf = {
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    user: env_1.default.MAIL_USER,
    pass: env_1.default.MAIL_PASS
};
exports.default = emailConf;
