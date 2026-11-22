import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Login | Next_Template",
  description: "Sign in to your account",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6 rounded-2xl border border-zinc-200 bg-white p-8 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Sign In
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Enter your credentials to access the template
          </p>
        </div>
        <form className="space-y-4">
          <Input placeholder="name@example.com" type="email" required />
          <Input placeholder="Password" type="password" required />
          <Button type="submit" className="w-full">
            Continue
          </Button>
        </form>
        <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
          <Link
            href="/"
            className="underline hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
