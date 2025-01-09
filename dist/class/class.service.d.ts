import { Repository } from 'typeorm';
import { Class } from 'src/entity/class.entity';
import { Student } from 'src/entity/student.entity';
export declare class ClassService {
    private readonly classRepository;
    private readonly studentRepository;
    constructor(classRepository: Repository<Class>, studentRepository: Repository<Student>);
    createClass(body: {
        className: string;
    }): Promise<Class>;
    getAllClasses(): Promise<Class[]>;
    getClassById(id: number): Promise<Class>;
    getClassByName(name: string): Promise<Class>;
    updateClass(id: number, body: {
        className?: string;
    }): Promise<Class>;
    deleteClass(id: number): Promise<Class>;
}
