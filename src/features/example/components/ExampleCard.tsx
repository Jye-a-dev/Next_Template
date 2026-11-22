import { ExampleItem } from "../types/example.types";

interface ExampleCardProps {
  item: ExampleItem;
}

export function ExampleCard({ item }: ExampleCardProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-xs transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
        {item.title}
      </h3>
      <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
        {item.description}
      </p>
      <span className="mt-4 inline-block text-xs text-zinc-400 dark:text-zinc-500">
        {new Date(item.createdAt).toLocaleDateString()}
      </span>
    </div>
  );
}
