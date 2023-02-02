import { PrismaTaskRepository } from "../../repositories/prisma/prisma-task-repository";
import { FindOneTaskService } from "../../services/find-one-task-service";
import { FindOneTaskController } from "./find-one-task-controller";

const prismaTaskRepository = new PrismaTaskRepository()
const findOneTaskService = new FindOneTaskService(prismaTaskRepository)
export const findOneTaskController = new FindOneTaskController(findOneTaskService)