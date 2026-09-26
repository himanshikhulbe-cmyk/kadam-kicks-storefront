import { createFileRoute } from "@tanstack/react-router";
import { ProductGrid } from "./index";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Sneakers — KADAM" },
      { name: "description", content: "Shop the KADAM Signature Collection: six premium sneakers inspired by Indian folk art." },
      { property: "og:title", content: "Shop Sneakers — KADAM" },
      { property: "og:description", content: "Six premium sneakers inspired by Indian folk art." },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <p className="eyebrow text-gold">Shop</p>
      <h1 className="mt-3 text-5xl font-bold md:text-7xl">All Sneakers</h1>
      <p className="mt-4 mb-14 text-muted-foreground">Five artistic traditions. One contemporary silhouette.</p>
      <ProductGrid />
    </section>
  );
}
