import { string, z } from "zod";

export const TaskSchema = z.object({
  title: string().min(2).max(255).optional(),
  description: string().min(2).max(255).optional(),
})