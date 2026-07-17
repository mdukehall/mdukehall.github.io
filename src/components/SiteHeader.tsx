import { AsciiBanner } from "./AsciiBanner";
import { TerminalNav } from "./TerminalNav";
import { TerminalWindow } from "./TerminalWindow";

export function SiteHeader() {
  return (
    <header className="mb-6 space-y-4">
      <TerminalWindow title="irc://freenode/#mdukehall — rx/tx">
        <AsciiBanner />
        <p className="terminal-meta">
          <span className="text-phosphor-dim">sys@</span>
          <span className="text-phosphor">mdukehall</span>
          <span className="text-phosphor-dim">:</span>
          <span className="text-cyan-glow">~</span>
          <span className="text-phosphor-dim">$</span>{" "}
          <span className="text-phosphor">uname -a</span>
        </p>
        <p className="terminal-subline">
          comp-sci &apos;98 · born &apos;76 · still compiling · dark mode since dial-up
        </p>
        <TerminalNav />
      </TerminalWindow>
    </header>
  );
}
