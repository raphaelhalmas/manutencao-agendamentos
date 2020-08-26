import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn, 
    CreateDateColumn, 
    UpdateDateColumn } from 'typeorm';

import Usuario from './Usuario';

@Entity('agendamento')
class Agendamento {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ name: 'prestadorservico_id' })
    prestadorServicoId: string;    
    
    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'prestadorservico_id' })
    prestadorServico: Usuario;

    @Column({ name: 'dataagendamento', type: 'timestamptz' })
    dataAgendamento: Date;

    @CreateDateColumn({ name: 'datacriacao'})
    dataCriacao: Date;

    @UpdateDateColumn({ name: 'dataatualizacao'})
    dataAtualizacao: Date;

}

export default Agendamento;