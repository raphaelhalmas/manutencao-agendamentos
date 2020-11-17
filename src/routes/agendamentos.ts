import { getCustomRepository } from 'typeorm';

import { Router } from 'express';
import { parseISO } from 'date-fns';

import ManutencaoAgendamentosReposirory from '../repositories/ManutencaoAgendamentosRepository';
import ManutencaoAgendamentosService from '../services/ManutencaoAgendamentosService';

import autorizaRequisicao from '../middlewares/autorizaRequisicao';

const manutencaoAgendamentosRouter = Router();

// manutencaoAgendamentosRouter.use(autorizaRequisicao);

manutencaoAgendamentosRouter.post('/', async (request, response) => {
    const { prestadorServicoId, dataAgendamento } = request.body;        

    try {
        const manutencaoAgendamentosService = new ManutencaoAgendamentosService();

        const agendamento = await manutencaoAgendamentosService.registraAgendamento({ 
            prestadorServicoId,
            dataAgendamento: parseISO(dataAgendamento)
        }); 

        return response.json(agendamento);
    } 
    catch (error) {
        return response.status(400).json({ message: error.message });
    }
});

manutencaoAgendamentosRouter.get('/', async (request, response) => {
    const manutencaoAgendamentosReposirory = getCustomRepository(ManutencaoAgendamentosReposirory);
    const agendamentos = await manutencaoAgendamentosReposirory.find();
    return response.json(agendamentos);
});

export default manutencaoAgendamentosRouter;