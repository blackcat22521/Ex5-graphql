import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDatabase1735811216228 implements MigrationInterface {
  name = 'InitDatabase1735811216228';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "student" DROP CONSTRAINT "FK_student_class"`,
    );
    await queryRunner.query(
      `ALTER TABLE "student" ADD CONSTRAINT "FK_bd5c8f2ef67394162384a484ba1" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "student" DROP CONSTRAINT "FK_bd5c8f2ef67394162384a484ba1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "student" ADD CONSTRAINT "FK_student_class" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }
}
