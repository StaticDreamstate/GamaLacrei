"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Criptografia {
    constructor(lib) {
        this.lib = lib;
    }
    hash(payload) {
        return this.lib.hash(payload, 10);
    }
}
exports.default = Criptografia;
