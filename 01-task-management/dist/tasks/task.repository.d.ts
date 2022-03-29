import { User } from "../auth/user.entity";
import { Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTaskFilterDto } from "./dto/get-task-filter.dto";
import { Task } from "./task.entity";
export declare class TaskRepository extends Repository<Task> {
    private logger;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    getTasks(filterDto: GetTaskFilterDto, user: User): Promise<Task[]>;
}
