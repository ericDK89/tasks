import { PrismaTaskRepository } from "../repositories/prisma/prisma-task-repository";

export class ListAllTasksService {
  constructor(private prismaTaskRepository: PrismaTaskRepository) {}

  execute() {
    return this.prismaTaskRepository.listAll()
  }
}