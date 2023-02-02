import { Request, Response } from "express";
import { UpdateTaskService } from "../../services/update-task-service";
import { AllTasks } from "../../validator/task-exists";
import { TaskSchema } from "../../validator/task-validator";

export class UpdateTaskController {
 constructor(private updateTaskService: UpdateTaskService) {}
 
 async handle(req: Request, res: Response): Promise<Response> {
  const { id } = req.params
  const { title, description } = TaskSchema.parse(req.body)

  const allTasks = await AllTasks()
  const taskExists = allTasks.find(task => task.id === id)

  if(!taskExists) {
    return res.status(400).send("Task id not found.")
  }

  await this.updateTaskService.execute({ description, id, title })
  return res.status(201).end()
 }
}