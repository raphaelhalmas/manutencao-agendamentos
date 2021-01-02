import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import ResponseStatusException from '../errors/ResponseStatusException';

interface ITokenPayload {
    iat: number;
    ext: number;
    sub: string;
}

export default function autorizaRequisicao(
    request: Request, response: Response, next: NextFunction): void {

    const autorizacao = request.headers.authorization;

    if (!autorizacao) {
        throw new ResponseStatusException('O token JWT nao foi enviado', 401);
    }

    const [, token ] = autorizacao.split(' ');

    try {
        const decodedToken = verify(token, 'bb757a278f392d128cf1157019d3d936');
        const { sub } = decodedToken as ITokenPayload;

        request.user = {
            id: sub,
        };

        return next();
    } 
    catch (error) {
        throw new ResponseStatusException('Token JWT invalido', 401);
    }
}