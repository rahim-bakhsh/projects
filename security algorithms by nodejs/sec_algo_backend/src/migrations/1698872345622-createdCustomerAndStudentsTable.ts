// import { MigrationInterface, QueryRunner } from "typeorm";

// export class CreatedCustomerAndStudentsTable1698872345622 implements MigrationInterface {
//     name = 'CreatedCustomerAndStudentsTable1698872345622'

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`CREATE TABLE "customers" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "profile_image" character varying, "country_code" character varying NOT NULL, "new_field" character varying NOT NULL, CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
//         await queryRunner.query(`CREATE TABLE "students" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "profile_image" character varying, "country_code" character varying NOT NULL, "new_field" character varying NOT NULL, CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`DROP TABLE "students"`);
//         await queryRunner.query(`DROP TABLE "customers"`);
//     }

// }
