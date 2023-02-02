import { Request, Response } from "express";
import { CompleteTaskSerivce } from "../../services/complete-task-service";
import { AllTasks } from "../../validator/task-exists";

export class CompleteTaskController {
  constructor(private completeTaskService: CompleteTaskSerivce) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const allTasks = await AllTasks()
    const taskExists = allTasks.find(task => task.id === id)

    if(!taskExists) {
      return res.status(400).send("Task id not found.")
    }
    
    await this.completeTaskService.execute(id)
    return res.status(201).end()
  }
}