import { getCustomRepository } from 'typeorm';
import Agendamento from '../models/Agendamento';
import ManutencaoAgendamentosReposirory from '../repositories/ManutencaoAgendamentosRepository';
import { startOfHour } from 'date-fns';

interface Request {
    prestadorServicoId: string; 
    dataAgendamento: Date;
}

class ManutencaoAgendamentosService {

    public async registraAgendamento({ prestadorServicoId, dataAgendamento }: Request): Promise<Agendamento | null> {
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