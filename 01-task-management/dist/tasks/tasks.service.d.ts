import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { User } from '../auth/user.entity';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    getTasks(filterDto: GetTaskFilterDto, user: User): Promise<Task[]>;
    getTaskById(id: string, user: User): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    updateTaskStatus(id: string, status: TaskStatus, user: User): Promise<Task>;
    deleteTask(id: string, user: User): Promise<void>;
}
