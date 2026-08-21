import { FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import schoolPhoto from "@/assets/school.jpg.asset.json";
import { school, highlights } from "@/data/school";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={schoolPhoto.url}
        alt="T.H Grammar School campus building in Nazimabad, Karachi"
        className="absolute inset-0 -z-20 h-full w-full scale-105 object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--brand-deep)_72%,transparent),color-mix(in_oklab,var(--brand-deep)_55%,transparent))] backdrop-blur-[3px]" />

      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="fade-up max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur">
            {school.curriculum} · {school.genderType}
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-primary-foreground drop-shadow-lg md:text-6xl">
            A strong foundation for every child in Nazimabad
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85">
            {school.name} delivers structured instruction from {school.grades}, combining modern
            STEM learning with Islamic education in an organised, caring campus for boys and girls.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary shadow-glow transition-transform hover:scale-105"
            >
              Admission enquiry <FiArrowRight />
            </a>
            <a
              href={`https://wa.me/${school.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/15"
            >
              <FaWhatsapp className="text-lg" /> WhatsApp us
            </a>
          </div>

          <a
            href={school.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-3 text-sm font-medium text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20"
          >
            <FiMapPin className="shrink-0" /> {school.address}
          </a>
        </div>

        <dl className="fade-up mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-4 backdrop-blur"
            >
              <dt className="text-xs uppercase tracking-wide text-primary-foreground/70">
                {h.label}
              </dt>
              <dd className="mt-1 font-display text-sm font-semibold text-primary-foreground">
                {h.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
