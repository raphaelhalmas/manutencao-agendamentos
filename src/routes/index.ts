import { Router } from 'express';

import gerenciamentoSessaoRouter from './auth';
import manutencaoUsuariosRouter from './usuarios';
import manutencaoAgendamentosRouter from './agendamentos';

const routes = Router();

routes.use('/token', gerenciamentoSessaoRouter);
routes.use('/usuarios', manutencaoUsuariosRouter);
routes.use('/agendamentos', manutencaoAgendamentosRouter);

export default routes;