import { PrismaTaskRepository } from "../repositories/prisma/prisma-task-repository";

export class CreateTaskService {
  constructor(private prismaTaskRepository: PrismaTaskRepository) {}

  execute({ title, description }) {
    return this.prismaTaskRepository.create({ title, description })
  }
}