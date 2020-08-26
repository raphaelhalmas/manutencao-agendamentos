import { Router } from 'express';

import ManutencaoUsuariosService from '../services/ManutencaoUsuariosService'

const manutencaoUsuariosRouter = Router();

manutencaoUsuariosRouter.post('/', async (request, response) => {
    const { nome, email, senha } = request.body;    

    const manutencaoUsuariosService = new ManutencaoUsuariosService();

    try {
        const usuario = await manutencaoUsuariosService.registraUsuario({
            nome,
            email,
            senha
        });
        
        return response.json(usuario);
    }
    catch (error) {
        return response.status(400).json({ message: error.message });
    }
});

export default manutencaoUsuariosRouter;