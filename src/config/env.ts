import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().default("5000"),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:5000"),
  NEXT_PUBLIC_API_BASE_URL: z
    .string()
    .url()
    .default("http://localhost:8000/api"),
});

export const env = envSchema.parse({
  PORT: process.env.PORT,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
});
