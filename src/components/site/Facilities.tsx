import { FiMonitor, FiBookOpen, FiMusic } from "react-icons/fi";
import { MdOutlineScience, MdOutlineMosque, MdOutlineColorLens } from "react-icons/md";
import { RotatingCards } from "@/components/RotatingCards";

const facilities = [
  {
    icon: <FiMonitor />,
    title: "Computer Lab",
    description: "Hands-on computer sessions that build practical digital skills from an early age.",
  },
  {
    icon: <FiBookOpen />,
    title: "Library",
    description: "A quiet reading space stocked with age-appropriate books for every grade level.",
  },
  {
    icon: <MdOutlineColorLens />,
    title: "Arts & Crafts",
    description: "A creative art section where students explore drawing, colour and craft work.",
  },
  {
    icon: <FiMusic />,
    title: "Music Room",
    description: "A dedicated music room for rhythm, singing and confident stage performance.",
  },
  {
    icon: <MdOutlineScience />,
    title: "STEM Education",
    description: "Modern STEM activities that turn science and maths concepts into real projects.",
  },
  {
    icon: <MdOutlineMosque />,
    title: "Islamic Education",
    description: "Traditional Islamic studies that nurture ethics, manners and personal values.",
  },
];

export function Facilities() {
  return (
    <section id="facilities" className="overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Facilities on campus
          </h2>
          <p className="mt-4 text-muted-foreground">
            Drag the cards to spin the ring and explore what students get access to. More facilities
            will be added as the campus grows.
          </p>
        </div>

        <div className="mt-6">
          <RotatingCards items={facilities} />
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <div
              key={f.title}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground"
            >
              <span className="text-lg text-primary">{f.icon}</span>
              {f.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
