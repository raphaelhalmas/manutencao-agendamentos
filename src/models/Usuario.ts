import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('usuario')
class Usuario {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
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