import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1702564174655 implements MigrationInterface {
    name = 'Auto1702564174655'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lessons" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "code" character varying NOT NULL, CONSTRAINT "PK_9b9a8d455cac672d262d7275730" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "evaluations" ("id" SERIAL NOT NULL, "score" integer NOT NULL, "crearedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "userId" integer, "lessonId" integer, CONSTRAINT "PK_f683b433eba0e6dae7e19b29e29" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "evaluations" ADD CONSTRAINT "FK_f079d95b69f82262b74ee478825" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "evaluations" ADD CONSTRAINT "FK_f794fa8ff3b6152a5d773b98e3b" FOREIGN KEY ("lessonId") REFERENCES "lessons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "evaluations" DROP CONSTRAINT "FK_f794fa8ff3b6152a5d773b98e3b"`);
        await queryRunner.query(`ALTER TABLE "evaluations" DROP CONSTRAINT "FK_f079d95b69f82262b74ee478825"`);
        await queryRunner.query(`DROP TABLE "evaluations"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "lessons"`);
    }

}
