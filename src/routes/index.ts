import { Router } from 'express';

import gerenciamentoSessaoRouter from './auth';
import usuariosRouter from './usuarios';
import agendamentosRouter from './agendamentos';

const routes = Router();

routes.use('/token', gerenciamentoSessaoRouter);
routes.use('/usuarios', usuariosRouter);
routes.use('/agendamentos', agendamentosRouter);

export default routes;