"use client"

import {
  CodeBlockCommand,
  convertNpmCommand,
} from "@/registry/components/code-block-command"

export default function CodeBlockCommandConvertDemo() {
  return (
    <div className="w-full max-w-md">
      <CodeBlockCommand
        prompt="Add the @jaydindg/code-block-command component to my project"
        {...convertNpmCommand("npx shadcn add @jaydindg/code-block-command")}
      />
    </div>
  )
}
