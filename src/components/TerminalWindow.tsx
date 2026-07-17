import type { ReactNode } from "react";

type TerminalWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function TerminalWindow({ title, children, className = "" }: TerminalWindowProps) {
  return (
    <section className={`terminal-window ${className}`}>
      <header className="terminal-titlebar">
        <div className="terminal-titlebar-buttons" aria-hidden="true">
          <span className="terminal-btn terminal-btn-close" />
          <span className="terminal-btn terminal-btn-min" />
          <span className="terminal-btn terminal-btn-max" />
        </div>
        <p className="terminal-titlebar-label">{title}</p>
      </header>
      <div className="terminal-body">{children}</div>
    </section>
  );
}
