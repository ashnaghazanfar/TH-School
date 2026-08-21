import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { Facilities } from "@/components/site/Facilities";
import { Academics } from "@/components/site/Academics";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "T.H Grammar School | Nazimabad, Karachi";
const description =
  "T.H Grammar School, Nazimabad Karachi — co-ed Karachi Board school for Play Group to Grade 8 with computer lab, library, STEM and Islamic education. Fee from PKR 2,000/month.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Facilities />
        <Academics />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
