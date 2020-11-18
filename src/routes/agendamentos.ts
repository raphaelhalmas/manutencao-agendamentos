import { getCustomRepository } from 'typeorm';

import { Router } from 'express';
import { parseISO } from 'date-fns';

import AgendamentosReposirory from '../repositories/AgendamentosRepository';
import AgendamentosService from '../services/AgendamentosService';

import autorizaRequisicao from '../middlewares/autorizaRequisicao';

const agendamentosRouter = Router();

// agendamentosRouter.use(autorizaRequisicao);

agendamentosRouter.post('/', async (request, response) => {
    const { prestadorServicoId, dataAgendamento } = request.body;        

    try {
        const agendamentosService = new AgendamentosService();

        const agendamento = await agendamentosService.registraAgendamento({ 
            prestadorServicoId,
            dataAgendamento: parseISO(dataAgendamento)
        }); 

        return response.json(agendamento);
    } 
    catch (error) {
        return response.status(400).json({ message: error.message });
    }
});

agendamentosRouter.get('/', async (request, response) => {
    const agendamentosReposirory = getCustomRepository(AgendamentosReposirory);
    const agendamentos = await agendamentosReposirory.find();
    return response.json(agendamentos);
});

export default agendamentosRouter;