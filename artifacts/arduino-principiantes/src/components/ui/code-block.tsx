import * as React from "react"
import { cn } from "@/lib/utils"

const CodeBlock = React.forwardRef<
  HTMLPreElement,
  React.HTMLAttributes<HTMLPreElement> & { code: string }
>(({ className, code, ...props }, ref) => {
  // Simple syntax highlighting heuristic for Arduino C++
  const highlightCode = (str: string) => {
    let highlighted = str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      // Strings
      .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="code-string">$&</span>')
      // Comments
      .replace(/(\/\/.*)/g, '<span class="code-comment">$&</span>')
      // Keywords
      .replace(/\b(void|int|float|if|else|for|while|return|true|false)\b/g, '<span class="code-keyword">$&</span>')
      // Functions
      .replace(/\b(setup|loop|pinMode|digitalWrite|digitalRead|analogRead|analogWrite|delay|begin|print|println)\b(?=\s*\()/g, '<span class="code-function">$&</span>')
      // Constants
      .replace(/\b(HIGH|LOW|INPUT|OUTPUT|LED_BUILTIN|A0|A1|A2|A3|A4|A5)\b/g, '<span class="code-constant">$&</span>')
      // Numbers
      .replace(/\b(\d+)\b/g, '<span class="code-number">$&</span>');

    return { __html: highlighted };
  };

  return (
    <pre
      ref={ref}
      className={cn(
        "rounded-md bg-zinc-950 p-4 overflow-x-auto text-sm text-zinc-50 font-mono leading-relaxed",
        className
      )}
      {...props}
    >
      <code dangerouslySetInnerHTML={highlightCode(code)} />
    </pre>
  )
})
CodeBlock.displayName = "CodeBlock"

export { CodeBlock }