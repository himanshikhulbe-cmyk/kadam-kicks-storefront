import { createFileRoute, Link } from "@tanstack/react-router";
import dhara from "@/assets/p-dhara.jpg";
import rang from "@/assets/p-rang.jpg";
import van from "@/assets/p-van.jpg";
import chitra from "@/assets/p-chitra.jpg";
import rooh from "@/assets/p-rooh.jpg";

export const Route = createFileRoute("/art-stories")({
  head: () => ({
    meta: [
      { title: "Art Stories — Five Indian Traditions | KADAM" },
      { name: "description", content: "The Warli, Madhubani, Gond, Pattachitra and Kalamkari traditions behind every KADAM sneaker." },
      { property: "og:title", content: "Art Stories — KADAM" },
      { property: "og:description", content: "The five Indian art traditions behind KADAM." },
    ],
  }),
  component: ArtStories,
});

const STORIES = [
  { art: "Warli", region: "Maharashtra", img: dhara, handle: "kadam-dhara", name: "KADAM DHARA", text: "Circles, triangles and lines drawn in white rice paste on mud walls. Warli depicts daily life — farming, dance, the sun and the village tree — with extraordinary economy." },
  { art: "Madhubani", region: "Bihar", img: rang, handle: "kadam-rang", name: "KADAM RANG", text: "Traditionally painted by women of the Mithila region, Madhubani fills every space with fish, birds and flowers in fine double outlines and natural pigments." },
  { art: "Gond", region: "Madhya Pradesh", img: van, handle: "kadam-van", name: "KADAM VAN", text: "Gond artists fill animals and trees with patterns of dots and dashes, believing that a good image brings good luck. Nature is always alive, always moving." },
  { art: "Pattachitra", region: "Odisha", img: chitra, handle: "kadam-chitra", name: "KADAM CHITRA", text: "Painted on treated cloth, Pattachitra tells mythological stories with bold outlines, ornamental borders and a palette of deep red, ochre and black." },
  { art: "Kalamkari", region: "Andhra Pradesh", img: rooh, handle: "kadam-rooh", name: "KADAM ROOH", text: "'Kalam' means pen. Artisans hand-draw and block-print trees of life and flowing vines with vegetable dyes — indigo, madder and turmeric." },
];

function ArtStories() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-20 pb-10 lg:px-8">
        <p className="eyebrow text-gold">Art Stories</p>
        <h1 className="mt-3 max-w-3xl text-5xl font-bold md:text-7xl">Five traditions. Each with a voice.</h1>
      </section>
      {STORIES.map((s, i) => (
        <section key={s.art} className={i % 2 ? "bg-card" : ""}>
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 lg:px-8">
            <img src={s.img} alt={`${s.name} — ${s.art} art sneaker`} loading="lazy" className={`aspect-square w-full object-cover ${i % 2 ? "md:order-2" : ""}`} />
            <div>
              <p className="eyebrow text-gold">{s.region}</p>
              <h2 className="mt-3 text-4xl font-bold md:text-6xl">{s.art}</h2>
              <p className="mt-6 max-w-md text-muted-foreground">{s.text}</p>
              <Link to="/product/$handle" params={{ handle: s.handle }} className="eyebrow mt-10 inline-block border-b border-foreground pb-1">Shop {s.name}</Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
