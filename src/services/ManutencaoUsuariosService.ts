import { getRepository } from 'typeorm';
import Usuario from '../models/Usuario';

interface Request {
    nome: string;
    email: string;
    senha: string;
}

class ManutencaoUsuariosService {

    public async registraUsuario({ nome, email, senha }: Request): Promise<Usuario> {
        const manutencaoUsuariosReposirory = getRepository(Usuario);

        const usuarioJaCadastrado = await manutencaoUsuariosReposirory.findOne({
            where: { email }
        });
    
        if (usuarioJaCadastrado) {
            throw new Error('Email ja utilizado');
        }
    
        const usuario = manutencaoUsuariosReposirory.create({ 
            nome,
            email,
            senha 
        });

        await manutencaoUsuariosReposirory.save(usuario);
        
        return usuario;
    }

}

export default ManutencaoUsuariosService;