import { PrismaTaskRepository } from "../repositories/prisma/prisma-task-repository";

export class UpdateTaskService {
  constructor(private prismaTaskRepository: PrismaTaskRepository) {}

  execute({ title, description, id }) {
    return this.prismaTaskRepository.update({ title, description, id })
  }
}