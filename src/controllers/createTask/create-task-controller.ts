import { Request, Response } from "express";
import { CreateTaskService } from "../../services/create-task-service";
import { TaskSchema } from "../../validator/task-validator";

export class CreateTaskController { 
  constructor(private createTaskService: CreateTaskService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { title, description } = TaskSchema.parse(req.body)

    await this.createTaskService.execute({ description, title })

    return res.status(200).end()
  }
}