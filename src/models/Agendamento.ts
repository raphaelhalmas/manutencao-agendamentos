import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('agendamento')
class Agendamento {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ name: 'prestadorservico' })
    prestadorServico: string;    
    
    @Column('timestamp with time zone')
    data: Date;

    @CreateDateColumn({ name: 'datacriacao'})
    dataCriacao: Date;

    @UpdateDateColumn({ name: 'dataatualizacao'})
    dataAtualizacao: Date;    

}

export default Agendamento;