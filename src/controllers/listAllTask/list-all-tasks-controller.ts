import { Request, Response } from "express"
import { ListAllTasksService } from "../../services/list-all-tasks-service"

export class ListAllTasksController {
  constructor(private listAllTasksService: ListAllTasksService) {}

  async handle(req: Request, res: Response): Promise<Response> {
   const allTasks = await this.listAllTasksService.execute()
   return res.status(200).json({ allTasks })
  }
}