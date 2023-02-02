import { PrismaTaskRepository } from "../../repositories/prisma/prisma-task-repository";
import { DeleteTaskService } from "../../services/delete-task-service";
import { DeleteTaskController } from "./delete-task-controller";

const prismaTaskRepository = new PrismaTaskRepository()
const deleteTaskService = new DeleteTaskService(prismaTaskRepository)
export const deleteTaskController = new DeleteTaskController(deleteTaskService)