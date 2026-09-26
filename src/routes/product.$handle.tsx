import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { productQuery } from "@/lib/products-query";
import { formatPrice, ART_BY_HANDLE } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

export const Route = createFileRoute("/product/$handle")({
  head: ({ params }) => {
    const name = params.handle.replace(/-/g, " ").toUpperCase();
    return {
      meta: [
        { title: `${name} — KADAM` },
        { name: "description", content: `${name}: a premium KADAM sneaker inspired by Indian traditional art.` },
        { property: "og:title", content: `${name} — KADAM` },
        { property: "og:description", content: "Premium sneakers inspired by Indian traditional art." },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { handle } = Route.useParams();
  const { data: product, isLoading } = useQuery(productQuery(handle));
  const addItem = useCartStore((s) => s.addItem);
  const setOpen = useCartStore((s) => s.setOpen);
  const cartLoading = useCartStore((s) => s.isLoading);
  const [variantId, setVariantId] = useState<string | null>(null);

  if (isLoading) return <p className="px-5 py-24 text-center text-muted-foreground">Loading…</p>;
  if (!product) return (
    <div className="px-5 py-24 text-center">
      <p className="text-muted-foreground">Product not found.</p>
      <Link to="/shop" className="eyebrow mt-6 inline-block border-b pb-1">Back to shop</Link>
    </div>
  );

  const p = product.node;
  const variants = p.variants.edges.map((e) => e.node);
  const selected = variants.find((v) => v.id === variantId);
  const img = p.images.edges[0]?.node;

  const add = async () => {
    if (!selected) {
      toast("Please select a size", { position: "top-center" });
      return;
    }
    await addItem({ product, variantId: selected.id, variantTitle: selected.title, price: selected.price, quantity: 1, selectedOptions: selected.selectedOptions });
    setOpen(true);
  };

  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[3fr_2fr] lg:px-8">
      <div className="bg-card">{img && <img src={img.url} alt={img.altText ?? p.title} className="aspect-square w-full object-cover" />}</div>
      <div>
        <p className="eyebrow text-gold">{ART_BY_HANDLE[p.handle] ?? "KADAM"}</p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">{p.title}</h1>
        <p className="mt-4 text-xl font-semibold">{formatPrice(p.priceRange.minVariantPrice.amount, p.priceRange.minVariantPrice.currencyCode)}</p>
        <p className="mt-6 text-muted-foreground">{p.description}</p>
        <div className="mt-10">
          <p className="eyebrow mb-3">Select size</p>
          <div className="grid grid-cols-3 gap-2">
            {variants.map((v) => (
              <button key={v.id} disabled={!v.availableForSale} onClick={() => setVariantId(v.id)}
                className={`border py-3 text-sm disabled:opacity-40 ${variantId === v.id ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground"}`}>
                {v.title}
              </button>
            ))}
          </div>
        </div>
        <button onClick={add} disabled={cartLoading} className="mt-8 w-full bg-primary py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground disabled:opacity-60">
          {cartLoading ? "Adding…" : "Add to Bag"}
        </button>
        <ul className="mt-10 space-y-2 border-t pt-6 text-sm text-muted-foreground">
          <li>Premium leather &amp; suede upper</li>
          <li>Cushioned rubber cupsole</li>
          <li>Free shipping across India · 30-day exchanges</li>
        </ul>
        <div className="mt-10 border-t pt-6">
          <p className="eyebrow">Reviews</p>
          <p className="mt-2 text-sm text-muted-foreground">No reviews yet.</p>
        </div>
      </div>
    </section>
  );
}
