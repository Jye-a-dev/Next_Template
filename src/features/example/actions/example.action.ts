"use server";

import {
  exampleCreateSchema,
  ExampleCreateInput,
} from "../schemas/example.schema";

export async function createExampleAction(input: ExampleCreateInput) {
  const parsed = exampleCreateSchema.safeParse(input);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  return {
    success: true,
    data: {
      id: "ex_" + Date.now(),
      title: parsed.data.title,
      description: parsed.data.description,
      createdAt: new Date().toISOString(),
    },
  };
}
