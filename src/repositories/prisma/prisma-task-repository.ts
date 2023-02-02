import { ITask } from "../../entities/task";
import { prisma } from "../../lib/prisma";
import { ITaskRepository } from "../task-repository-interface";

export class PrismaTaskRepository implements ITaskRepository {

  async create({ title, description }: ITask): Promise<void> {
    await prisma.task.create({
      data: {
        title,
        description
      }
    })
  }

  async listAll(): Promise<ITask[]> {
    const allTasks = await prisma.task.findMany()
    return allTasks
  }

  async update({ title, description, id }: ITask): Promise<void> {    
    if(!description) {
      await prisma.task.update({
        where: {
          id
        },
        data: {
          title,
          updated_at: new Date()
        }
      })
    }

    if(!title) {
      await prisma.task.update({
        where: {
          id
        },
        data: {
          description,
          updated_at: new Date()
        }
      })
    }

    if({ title, description }) {
      await prisma.task.update({
        where: {
          id
        },
        data: {
          title,
          description,
          updated_at: new Date()
        }
      })
    }
  }

  async complete(id: string): Promise<void> {
    const task = await prisma.task.findUnique({
      where: {
        id
      }
    })
  
    const isCompleted = task.completed_at
  
    if(isCompleted) {
      await prisma.task.update({
        where: {
          id
        },
        data: {
          completed_at: null
        }
      })
    } else {
      await prisma.task.update({
        where: {
          id
        },
        data: {
          completed_at: new Date()
        }
      })
    }
  }

  async findOne({ title, description }: ITask): Promise<ITask[]> {
    const task = await prisma.task.findMany({
      where: {
        title,
        description
      }
    })
  
  return task
  }

  async delete(id: string): Promise<void> {
    await prisma.task.delete({
      where: {
        id
      }
    })
  }
}