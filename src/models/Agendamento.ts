import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('agendamento')
class Agendamento {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ name: 'prestadorservico' })
    prestadorServico: string;    
    
    @Column('timestamp with time zone')
    data: Date;

}

export default Agendamento;