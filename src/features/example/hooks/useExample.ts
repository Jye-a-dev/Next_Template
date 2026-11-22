"use client";

import { useQuery } from "@tanstack/react-query";
import { ExampleItem } from "../types/example.types";

async function getMockExamples(): Promise<ExampleItem[]> {
  return [
    {
      id: "1",
      title: "App Router + Feature-Based Hybrid",
      description:
        "Routing decoupled from domain logic. src/features isolates actions, schemas, components, and state.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "TanStack Query v5 + Zustand v5",
      description:
        "Robust server state caching paired with lightweight client state management.",
      createdAt: new Date().toISOString(),
    },
  ];
}

export function useExample() {
  return useQuery({
    queryKey: ["examples"],
    queryFn: getMockExamples,
  });
}
