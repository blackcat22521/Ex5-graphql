import { StudentService } from './student.service';
import { Student } from 'src/entity/student.entity';
import { CreateStudentDto } from './dto/createStudentDto';
import { UpdateStudentDto } from './dto/updateStudentDto';
export declare class StudentResolver {
    private readonly studentService;
    constructor(studentService: StudentService);
    getAllStudents(): Promise<Student[]>;
    getStudentById(id: number): Promise<Student>;
    createStudent(createStudentDto: CreateStudentDto): Promise<Student>;
    updateStudent(id: number, updateStudentDto: UpdateStudentDto): Promise<Student>;
    deleteStudent(id: number): Promise<string>;
}
