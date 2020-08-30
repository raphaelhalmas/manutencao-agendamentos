import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import autorizaRequisicao from '../middlewares/autorizaRequisicao';

import ManutencaoUsuariosService from '../services/ManutencaoUsuariosService'

const manutencaoUsuariosRouter = Router();
const manutencaoUsuariosService = new ManutencaoUsuariosService();

const upload = multer(uploadConfig);

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

manutencaoUsuariosRouter.patch('/avatar', 
    autorizaRequisicao, upload.single('avatar'), async (request, response) => {
    return response.json({ message: 'I need TP for my bunghole' });
});

export default manutencaoUsuariosRouter;