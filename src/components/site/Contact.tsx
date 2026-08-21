import { FiMapPin, FiPhone, FiMail, FiGlobe, FiUser } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { school } from "@/data/school";

const items = [
  { icon: <FiMapPin />, label: "Address", value: school.address, href: school.mapsLink },
  { icon: <FiPhone />, label: "Phone", value: school.phone, href: `tel:${school.phone}` },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: school.whatsapp,
    href: `https://wa.me/${school.whatsapp.replace(/\D/g, "")}`,
  },
  { icon: <FiMail />, label: "Email", value: school.email, href: `mailto:${school.email}` },
  { icon: <FiGlobe />, label: "Website", value: school.website, href: school.website },
  { icon: <FaFacebookF />, label: "Facebook", value: "Our Facebook page", href: school.facebook },
  { icon: <FiUser />, label: "Principal", value: school.principal },
];

export function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Visit or contact us
            </h2>
            <p className="mt-4 text-muted-foreground">
              We welcome parents to visit the campus in {school.area} and meet the team.
            </p>

            <ul className="mt-8 space-y-3">
              {items.map((it) => {
                const content = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                      {it.icon}
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                        {it.label}
                      </span>
                      <span className="text-sm font-medium text-foreground">{it.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={it.label}>
                    {it.href ? (
                      <a
                        href={it.href}
                        target={it.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-secondary/50"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="min-h-[420px] overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="T.H Grammar School location map"
              src="https://www.google.com/maps?q=Plot%20A%203/17%20Block%204%20Nazimabad%20Karachi&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
