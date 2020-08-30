import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface ITokenPayload {
    iat: number;
    ext: number;
    sub: string;
}

export default function autorizaRequisicao(
    request: Request, response: Response, next: NextFunction): void {

    const autorizacao = request.headers.authorization;

    if (!autorizacao) {
        throw new Error('O token JWT nao foi enviado');
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
        throw new Error('Token JWT invalido');
    }
}