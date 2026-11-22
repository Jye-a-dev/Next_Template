import { z } from "zod";

export const exampleCreateSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  description: z.string().min(1, "Description is required"),
});

export type ExampleCreateInput = z.infer<typeof exampleCreateSchema>;
