import { getRepository, useContainer } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import autenticacaoProperties from '../config/autenticacaoProperties';

import Usuario from '../models/Usuario';

interface Request {
    email: string;
    senha: string;
}

interface Response {    
    usuario: Usuario;
    token: string;
}

class GerenciaSessaoService {

    public async autenticaUsuario({ email, senha }: Request): Promise<Response> {
        const manutencaoUsuariosReposirory = getRepository(Usuario);

        const usuario = await manutencaoUsuariosReposirory.findOne({
            where: { email }
        });
    
        if (!usuario) {
            throw new Error('Usuario e/ou senha invalidos');
        }
    
        const senhaValida = await compare(senha, usuario.senha);
        
        if (!senhaValida) {
            throw new Error('Usuario e/ou senha invalidos');
        }

        const { secretOrPrivateKey, expiresIn } = autenticacaoProperties.tokenJWT;

        const token = sign({}, secretOrPrivateKey, { 
            subject: usuario.id,
            expiresIn
        });

        return { 
            usuario,
            token
         };
    }

}

export default GerenciaSessaoService;