"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "~/log", hint: "blog feed" },
  { href: "/about", label: "~/about", hint: "whoami" },
];

export function TerminalNav() {
  const pathname = usePathname();

  return (
    <nav className="terminal-nav" aria-label="Main navigation">
      <p className="terminal-nav-status">
        <span className="text-phosphor-dim">&lt;mdukehall&gt;</span>{" "}
        <span className="text-cyan-glow">joined</span>{" "}
        <span className="text-amber-glow">#root</span>
      </p>
      <ul className="terminal-nav-list">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <li key={link.href}>
              <Link href={link.href} className={active ? "terminal-nav-link active" : "terminal-nav-link"}>
                <span className="text-phosphor-dim">$ cd </span>
                {link.label}
                <span className="terminal-nav-hint"> # {link.hint}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
