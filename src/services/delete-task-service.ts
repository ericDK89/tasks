import { PrismaTaskRepository } from "../repositories/prisma/prisma-task-repository";

export class DeleteTaskService {
  constructor(private prismaTaskRepository: PrismaTaskRepository) {}

  execute(id: string) {
    return this.prismaTaskRepository.delete(id)
  }
}