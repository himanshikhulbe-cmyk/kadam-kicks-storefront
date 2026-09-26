import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useCartStore } from "@/stores/cartStore";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/art-stories", label: "Art Stories" },
  { to: "/lookbook", label: "Lookbook" },
  { to: "/our-story", label: "Our Story" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const count = useCartStore((s) => s.items.reduce((n, i) => n + i.quantity, 0));
  const setCartOpen = useCartStore((s) => s.setOpen);

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-5 py-4 lg:px-8">
        <Link to="/" className="text-foreground"><Logo /></Link>
        <nav className="hidden justify-center gap-8 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} className="eyebrow py-1 text-foreground/75 hover:text-primary" activeProps={{ className: "!text-primary border-b border-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="col-start-3 flex items-center gap-4">
          <button aria-label="Wishlist" className="hidden sm:block"><Heart className="h-5 w-5" /></button>
          <Link to="/shop" aria-label="Search" className="hidden sm:block"><Search className="h-5 w-5" /></Link>
          <button aria-label="Account" className="hidden sm:block"><User className="h-5 w-5" /></button>
          <button aria-label="Open bag" className="relative" onClick={() => setCartOpen(true)}>
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">{count}</span>}
          </button>
          <button aria-label="Menu" className="lg:hidden" onClick={() => setOpen(!open)}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col border-t px-5 py-4 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="eyebrow py-3">{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
