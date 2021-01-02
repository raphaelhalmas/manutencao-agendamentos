import { Router } from 'express';

import sessaoRoute from './auth';
import usuariosRoute from './usuarios';
import agendamentosRoute from './agendamentos';

const router = Router();

router.use('/token', sessaoRoute);
router.use('/usuarios', usuariosRoute);
router.use('/agendamentos', agendamentosRoute);

export default router;