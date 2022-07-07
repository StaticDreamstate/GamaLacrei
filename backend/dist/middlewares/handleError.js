"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
const handleError = (error, req, res, next) => {
    if (error instanceof express_validation_1.ValidationError) {
        return res.status(error.statusCode).json(error.details);
    }
    return res.status(error.status || 500).json(error);
};
exports.default = handleError;
