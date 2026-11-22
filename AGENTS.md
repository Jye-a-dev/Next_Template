<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AI Coding Agent Architecture & Engineering Standards

## 1. Architectural Philosophy: App Router + Feature-Based Hybrid

- Keep `src/app/` strictly thin. It handles route segments, layout wrappers, metadata, route handlers (`api/`), and error/loading boundaries.
- All domain business logic belongs to `src/features/[feature-name]/`.
- Sub-folder structure for every feature:
  - `actions/`: Next.js Server Actions marked with `'use server'`
  - `api/`: Server-side fetchers and client-side Axios endpoints
  - `components/`: UI components exclusive to this feature
  - `hooks/`: Feature-specific custom React hooks (`'use client'`)
  - `schemas/`: Zod schemas for form, API, and payload validation
  - `types/`: Feature-scoped TypeScript interfaces and types

## 2. Server vs. Client Components Execution

- Default to React Server Components (RSC) for maximum performance, SEO, and zero client JS footprint.
- Explicitly add `'use client'` only when utilizing browser events, React state (`useState`, `useEffect`), or context providers.
- Pass server-fetched data to Client Components as props; do not convert root layouts or parent pages into Client Components unnecessarily.

## 3. Styling & Tailwind CSS v4 Rules

- Tailwind CSS v4 is configured via `@import "tailwindcss";` in `src/app/globals.css`.
- Use the `cn()` helper (`clsx` + `tailwind-merge`) from `@/utils/cn` for all conditional and dynamic classes.
- Avoid legacy `tailwind.config.js` patterns; use native CSS theme variables when extending design tokens.

## 4. Git & Commit Guidelines

- All commit messages must strictly comply with Conventional Commits: `<type>(<scope>): <description>`.
- Allowed types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`.
