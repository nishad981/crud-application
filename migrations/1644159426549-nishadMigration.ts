import {MigrationInterface, QueryRunner} from "typeorm";

export class nishadMigration1644159426549 implements MigrationInterface {
    name = 'nishadMigration1644159426549'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "skuNumber"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "skuNumber" integer NOT NULL`);
    }

}
