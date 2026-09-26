import { Link } from "@tanstack/react-router";
import { type ShopifyProduct, formatPrice, ART_BY_HANDLE } from "@/lib/shopify";

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const p = product.node;
  const img = p.images.edges[0]?.node;
  return (
    <Link to="/product/$handle" params={{ handle: p.handle }} className="group block">
      <div className="aspect-square overflow-hidden bg-card">
        {img && <img src={img.url} alt={img.altText ?? p.title} loading="lazy" className="h-full w-full object-cover" />}
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="eyebrow text-gold">{ART_BY_HANDLE[p.handle] ?? "KADAM"}</p>
          <h3 className="mt-1 font-sans text-base font-semibold tracking-wider group-hover:text-primary">{p.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
        </div>
        <span className="shrink-0 text-sm font-semibold">{formatPrice(p.priceRange.minVariantPrice.amount, p.priceRange.minVariantPrice.currencyCode)}</span>
      </div>
    </Link>
  );
}
