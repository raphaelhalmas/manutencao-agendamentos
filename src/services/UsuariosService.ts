import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import Usuario from '../models/Usuario';

interface IRequest {
    nome: string;
    email: string;
    senha: string;
}

class UsuariosService {

    public async registraUsuario({ nome, email, senha }: IRequest): Promise<Usuario> {
        const usuariosReposirory = getRepository(Usuario);

        const usuarioJaCadastrado = await usuariosReposirory.findOne({
            where: { email }
        });
    
        if (usuarioJaCadastrado) {
            throw new Error('Email ja utilizado');
        }
    
        const senhaCriptografada = await hash(senha, 8);

        const usuario = usuariosReposirory.create({ 
            nome,
            email,
            senha: senhaCriptografada 
        });

        await usuariosReposirory.save(usuario);
        
        return usuario;
    }

}

export default UsuariosService;