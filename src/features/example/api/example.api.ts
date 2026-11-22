import { apiClient } from "@/lib/axios";
import { ExampleItem } from "../types/example.types";

export async function fetchExamples(): Promise<ExampleItem[]> {
  const response = await apiClient.get<ExampleItem[]>("/examples");
  return response.data;
}
