import { createConnection, getConnectionOptions, Connection } from 'typeorm';

export default async (name = 'default'): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();
        
    const connection = await createConnection(
        Object.assign(defaultOptions, {
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "docker",
            database: "gostack_gobarber"
        })
    );

    return connection;
};