import { PrismaTaskRepository } from "../../repositories/prisma/prisma-task-repository";
import { ListAllTasksService } from "../../services/list-all-tasks-service";
import { ListAllTasksController } from "./list-all-tasks-controller";

const prismaTaskRepository = new PrismaTaskRepository()
const listAllTasksService = new ListAllTasksService(prismaTaskRepository)
export const listAllTasksController = new ListAllTasksController(listAllTasksService)