import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624323200505 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"usuarios",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"email",
                        type:"varchar"
                    },
                    {
                        name:"adm",
                        type:"boolean",
                        default:false
                    },
                    {
                        name:"criado_em",
                        type:"timestamp",
                        default:"now()"
                    },
                    {
                        name:"att_em",
                        type:"timestamp",
                        default:"now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios")
    }

}
