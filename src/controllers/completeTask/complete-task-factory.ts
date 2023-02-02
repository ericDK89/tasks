import { PrismaTaskRepository } from "../../repositories/prisma/prisma-task-repository";
import { CompleteTaskSerivce } from "../../services/complete-task-service";
import { CompleteTaskController } from "./complete-task-controller";

const prismaTaskRepository = new PrismaTaskRepository()
const completeTaskService = new CompleteTaskSerivce(prismaTaskRepository)
export const completeTaskController = new CompleteTaskController(completeTaskService)