import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Usuario from '../models/Usuario';

interface Request {
    nome: string;
    email: string;
    senha: string;
}

class ManutencaoUsuariosService {

    public async registraUsuario({ nome, email, senha }: Request): Promise<Usuario | null> {
        const manutencaoUsuariosReposirory = getRepository(Usuario);

        const usuarioJaCadastrado = await manutencaoUsuariosReposirory.findOne({
            where: { email }
        });
    
        if (usuarioJaCadastrado) {
            throw new Error('Email ja utilizado');
        }
    
        const senhaCriptografada = await hash(senha, 8);

        const usuario = manutencaoUsuariosReposirory.create({ 
            nome,
            email,
            senha: senhaCriptografada 
        });

        await manutencaoUsuariosReposirory.save(usuario);
        
        return usuario;
    }

}

export default ManutencaoUsuariosService;