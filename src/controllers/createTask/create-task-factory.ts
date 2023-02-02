import { PrismaTaskRepository } from "../../repositories/prisma/prisma-task-repository"
import { CreateTaskService } from "../../services/create-task-service"
import { CreateTaskController } from "./create-task-controller"

const prismaTaskRepository = new PrismaTaskRepository()
const createTaskService = new CreateTaskService(prismaTaskRepository)
export const createTaskController = new CreateTaskController(createTaskService)