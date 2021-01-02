import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import ResponseStatusException from '../errors/ResponseStatusException';

import Usuario from '../models/Usuario';

interface IRequest {
    nome: string;
    email: string;
    senha: string;
}

class UsuariosService {

    public async registraUsuario({ nome, email, senha }: IRequest): Promise<Usuario> {
        const usuariosRepository = getRepository(Usuario);

        const usuarioJaCadastrado = await usuariosRepository.findOne({
            where: { email }
        });
    
        if (usuarioJaCadastrado) {
            throw new ResponseStatusException('Email ja utilizado');
        }
    
        const senhaCriptografada = await hash(senha, 8);

        const usuario = usuariosRepository.create({ 
            nome,
            email,
            senha: senhaCriptografada 
        });

        await usuariosRepository.save(usuario);
        
        return usuario;
    }

}

export default UsuariosService;