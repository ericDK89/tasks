import { ITask } from "../entities/task"

export interface ITaskRepository {
  create({ title, description }: ITask): Promise<void>
  listAll(): Promise<ITask[]>
  update({ title, description, id }): Promise<void>
  complete(id: string): Promise<void>
  findOne({ title, description }: ITask): Promise<ITask[]>
  delete(id: string): Promise<void>
}