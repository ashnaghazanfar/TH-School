import classroom1 from "@/assets/classroom-1.jpg.asset.json";
import classroom2 from "@/assets/classroom-2.jpg.asset.json";

const photos = [
  {
    url: classroom1.url,
    alt: "Middle-grade students seated at desks in a T.H Grammar School classroom",
    caption: "Middle-school classroom",
  },
  {
    url: classroom2.url,
    alt: "Young primary students in uniform inside a colourful T.H Grammar School classroom",
    caption: "Primary section",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Inside our classrooms
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          A glimpse of everyday learning at our Nazimabad campus.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {photos.map((p) => (
            <figure
              key={p.url}
              className="group overflow-hidden rounded-2xl border border-primary/15 shadow-card"
            >
              <img
                src={p.url}
                alt={p.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-80"
              />
              <figcaption className="bg-card px-5 py-3 text-sm font-medium text-foreground">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
