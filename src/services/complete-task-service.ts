import { PrismaTaskRepository } from "../repositories/prisma/prisma-task-repository";

export class CompleteTaskSerivce {
  constructor(private prismaTaskRepository: PrismaTaskRepository) {}

  execute(id: string) {
    return this.prismaTaskRepository.complete(id)
  }
}