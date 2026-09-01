"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center gap-6 p-8">
      <h2>Hello, Welcome to ChatApp</h2>
      <p>
        A full-stack real-time chat app where users can create an account, log in securely,
        and message other users live. Built with Next.js and TypeScript on the frontend,
        Prisma + a SQL database for storage, and Socket.io for real-time message delivery.
        Focused on core chat functionality — authentication, message persistence,
        and instant delivery — as a hands-on exercise in full-stack app development.
      </p>
      <div className="flex flex-row gap-4">
        <Button onClick={() => router.push("/login-page")}>Login</Button>
        <Button onClick={() => router.push("/signup-page")}>Sign up</Button>
      </div>
    </div>
  );
}
