import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    OneToMany,
    CreateDateColumn, UpdateDateColumn } from 'typeorm';

import Agendamento from './Agendamento';

@Entity('usuario')
class Usuario {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @OneToMany(() => Agendamento, agendamento => agendamento.prestadorServico)
    agendamento: Agendamento;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @CreateDateColumn({ name: 'datacriacao'})
    dataCriacao: Date;

    @UpdateDateColumn({ name: 'dataatualizacao'})
    dataAtualizacao: Date;

}

export default Usuario;