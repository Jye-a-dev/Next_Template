import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
            <span className="font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Next_Template
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm" className="gap-1.5">
                Dashboard
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
            Production-Ready Architecture (Next.js 16 + React 19)
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-100">
            Enterprise Architecture for Solo & Team Engineering
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
            Configured with Feature-Based Hybrid structure, Port 5000
            environment orchestration, TanStack Query v5, Zustand, Zod
            validation, Tailwind CSS v4, and strict Conventional Commit
            guardrails.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="gap-2">
                Explore Dashboard
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="/api/health" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                Health Check API
              </Button>
            </a>
          </div>

          {/* Feature Highlights Grid */}
          <div className="mt-16 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <Code2 className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Feature-Based Hybrid
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Thin route handlers in <code>src/app/</code> combined with
                isolated domain features in <code>src/features/</code>.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <Cpu className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Port & Env Control
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Zero-flag CLI commands. Port 5000 driven entirely by validated{" "}
                <code>.env</code> with runtime Zod parsing.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <ShieldCheck className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Quality Guardrails
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Husky v9, Commitlint Conventional Commits, Lint-staged, Prettier
                with Tailwind sorting, and ESLint Flat Config.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        Next_Template &copy; {new Date().getFullYear()} - Production-Ready
        Standard
      </footer>
    </div>
  );
}
