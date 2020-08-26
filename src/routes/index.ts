import { Router } from 'express';
import manutencaoUsuariosRouter from './manutencaoUsuarios';
import manutencaoAgendamentosRouter from './manutencaoAgendamentos';

const routes = Router();

routes.use('/manutencaoUsuarios', manutencaoUsuariosRouter);
routes.use('/manutencaoAgendamentos', manutencaoAgendamentosRouter);

export default routes;