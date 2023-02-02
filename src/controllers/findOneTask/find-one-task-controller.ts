import { Request, Response } from "express";
import { FindOneTaskService } from "../../services/find-one-task-service";
import { TaskSchema } from "../../validator/task-validator";

export class FindOneTaskController {
  constructor(private findOneTaskService: FindOneTaskService) {}

  async handle(req: Request, res: Response) {
    const { title, description } = TaskSchema.parse(req.query)

    const task = await this.findOneTaskService.execute({ title, description })

    return res.status(200).json({ task })
  }
}