"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const env = {
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: Number(process.env.DB_PORT),
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS
};
exports.default = env;
