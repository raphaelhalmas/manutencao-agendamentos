import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import Usuario from '../models/Usuario';

interface Request {
    email: string;
    senha: string;
}

class GerenciaSessaoService {

    public async autenticaUsuario({ email, senha }: Request): Promise<Usuario | null> {
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

        return usuario;
    }

}

export default GerenciaSessaoService;