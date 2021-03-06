import { getRepository, useContainer } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import config from 'config';

import ResponseStatusException from '../errors/ResponseStatusException';

import Usuario from '../models/Usuario';

interface IRequest {
    email: string;
    senha: string;
}

interface IResponse {
    usuario: Usuario;
    token: string;
}

class SessaoService {

    public async autenticaUsuario({ email, senha }: IRequest): Promise<IResponse> {
        const usuariosReposirory = getRepository(Usuario);

        const usuario = await usuariosReposirory.findOne({
            where: { email }
        });
    
        if (!usuario) {
            throw new ResponseStatusException('Usuario e/ou senha invalidos', 401);
        }
    
        const senhaValida = await compare(senha, usuario.senha);
        
        if (!senhaValida) {
            throw new ResponseStatusException('Usuario e/ou senha invalidos', 401);
        }

        const token = sign({}, config.get('App.auth.key'), { 
            subject: usuario.id,
            expiresIn: '1d'
        });        

        return {
            usuario,
            token
        };
    }

}

export default SessaoService;