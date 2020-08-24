import Agendamento from '../models/Agendamento';
import ManutencaoAgendamentosReposirory from '../repositories/ManutencaoAgendamentosRepository';
import { startOfHour } from 'date-fns';

class ManutencaoAgendamentosService {
    private manutencaoAgendamentosReposirory: ManutencaoAgendamentosReposirory;

    constructor(manutencaoAgendamentosReposirory: ManutencaoAgendamentosReposirory){
        this.manutencaoAgendamentosReposirory = manutencaoAgendamentosReposirory;
    }

    registraAgendamento({ prestadorServico, data }: Omit<Agendamento, 'id'>): Agendamento | null {
        const dataHora = startOfHour(data);
        const horarioJaAgendado = this.manutencaoAgendamentosReposirory.horarioJaAgendado(dataHora);
    
        if (horarioJaAgendado) {
            throw Error('Horario ja agendado');
        }
    
        const agendamento = this.manutencaoAgendamentosReposirory.create({ 
            prestadorServico,
            data: dataHora 
        });
        
        return agendamento;
    }

}

export default ManutencaoAgendamentosService;