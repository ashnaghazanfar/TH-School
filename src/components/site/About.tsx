import { FiBookOpen, FiUsers, FiAward } from "react-icons/fi";
import { school } from "@/data/school";

const points = [
  {
    icon: <FiBookOpen />,
    title: "Simple daily lessons",
    text: "Instructors make routine textbook topics easy to comprehend, building solid foundational understanding across all basic subjects.",
  },
  {
    icon: <FiUsers />,
    title: "Co-education campus",
    text: "An organised educational setting for young boys and girls from Play Group through Grade 8 under the Karachi Board.",
  },
  {
    icon: <FiAward />,
    title: "Ethics with technology",
    text: "Modern STEM education runs alongside traditional Islamic education, developing technical capability and personal character.",
  },
];

export function About() {
  return (
    <section id="about" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            About our school
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Located in {school.area}, {school.city}, this co-ed campus is a reliable choice for
            parents looking for primary and middle-tier education. Under the leadership of Principal{" "}
            <strong className="font-semibold text-foreground">{school.principal}</strong>, students
            learn in a structured, supportive environment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {points.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-xl text-primary-foreground">
                {p.icon}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
