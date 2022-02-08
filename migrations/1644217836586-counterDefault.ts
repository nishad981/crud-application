import {MigrationInterface, QueryRunner} from "typeorm";

export class counterDefault1644217836586 implements MigrationInterface {
    name = 'counterDefault1644217836586'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category_tags" ALTER COLUMN "counter" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category_tags" ALTER COLUMN "counter" DROP DEFAULT`);
    }

}
