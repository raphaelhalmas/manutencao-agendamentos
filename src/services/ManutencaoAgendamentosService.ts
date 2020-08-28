import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';

import Agendamento from '../models/Agendamento';
import ManutencaoAgendamentosReposirory from '../repositories/ManutencaoAgendamentosRepository';

interface IRequest {
    prestadorServicoId: string; 
    dataAgendamento: Date;
}

class ManutencaoAgendamentosService {

    public async registraAgendamento({ prestadorServicoId, dataAgendamento }: IRequest): Promise<Agendamento> {
        const manutencaoAgendamentosReposirory = getCustomRepository(ManutencaoAgendamentosReposirory);

        const dataHora = startOfHour(dataAgendamento);
        const agendamentoJaRegistrado = await manutencaoAgendamentosReposirory.findByData(dataHora);
    
        if (agendamentoJaRegistrado) {
            throw Error('Horario ja agendado');
        }

        const agendamento = manutencaoAgendamentosReposirory.create({ 
            prestadorServicoId,
            dataAgendamento: dataHora 
        });

        await manutencaoAgendamentosReposirory.save(agendamento);
        
        return agendamento;
    }

}

export default ManutencaoAgendamentosService;