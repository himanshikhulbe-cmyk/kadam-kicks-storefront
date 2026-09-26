import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — KADAM" },
      { name: "description", content: "Why KADAM exists: carrying India's living art traditions into contemporary sneaker culture." },
      { property: "og:title", content: "Our Story — KADAM" },
      { property: "og:description", content: "India, Reimagined — the story behind KADAM." },
    ],
  }),
  component: OurStory,
});

function OurStory() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <p className="eyebrow text-gold">Our Story</p>
        <h1 className="mt-4 text-5xl font-bold md:text-7xl">Kadam means “step”.</h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">We believe India's folk art shouldn't live only in museums and souvenir shops. It belongs in motion — on the street, in the everyday. KADAM pairs a single, refined sneaker silhouette with the country's most enduring visual languages.</p>
      </section>
      <img src={hero} alt="KADAM sneaker in a warm Indian interior" loading="lazy" className="h-[60vh] w-full object-cover" />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-3 lg:px-8">
        {[
          ["Respect the source", "Each design begins with the tradition's own rules — its shapes, its colours, its restraint."],
          ["Modern first", "A clean low-top built for daily wear. The art leads; the shoe never shouts."],
          ["Made to last", "Premium leather and suede, stitched cupsoles, and finishing we'd be proud to wear ourselves."],
        ].map(([t, d]) => (
          <div key={t} className="border-t pt-6">
            <h2 className="font-sans text-sm font-bold uppercase tracking-[0.2em]">{t}</h2>
            <p className="mt-3 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
      <div className="pb-24 text-center">
        <Link to="/shop" className="inline-block bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground">Shop the Collection</Link>
      </div>
    </>
  );
}
