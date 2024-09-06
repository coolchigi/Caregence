"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { signInAction } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Log In</h1>

      <form action={signInAction}>
        <Button type="submit">Sign In</Button>
      </form>
    </main>
  );
}
