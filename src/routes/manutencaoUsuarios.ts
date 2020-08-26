import { Router } from 'express';

import ManutencaoUsuariosService from '../services/ManutencaoUsuariosService'

const manutencaoUsuariosRouter = Router();
const manutencaoUsuariosService = new ManutencaoUsuariosService();

manutencaoUsuariosRouter.post('/', async (request, response) => {
    const { nome, email, senha } = request.body;    

    try {
        const usuario = await manutencaoUsuariosService.registraUsuario({
            nome,
            email,
            senha
        });

        delete usuario.senha;
        
        return response.json(usuario);
    }
    catch (error) {
        return response.status(400).json({ message: error.message });
    }
});

export default manutencaoUsuariosRouter;