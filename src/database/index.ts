// import { createConnection } from 'typeorm';

// createConnection();

import { createConnection, getConnectionOptions, Connection } from 'typeorm';

export default async (name = 'default'): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();
    
    // return createConnection(
    //     Object.assign(defaultOptions, {
    //         name,
    //         database: defaultOptions.database
    //     })
    // );

    // return await createConnection();

    // const connection = await createConnection({
    //     type: "postgres",
    //     host: "localhost",
    //     port: 5432,
    //     username: "docker",
    //     password: "docker",
    //     database: "gostack_gobarber"
    // });
    
    const connection = createConnection(
        Object.assign(defaultOptions, {
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "docker",
            password: "docker",
            database: "gostack_gobarber"
        })
    );

    return connection;
};