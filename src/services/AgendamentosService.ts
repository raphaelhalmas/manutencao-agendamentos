import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';

import ResponseStatusException from '../errors/ResponseStatusException';

import Agendamento from '../models/Agendamento';
import AgendamentosRepository from '../repositories/AgendamentosRepository';

interface IRequest {
    prestadorServicoId: string; 
    dataAgendamento: Date;
}

class AgendamentosService {

    public async registraAgendamento({ prestadorServicoId, dataAgendamento }: IRequest): Promise<Agendamento> {
        const agendamentosRepository = getCustomRepository(AgendamentosRepository);

        const dataHora = startOfHour(dataAgendamento);
        const agendamentoJaRegistrado = await agendamentosRepository.findByData(dataHora);
    
        if (agendamentoJaRegistrado) {
            throw new ResponseStatusException('Horario ja agendado');
        }

        const agendamento = agendamentosRepository.create({ 
            prestadorServicoId,
            dataAgendamento: dataHora 
        });

        await agendamentosRepository.save(agendamento);
        
        return agendamento;
    }

}

export default AgendamentosService;