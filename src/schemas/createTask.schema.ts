import {z} from "zod";

export const createTaskSchema = z.object({
  title: z.string().max(100, {message: "Title must be at most 100 characters"}),
  dueDate: z.date(),
  description: z.string().max(500, {message: "Description must be at most 500 characters"}),
  status: z.enum(["todo", "inProgress", "completed"], {message: "Status is required"}),
  priority: z.enum(["low", "medium", "high"], {message: "Priority is required"}),
});