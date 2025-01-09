import { ClassService } from './class.service';
import { Class } from 'src/entity/class.entity';
export declare class ClassResolver {
    private readonly classService;
    constructor(classService: ClassService);
    getAllClasses(): Promise<Class[]>;
    getClassById(id: number): Promise<Class>;
    createClass(className: string): Promise<Class>;
    updateClass(id: number, className: string): Promise<Class>;
    deleteClass(id: number): Promise<boolean>;
}
