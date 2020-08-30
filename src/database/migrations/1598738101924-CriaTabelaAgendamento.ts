import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CriaTabelaAgendamento1598738101924 implements MigrationInterface {

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
                        name: 'prestadorservico_id',
                        type: 'uuid',
                        isNullable: true
                    },
                    {
                        name: 'dataagendamento',
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

        await queryRunner.createForeignKey(
            'agendamento',
            new TableForeignKey({
              name: 'usuario',
              columnNames: ['prestadorservico_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'usuario',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('agendamento', 'usuario');
        await queryRunner.dropTable('agendamento');
    }
    
}
