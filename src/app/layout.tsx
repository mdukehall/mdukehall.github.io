import type { Metadata } from "next";
import { JetBrains_Mono, VT323 } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { TerminalShell } from "@/components/TerminalShell";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "mdukehall ~/",
    template: "%s · mdukehall",
  },
  description: "Terminal-styled personal site — logs, about, and retro hacker vibes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${vt323.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full">
        <TerminalShell>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <footer className="site-footer">
            <p>
              EOF — no carrier detected — last login from a machine that still remembers IRC
            </p>
          </footer>
        </TerminalShell>
      </body>
    </html>
  );
}
