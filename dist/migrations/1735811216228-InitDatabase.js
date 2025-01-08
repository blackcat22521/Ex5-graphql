"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitDatabase1735811216228 = void 0;
class InitDatabase1735811216228 {
    constructor() {
        this.name = 'InitDatabase1735811216228';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_student_class"`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_bd5c8f2ef67394162384a484ba1" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_bd5c8f2ef67394162384a484ba1"`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_student_class" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
}
exports.InitDatabase1735811216228 = InitDatabase1735811216228;
//# sourceMappingURL=1735811216228-InitDatabase.js.map