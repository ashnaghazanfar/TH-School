import { school } from "@/data/school";

const stages = [
  {
    stage: "Early Years",
    grades: "Play Group – Kindergarten",
    text: "Play-based learning that introduces letters, numbers and classroom routines gently.",
  },
  {
    stage: "Primary",
    grades: "Grade 1 – Grade 5",
    text: "Core subjects taught with simple daily lessons and regular practice in English, Maths, Science and Urdu.",
  },
  {
    stage: "Middle",
    grades: "Grade 6 – Grade 8",
    text: "Board-aligned preparation with STEM projects, computer skills and Islamic studies.",
  },
];

export function Academics() {
  return (
    <section id="academics" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Academic programme
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Structured instruction under the {school.curriculum}, with a clear path from the earliest
          years to middle school.
        </p>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {stages.map((s, i) => (
            <li
              key={s.stage}
              className="relative rounded-2xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-card"
            >
              <span className="font-display text-5xl font-bold text-accent">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{s.stage}</h3>
              <p className="text-sm font-medium text-primary">{s.grades}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-gradient-brand p-8 text-primary-foreground shadow-card">
          <div>
            <p className="font-display text-2xl font-bold">Monthly fee starts from {school.feeFrom}</p>
            <p className="mt-1 text-sm opacity-85">
              Contact the school for admission details and grade availability.
            </p>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-background px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105"
          >
            Get admission info
          </a>
        </div>
      </div>
    </section>
  );
}
