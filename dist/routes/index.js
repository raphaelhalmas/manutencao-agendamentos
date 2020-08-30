"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var gerenciamentoSessao_1 = __importDefault(require("./gerenciamentoSessao"));
var manutencaoUsuarios_1 = __importDefault(require("./manutencaoUsuarios"));
var manutencaoAgendamentos_1 = __importDefault(require("./manutencaoAgendamentos"));
var routes = express_1.Router();
routes.use('/gerenciamentoSessao', gerenciamentoSessao_1.default);
routes.use('/manutencaoUsuarios', manutencaoUsuarios_1.default);
routes.use('/manutencaoAgendamentos', manutencaoAgendamentos_1.default);
exports.default = routes;
