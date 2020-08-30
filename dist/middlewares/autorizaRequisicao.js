"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
function autorizaRequisicao(request, response, next) {
    var autorizacao = request.headers.authorization;
    if (!autorizacao) {
        throw new Error('O token JWT nao foi enviado');
    }
    var _a = autorizacao.split(' '), token = _a[1];
    try {
        var decodedToken = jsonwebtoken_1.verify(token, 'bb757a278f392d128cf1157019d3d936');
        var sub = decodedToken.sub;
        request.user = {
            id: sub,
        };
        return next();
    }
    catch (error) {
        throw new Error('Token JWT invalido');
    }
}
exports.default = autorizaRequisicao;
