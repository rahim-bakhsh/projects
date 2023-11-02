// import { MigrationInterface, QueryRunner } from "typeorm";

// export class AddedTwoNewFeildsToUser1698871420986 implements MigrationInterface {
//     name = 'AddedTwoNewFeildsToUser1698871420986'

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "profile_image" character varying, "country_code" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`DROP TABLE "user"`);
//     }

// }
