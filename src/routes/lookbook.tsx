import { createFileRoute } from "@tanstack/react-router";
import look1 from "@/assets/look-1.jpg";
import hero from "@/assets/hero.jpg";
import sig from "@/assets/p-signature.jpg";
import chitra from "@/assets/p-chitra.jpg";

export const Route = createFileRoute("/lookbook")({
  head: () => ({
    meta: [
      { title: "Lookbook: Stepwells & Streets — KADAM" },
      { name: "description", content: "The KADAM lookbook, shot in Rajasthan's stepwells in golden light." },
      { property: "og:title", content: "Lookbook — KADAM" },
      { property: "og:description", content: "Stepwells & Streets: the KADAM lookbook." },
    ],
  }),
  component: Lookbook,
});

function Lookbook() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <p className="eyebrow text-gold">Lookbook · Vol. 01</p>
      <h1 className="mt-3 text-5xl font-bold md:text-7xl">Stepwells &amp; Streets</h1>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <img src={look1} alt="Model on stepwell stairs in KADAM sneakers" loading="lazy" className="aspect-[3/4] w-full object-cover md:col-span-1 md:row-span-2 md:h-full" />
        <img src={hero} alt="KADAM DHARA still life" loading="lazy" className="aspect-video w-full object-cover md:col-span-2" />
        <img src={sig} alt="KADAM SIGNATURE" loading="lazy" className="aspect-square w-full bg-card object-cover" />
        <img src={chitra} alt="KADAM CHITRA" loading="lazy" className="aspect-square w-full bg-card object-cover" />
      </div>
    </section>
  );
}
