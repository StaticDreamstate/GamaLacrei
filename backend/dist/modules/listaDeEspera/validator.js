"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
exports.default = (0, express_validation_1.validate)({
    body: express_validation_1.Joi.object({
        email: express_validation_1.Joi.string().email().required(),
        profissao: express_validation_1.Joi.string().required(),
    }),
});
