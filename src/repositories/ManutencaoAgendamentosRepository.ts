import { EntityRepository, Repository } from 'typeorm';
import Agendamento from '../models/Agendamento';

@EntityRepository(Agendamento)
class ManutencaoAgendamentosRepository extends Repository<Agendamento> {

    public async findByData(dataAgendamento: Date): Promise<Agendamento | undefined> {
        const agendamento = await this.findOne({
            where: { dataAgendamento }
        });
        
        return agendamento;
    }

}

export default ManutencaoAgendamentosRepository;