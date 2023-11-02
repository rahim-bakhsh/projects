// import { MigrationInterface, QueryRunner } from "typeorm";

// export class AddedAnExtraFields1698871930846 implements MigrationInterface {
//     name = 'AddedAnExtraFields1698871930846'

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
//         await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "profile_image"`);
//         await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "country_code"`);
//         await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
//         await queryRunner.query(`ALTER TABLE "user" ADD "new_field" character varying NOT NULL`);
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "new_field"`);
//         await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
//         await queryRunner.query(`ALTER TABLE "user" ADD "country_code" character varying NOT NULL`);
//         await queryRunner.query(`ALTER TABLE "user" ADD "profile_image" character varying`);
//         await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying NOT NULL`);
//     }

// }
