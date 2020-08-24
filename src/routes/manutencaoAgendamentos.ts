import { getCustomRepository } from 'typeorm';

import { Router } from 'express';
import { parseISO } from 'date-fns';

import ManutencaoAgendamentosReposirory from '../repositories/ManutencaoAgendamentosRepository';
import ManutencaoAgendamentosService from '../services/ManutencaoAgendamentosService';

const manutencaoAgendamentosRouter = Router();
const manutencaoAgendamentosService = new ManutencaoAgendamentosService();

manutencaoAgendamentosRouter.post('/', async (request, response) => {
    const { prestadorServico, data } = request.body;    
    const dataAgendamento = parseISO(data);

    try {
        const agendamento = await manutencaoAgendamentosService.registraAgendamento({ 
            prestadorServico,
            data: dataAgendamento
        }); 

        return response.json(agendamento);
    } catch (error) {
        return response.status(400).json({ message: error.message });
    }
});

manutencaoAgendamentosRouter.get('/', async (request, response) => {
    const manutencaoAgendamentosReposirory = getCustomRepository(ManutencaoAgendamentosReposirory);
    const agendamentos = await manutencaoAgendamentosReposirory.find();
    return response.json(agendamentos);
});

export default manutencaoAgendamentosRouter;