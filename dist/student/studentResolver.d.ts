import { StudentService } from './student.service';
import { Student } from 'src/entity/student.entity';
export declare class StudentResolver {
    private readonly studentService;
    constructor(studentService: StudentService);
    getAllStudents(): Promise<Student[]>;
    getStudentById(id: number): Promise<Student>;
    createStudent(studentName: string, className: string): Promise<Student>;
    updateStudent(id: number, studentName: string): Promise<Student>;
    deleteStudent(id: number): Promise<string>;
}
