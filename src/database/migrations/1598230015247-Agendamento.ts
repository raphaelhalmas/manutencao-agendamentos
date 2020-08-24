import { MigrationInterface, QueryRunner, Table} from "typeorm";

export class Agendamento1598230015247 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'agendamento',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'prestadorservico',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'date',
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
