import { useState } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { school } from "@/data/school";

const links = [
  { href: "#about", label: "About" },
  { href: "#facilities", label: "Facilities" },
  { href: "#academics", label: "Academics" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-brand font-display text-sm font-bold text-primary-foreground">
            TH
          </span>
          <span className="font-display text-base font-semibold leading-tight text-foreground">
            T.H Grammar School
            <span className="block text-xs font-normal text-muted-foreground">
              Nazimabad, Karachi
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${school.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            <FiPhone /> {school.phone}
          </a>
        </nav>

        <button
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="fade-up border-t border-border bg-background px-5 pb-5 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${school.phone}`}
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <FiPhone /> Call now
          </a>
        </nav>
      )}
    </header>
  );
}
