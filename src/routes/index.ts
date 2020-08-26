import { Router } from 'express';

import gerenciamentoSessaoRouter from './gerenciamentoSessao';
import manutencaoUsuariosRouter from './manutencaoUsuarios';
import manutencaoAgendamentosRouter from './manutencaoAgendamentos';

const routes = Router();

routes.use('/gerenciamentoSessao', gerenciamentoSessaoRouter);
routes.use('/manutencaoUsuarios', manutencaoUsuariosRouter);
routes.use('/manutencaoAgendamentos', manutencaoAgendamentosRouter);

export default routes;