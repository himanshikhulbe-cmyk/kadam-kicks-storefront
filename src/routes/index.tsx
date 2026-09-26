import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { productsQuery } from "@/lib/products-query";
import { ProductCard } from "@/components/ProductCard";
import hero from "@/assets/hero.jpg";
import dhara from "@/assets/p-dhara.jpg";
import look1 from "@/assets/look-1.jpg";
import rooh from "@/assets/p-rooh.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KADAM — India, Reimagined. Premium Art Sneakers" },
      { name: "description", content: "Where timeless Indian artistry meets contemporary streetwear. Shop Warli, Madhubani, Gond, Pattachitra and Kalamkari sneakers." },
      { property: "og:title", content: "KADAM — India, Reimagined." },
      { property: "og:description", content: "Premium sneakers inspired by five Indian art traditions." },
    ],
  }),
  component: Home,
});

export function ProductGrid() {
  const { data, isLoading } = useQuery(productsQuery);
  if (isLoading) return <p className="text-muted-foreground">Loading collection…</p>;
  if (!data || data.length === 0) return <p className="text-muted-foreground">No products found</p>;
  return (
    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((p) => <ProductCard key={p.node.id} product={p} />)}
    </div>
  );
}

const TIMELINE = [
  { year: "Origin", text: "Folk artists across India painted walls, cloth and palm leaf to tell stories of harvest, gods and forests." },
  { year: "Study", text: "We spent time with the motifs — their rhythm, their restraint — before drawing a single line on a shoe." },
  { year: "Craft", text: "One clean, low-top silhouette. Premium leather and suede. Artwork placed with intent, never as decoration." },
  { year: "Today", text: "Five traditions, one KADAM. Made for streets that carry their history with them." },
];

function Home() {
  return (
    <>
      {/* Hero — static by request */}
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-ink">
        <img src={hero} alt="KADAM DHARA sneaker with Warli artwork" width={1920} height={1088} className="absolute inset-0 -z-10 h-full w-full object-cover object-right" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-5 lg:px-8">
          <p className="eyebrow text-gold">The Signature Collection</p>
          <h1 className="mt-5 max-w-2xl text-5xl font-bold leading-[0.95] text-ink-foreground sm:text-7xl lg:text-8xl">India, Reimagined.</h1>
          <p className="mt-6 max-w-md text-lg text-ink-foreground/80">Where timeless Indian artistry meets contemporary streetwear.</p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link to="/shop" className="bg-ink-foreground px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink">Shop the Drop</Link>
            <Link to="/our-story" className="eyebrow border-b border-gold pb-1 text-ink-foreground">Discover KADAM</Link>
          </div>
        </div>
      </section>

      {/* Signature collection */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-gold">Collection 01</p>
            <h2 className="mt-3 text-4xl font-bold md:text-6xl">Signature Collection</h2>
            <p className="mt-3 text-muted-foreground">Five artistic traditions. One contemporary silhouette.</p>
          </div>
          <Link to="/shop" className="eyebrow border-b border-foreground pb-1 self-start md:self-auto">View all</Link>
        </div>
        <ProductGrid />
      </section>

      {/* Art to sneaker */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 lg:px-8">
          <img src={dhara} alt="Warli artwork on KADAM DHARA" loading="lazy" className="aspect-square w-full object-cover" />
          <div>
            <p className="eyebrow text-gold">From wall to sole</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">A thousand-year-old line, redrawn for the street.</h2>
            <p className="mt-6 text-ink-foreground/75">Warli painters of Maharashtra used rice paste on mud walls to draw circles of dancers, trees and the sun. On KADAM DHARA, those same figures travel around the quarter panel in deep maroon — a circle that never ends.</p>
            <Link to="/art-stories" className="eyebrow mt-10 inline-block border-b border-gold pb-1">Read the art stories</Link>
          </div>
        </div>
      </section>

      {/* Create your KADAM */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-[1fr_1fr] lg:px-8">
        <div className="order-2 md:order-1">
          <p className="eyebrow text-gold">Coming soon</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Create Your KADAM</h2>
          <p className="mt-6 max-w-md text-muted-foreground">Choose your art tradition, your sole colour and your lace. Made-to-order customisation is in the studio now — tell us you're interested and we'll write when it opens.</p>
          <Link to="/shop" className="mt-10 inline-block bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground">Shop ready-to-wear</Link>
        </div>
        <img src={rooh} alt="KADAM ROOH Kalamkari sneaker" loading="lazy" className="order-1 aspect-square w-full bg-card object-cover md:order-2" />
      </section>

      {/* Lookbook teaser */}
      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-[2fr_3fr] lg:px-8">
          <img src={look1} alt="KADAM worn at a stepwell" loading="lazy" className="aspect-[3/4] w-full object-cover" />
          <div>
            <p className="eyebrow text-gold">Lookbook</p>
            <h2 className="mt-4 text-4xl font-bold md:text-6xl">Stepwells &amp; Streets</h2>
            <p className="mt-6 max-w-md text-muted-foreground">Shot in Rajasthan's ancient stepwells — sandstone, linen and golden hour.</p>
            <Link to="/lookbook" className="eyebrow mt-10 inline-block border-b border-foreground pb-1">View the lookbook</Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <p className="eyebrow text-gold">Brand story</p>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl">How KADAM is made</h2>
        <ol className="mt-14 grid gap-10 border-t pt-10 md:grid-cols-4">
          {TIMELINE.map((t, i) => (
            <li key={t.year}>
              <span className="font-display text-5xl text-gold">0{i + 1}</span>
              <h3 className="mt-3 font-sans text-sm font-bold uppercase tracking-[0.2em]">{t.year}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center">
          <h2 className="text-4xl font-bold md:text-6xl">Walk with a story.</h2>
          <p className="mx-auto mt-5 max-w-md text-primary-foreground/80">Every pair carries an art form that has survived centuries. Wear it forward.</p>
          <Link to="/shop" className="mt-10 inline-block bg-primary-foreground px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Shop the Drop</Link>
        </div>
      </section>
    </>
  );
}
