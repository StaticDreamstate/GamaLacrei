"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
exports.default = (0, express_validation_1.validate)({
    body: express_validation_1.Joi.object({
        nome: express_validation_1.Joi.string().required(),
        email: express_validation_1.Joi.string().email().required(),
        profissao: express_validation_1.Joi.string().required(),
        registro: express_validation_1.Joi.string().required(),
        senha: express_validation_1.Joi.string().min(8).regex(/^[a-zA-Z0-9]/).required()
    }),
});
