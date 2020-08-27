import { Request, Response, NextFunction } from 'express';

import autenticacaoProperties from '../config/autenticacaoProperties';
import { verify } from 'jsonwebtoken';

export default function autorizaRequisicao(
    request: Request, 
    response: Response, 
    next: NextFunction): void {
        const autorizacao = request.headers.authorization;

        if (!autorizacao) {
            throw new Error('O token JWT nao foi enviado');
        }

        const [, token ] = autorizacao.split(' ');

        try {
            const decodedToken = verify(token, 
                autenticacaoProperties.tokenJWT.secretOrPrivateKey);                

            return next();
        } 
        catch (error) {
            throw new Error('Token JWT invalido');
        }
}