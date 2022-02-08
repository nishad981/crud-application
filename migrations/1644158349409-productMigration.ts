import {MigrationInterface, QueryRunner} from "typeorm";

export class productMigration1644158349409 implements MigrationInterface {
    name = 'productMigration1644158349409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "brand" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "country" character varying NOT NULL, CONSTRAINT "PK_a5d20765ddd942eb5de4eee2d7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category_tags" ("categoryId" SERIAL NOT NULL, "tagsId" integer NOT NULL, CONSTRAINT "PK_fa301e1dbeced9eac583e6bfc17" PRIMARY KEY ("categoryId"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "mpath" character varying NOT NULL, "parentCategoryId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "image" ("id" SERIAL NOT NULL, "public_id" integer NOT NULL, "url" character varying NOT NULL, "productid" integer NOT NULL, "created" TIMESTAMP NOT NULL, "updated" TIMESTAMP NOT NULL, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_tags" ("productId" SERIAL NOT NULL, "tagsId" integer NOT NULL, CONSTRAINT "PK_d11be11255b8eeb5d761023e6bc" PRIMARY KEY ("productId"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "skuNumber" integer NOT NULL, "brandld" integer NOT NULL, "countryOfOrigin" character varying NOT NULL, "stateOfOrigin" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "categoryid" integer NOT NULL, "abv" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tags"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "product_tags"`);
        await queryRunner.query(`DROP TABLE "image"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "category_tags"`);
        await queryRunner.query(`DROP TABLE "brand"`);
    }

}
