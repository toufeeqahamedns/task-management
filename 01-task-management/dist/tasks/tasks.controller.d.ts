import { User } from '../auth/user.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    private logger;
    constructor(tasksService: TasksService);
    getTasks(filterDto: GetTaskFilterDto, user: User): Promise<Task[]>;
    getTaskById(id: string, user: User): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    updateTaskStatus(id: string, updateTaskStatusDto: UpdateTaskStatusDto, user: User): Promise<Task>;
    deleteTask(id: string, user: User): Promise<void>;
}
