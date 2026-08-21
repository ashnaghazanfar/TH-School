import { FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import schoolPhoto from "@/assets/school.jpg.asset.json";
import { school, highlights } from "@/data/school";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-secondary blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            {school.curriculum} · {school.genderType}
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-foreground md:text-6xl">
            A strong foundation for every child in{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">Nazimabad</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {school.name} delivers structured instruction from {school.grades}, combining modern
            STEM learning with Islamic education in an organised, caring campus for boys and girls.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Admission enquiry <FiArrowRight />
            </a>
            <a
              href={`https://wa.me/${school.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              <FaWhatsapp className="text-lg" /> WhatsApp us
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-xl border border-border bg-card p-4">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{h.label}</dt>
                <dd className="mt-1 font-display text-sm font-semibold text-foreground">
                  {h.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="fade-up relative">
          <div className="float-slow overflow-hidden rounded-3xl border border-primary/15 shadow-card">
            <img
              src={schoolPhoto.url}
              alt="T.H Grammar School campus building in Nazimabad, Karachi"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <a
            href={school.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="absolute -bottom-5 left-5 inline-flex max-w-[85%] items-center gap-2 rounded-xl bg-card px-4 py-3 text-sm font-medium text-foreground shadow-card transition-colors hover:text-primary"
          >
            <FiMapPin className="shrink-0 text-primary" /> {school.address}
          </a>
        </div>
      </div>
    </section>
  );
}
