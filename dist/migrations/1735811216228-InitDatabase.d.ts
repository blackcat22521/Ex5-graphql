import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class InitDatabase1735811216228 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
