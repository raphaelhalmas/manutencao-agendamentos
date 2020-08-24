import { MigrationInterface, QueryRunner, Table} from "typeorm";

export class Agendamento1598230015247 implements MigrationInterface {

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
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'data',
                        type: 'timestamp with time zone',
                        isNullable: false
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('agendamento');
    }

}
