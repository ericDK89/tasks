import { Request, Response } from "express";
import { DeleteTaskService } from "../../services/delete-task-service";
import { AllTasks } from "../../validator/task-exists";

export class DeleteTaskController {
  constructor(private deleteTaskService: DeleteTaskService) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params

    const allTasks = await AllTasks()
    const taskExists = allTasks.find(task => task.id === id)

    if(!taskExists) {
      return res.status(400).send("Task id not found.")
    }

    await this.deleteTaskService.execute(id)
    return res.status(200).end()
  }
}