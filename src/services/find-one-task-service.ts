import { PrismaTaskRepository } from "../repositories/prisma/prisma-task-repository";

export class FindOneTaskService {
  constructor(private prismaTaskRepository: PrismaTaskRepository) {}

  execute({ title, description }){
    return this.prismaTaskRepository.findOne({ title, description })
  }
}