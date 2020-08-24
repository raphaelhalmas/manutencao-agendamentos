import { Router } from 'express';
import { parseISO } from 'date-fns';

import ManutencaoAgendamentosReposirory from '../repositories/ManutencaoAgendamentosRepository';
import ManutencaoAgendamentosService from '../services/ManutencaoAgendamentosService';

const manutencaoAgendamentosRouter = Router();
const manutencaoAgendamentosReposirory = new ManutencaoAgendamentosReposirory();
const manutencaoAgendamentosService = new ManutencaoAgendamentosService(manutencaoAgendamentosReposirory);

manutencaoAgendamentosRouter.post('/', (request, response) => {
    const { prestadorServico, data } = request.body;    
    const dataAgendamento = parseISO(data);

    try {
        const agendamento = manutencaoAgendamentosService.registraAgendamento({ 
            prestadorServico,
            data: dataAgendamento
        }); 

        return response.json(agendamento);
    } catch (error) {
        return response.status(400).json({ message: error.message });
    }
});

manutencaoAgendamentosRouter.get('/', (request, response) => {
    const agendamentos = manutencaoAgendamentosReposirory.findAll();
    return response.json(agendamentos);
});

export default manutencaoAgendamentosRouter;