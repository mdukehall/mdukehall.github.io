import { TerminalWindow } from "@/components/TerminalWindow";

export default function AboutPage() {
  return (
    <TerminalWindow title="cat ~/about/me.txt">
      <p className="prompt-line">
        <span className="text-phosphor-dim">guest@mdukehall:~$</span> whoami --verbose
        <span className="cursor">█</span>
      </p>
      <h1 className="section-heading">ABOUT</h1>

      <section className="about-block">
        <h2>&gt; ORIGIN STORY</h2>
        <p>
          Born in 1976. Grew up on BBSes, dial-up, and the sound of a modem handshake.
          Graduated comp sci in 1998 — right when the web went from hobby to industry.
        </p>
      </section>

      <section className="about-block">
        <h2>&gt; CURRENT STATUS</h2>
        <p>
          Builder, game designer, tinkerer. Still happiest in a dark room with a monospace
          font and a blinking cursor. This site is my home base — logs on the front page,
          more sections as I wire them up.
        </p>
      </section>

      <section className="about-block">
        <h2>&gt; STACK / INTERESTS</h2>
        <ul>
          <li>Games, systems, and weird little side projects</li>
          <li>Retro UX — IRC, terminals, phosphor green on black</li>
          <li>Mobile + web — currently shipping things like BloomCore</li>
        </ul>
      </section>

      <section className="about-block">
        <h2>&gt; EXPANSION SLOTS [AVAILABLE]</h2>
        <p>
          Reserved for resume, project deep-dives, photo dumps, link roll, or whatever
          the next <code>~/about/*.txt</code> file turns into. Edit{" "}
          <code>src/app/about/page.tsx</code> or split into components when it grows.
        </p>
      </section>

      <section className="about-block">
        <h2>&gt; CONTACT</h2>
        <p>
          <span className="text-phosphor-dim">mail:</span>{" "}
          <a href="mailto:duke@michaeldukehall.com">duke@michaeldukehall.com</a>
        </p>
      </section>
    </TerminalWindow>
  );
}
