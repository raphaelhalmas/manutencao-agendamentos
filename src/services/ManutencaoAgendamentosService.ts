import { getCustomRepository } from 'typeorm';
import Agendamento from '../models/Agendamento';
import ManutencaoAgendamentosReposirory from '../repositories/ManutencaoAgendamentosRepository';
import { startOfHour } from 'date-fns';

class ManutencaoAgendamentosService {

    public async registraAgendamento({ prestadorServico, data }: Omit<Agendamento, 'id'>): Promise<Agendamento | null> {
        const manutencaoAgendamentosReposirory = getCustomRepository(ManutencaoAgendamentosReposirory);

        const dataHora = startOfHour(data);
        const agendamentoJaRegistrado = await manutencaoAgendamentosReposirory.findByData(dataHora);
    
        if (agendamentoJaRegistrado) {
            throw Error('Horario ja agendado');
        }
    
        const agendamento = manutencaoAgendamentosReposirory.create({ 
            prestadorServico,
            data: dataHora 
        });

        await manutencaoAgendamentosReposirory.save(agendamento);
        
        return agendamento;
    }

}

export default ManutencaoAgendamentosService;