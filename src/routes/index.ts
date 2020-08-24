import { Router } from 'express';
import manutencaoAgendamentosRouter from './manutencaoAgendamentos';

const routes = Router();

routes.use('/manutencaoAgendamentos', manutencaoAgendamentosRouter);

export default routes;