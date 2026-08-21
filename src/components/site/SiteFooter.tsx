import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { school } from "@/data/school";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-brand text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{school.name}</p>
          <p className="mt-1 text-sm opacity-85">{school.address}</p>
          <p className="text-sm opacity-85">{school.tagline}</p>
        </div>
        <div className="flex gap-3">
          <a
            href={`https://wa.me/${school.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="grid h-11 w-11 place-items-center rounded-full bg-background/15 transition-colors hover:bg-background/25"
          >
            <FaWhatsapp />
          </a>
          <a
            href={school.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="grid h-11 w-11 place-items-center rounded-full bg-background/15 transition-colors hover:bg-background/25"
          >
            <FaFacebookF />
          </a>
          <a
            href={`tel:${school.phone}`}
            aria-label="Call"
            className="grid h-11 w-11 place-items-center rounded-full bg-background/15 transition-colors hover:bg-background/25"
          >
            <FiPhone />
          </a>
          <a
            href={`mailto:${school.email}`}
            aria-label="Email"
            className="grid h-11 w-11 place-items-center rounded-full bg-background/15 transition-colors hover:bg-background/25"
          >
            <FiMail />
          </a>
        </div>
      </div>
      <div className="border-t border-background/15 py-4 text-center text-xs opacity-75">
        © {new Date().getFullYear()} {school.name}. All rights reserved.
      </div>
    </footer>
  );
}
