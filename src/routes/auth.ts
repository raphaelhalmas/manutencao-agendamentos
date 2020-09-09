import { Router } from 'express';

import GerenciaSessaoService from '../services/GerenciaSessaoService'

const gerenciamentoSessaoRouter = Router();

// gerenciamentoSessaoRouter.post('/', async (request, response) => {
//     const { email, senha } = request.body;

//     try {
//         const gerenciaSessaoService = new GerenciaSessaoService();

//         const { usuario, token } = await gerenciaSessaoService.autenticaUsuario({ 
//             email, 
//             senha
//         });

//         if (usuario) {
//             delete usuario.senha;
//         }

//         return response.json({ usuario, token });
//     }
//     catch (error) {
//         return response.status(400).json({ message: error.message });
//     }
// });

export default gerenciamentoSessaoRouter;