import { Router } from 'express';

import sessaoRouter from './auth';
import usuariosRouter from './usuarios';
import agendamentosRouter from './agendamentos';

const routes = Router();

routes.use('/token', sessaoRouter);
routes.use('/usuarios', usuariosRouter);
routes.use('/agendamentos', agendamentosRouter);

export default routes;