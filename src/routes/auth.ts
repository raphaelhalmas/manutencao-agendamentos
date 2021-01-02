import { Router } from 'express';

import SessaoService from '../services/SessaoService'

const sessaoRouter = Router();

sessaoRouter.post('/', async (request, response) => {
    const { email, senha } = request.body;

    try {
        const sessaoService = new SessaoService();

        const { usuario, token } = await sessaoService.autenticaUsuario({ 
            email, 
            senha
        });

        // if (usuario) {
        //     delete usuario.senha;
        // }

        return response.json({ usuario, token });
    }
    catch (error) {
        return response.status(400).json({ message: error.message });
    }
});

export default sessaoRouter;