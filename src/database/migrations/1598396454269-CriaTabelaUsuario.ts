import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriaTabelaUsuario1598396454269 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuario',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'nome',
                        type: 'varchar'
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'senha',
                        type: 'varchar'
                    },                    
                    {
                        name: 'datacriacao',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'dataatualizacao',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuario');
    }

}
