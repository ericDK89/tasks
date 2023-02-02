import { prisma } from "../lib/prisma"

export const AllTasks = async () => {
  return await prisma.task.findMany()
}
