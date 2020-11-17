import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

// import autorizaRequisicao from '../middlewares/autorizaRequisicao';

import UsuariosService from '../services/UsuariosService'

const usuariosRouter = Router();

const upload = multer(uploadConfig);

usuariosRouter.post('/', async (request, response) => {
    const { nome, email, senha } = request.body;    

    try {
        const usuariosService = new UsuariosService();

        const usuario = await usuariosService.registraUsuario({
            nome,
            email,
            senha
        });

        // delete usuario.senha;
        
        return response.json(usuario);
    }
    catch (error) {
        return response.status(400).json({ message: error.message });
    }
});

// usuariosRouter.patch('/avatar', 
//     autorizaRequisicao, upload.single('avatar'), async (request, response) => {
//     return response.json({ message: 'I need TP for my bunghole' });
// });

export default usuariosRouter;