import type { ReactNode } from "react";

type TerminalShellProps = {
  children: ReactNode;
};

export function TerminalShell({ children }: TerminalShellProps) {
  return (
    <div className="crt-shell min-h-full">
      <div className="crt-scanlines" aria-hidden="true" />
      <div className="crt-vignette" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-full w-full max-w-4xl flex-col px-4 py-6 sm:px-6">
        {children}
      </div>
    </div>
  );
}
