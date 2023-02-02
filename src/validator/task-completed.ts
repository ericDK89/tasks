import { prisma } from "../lib/prisma"

export const Task = async (id: string) => {
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
  }
}
