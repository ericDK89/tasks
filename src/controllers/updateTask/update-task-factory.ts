import { PrismaTaskRepository } from "../../repositories/prisma/prisma-task-repository";
import { UpdateTaskService } from "../../services/update-task-service";
import { UpdateTaskController } from "./update-task-controller";

const prismaTaskRepository = new PrismaTaskRepository()
const updateTaskService = new UpdateTaskService(prismaTaskRepository)
export const updateTaskController = new UpdateTaskController(updateTaskService)