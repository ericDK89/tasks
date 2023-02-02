import { Router } from "express";
import { completeTaskController } from "../controllers/completeTask/complete-task-factory";
import { createTaskController } from "../controllers/createTask/create-task-factory";
import { deleteTaskController } from "../controllers/deleteTask/delete-task-factory";
import { findOneTaskController } from "../controllers/findOneTask/find-one-task-factory";
import { listAllTasksController } from "../controllers/listAllTask/list-all-tasks-factory";
import { updateTaskController } from "../controllers/updateTask/update-task-factory";

export const tasksRoutes = Router()

tasksRoutes.post("/", (req, res) => {
  return createTaskController.handle(req, res)
})

tasksRoutes.get("/", (req, res) => {
  return listAllTasksController.handle(req, res)
})

tasksRoutes.put("/:id", (req, res) => {
  return updateTaskController.handle(req, res)
})

tasksRoutes.patch("/:id/complete", (req, res) => {
  return completeTaskController.handle(req, res)
})

tasksRoutes.get("/find", (req, res) => {
  return findOneTaskController.handle(req, res)
})

tasksRoutes.delete("/:id", (req, res) => {
  return deleteTaskController.handle(req, res)
})