import { isEqual } from 'date-fns';
import Agendamento from '../models/Agendamento';

interface AgendamentoDTO {
    prestadorServico: string;
    data: Date;
}

class ManutencaoAgendamentosRepository {
    private agendamentos: Agendamento[];

    constructor(){
        this.agendamentos = [];
    }

    public horarioJaAgendado(data: Date): Agendamento | null {
        const horarioJaAgendado = this.agendamentos.find(agendamento => 
            isEqual(data, agendamento.data)
        );
    
        return horarioJaAgendado || null;
    }

    public create({ prestadorServico, data }: AgendamentoDTO): Agendamento {
        const agendamento = new Agendamento({ prestadorServico, data });
        this.agendamentos.push(agendamento);
        return agendamento;
    }

    public findAll(): Agendamento[] {
        return this.agendamentos;
    }
}

export default ManutencaoAgendamentosRepository;