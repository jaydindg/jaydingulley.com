"use client"

import { CodeBlockCommand } from "@/registry/components/code-block-command"

export default function CodeBlockCommandDemo() {
  return (
    <div className="w-full max-w-md">
      <CodeBlockCommand
        prompt="Add the @jaydindg/code-block-command component to my project"
        pnpm="pnpm dlx shadcn add @jaydindg/code-block-command"
        yarn="yarn shadcn add @jaydindg/code-block-command"
        npm="npx shadcn add @jaydindg/code-block-command"
        bun="bunx --bun shadcn add @jaydindg/code-block-command"
      />
    </div>
  )
}
