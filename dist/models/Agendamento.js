"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Usuario_1 = __importDefault(require("./Usuario"));
var Agendamento = /** @class */ (function () {
    function Agendamento() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Agendamento.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: 'prestadorservico_id' }),
        __metadata("design:type", String)
    ], Agendamento.prototype, "prestadorServicoId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Usuario_1.default; }),
        typeorm_1.JoinColumn({ name: 'prestadorservico_id' }),
        __metadata("design:type", Usuario_1.default)
    ], Agendamento.prototype, "prestadorServico", void 0);
    __decorate([
        typeorm_1.Column({ name: 'dataagendamento', type: 'timestamptz' }),
        __metadata("design:type", Date)
    ], Agendamento.prototype, "dataAgendamento", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'datacriacao' }),
        __metadata("design:type", Date)
    ], Agendamento.prototype, "dataCriacao", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: 'dataatualizacao' }),
        __metadata("design:type", Date)
    ], Agendamento.prototype, "dataAtualizacao", void 0);
    Agendamento = __decorate([
        typeorm_1.Entity('agendamento')
    ], Agendamento);
    return Agendamento;
}());
exports.default = Agendamento;
