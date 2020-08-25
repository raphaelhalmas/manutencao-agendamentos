import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Agendamento1598314100303 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'agendamento',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'prestadorservico',
                        type: 'varchar'
                    },
                    {
                        name: 'data',
                        type: 'timestamp with time zone'
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
        await queryRunner.dropTable('agendamento');
    }    

}
