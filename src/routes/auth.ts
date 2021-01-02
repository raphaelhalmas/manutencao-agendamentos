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

        const dadosUsuario = {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            dataCriacao: usuario.dataCriacao,
            dataAtualizacao: usuario.dataAtualizacao,
        };

        return response.json({ dadosUsuario, token });
    }
    catch (error) {
        return response.status(400).json({ message: error.message });
    }
});

export default sessaoRouter;