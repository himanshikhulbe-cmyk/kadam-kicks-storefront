import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[2fr_1fr_1fr] lg:px-8">
        <div>
          <Logo className="text-3xl" />
          <p className="mt-4 max-w-sm text-sm text-ink-foreground/70">India, Reimagined. Traditional Indian artistry, translated into contemporary premium sneakers.</p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <span className="eyebrow text-gold">Explore</span>
          <Link to="/shop">Shop</Link>
          <Link to="/art-stories">Art Stories</Link>
          <Link to="/lookbook">Lookbook</Link>
          <Link to="/our-story">Our Story</Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <span className="eyebrow text-gold">Care</span>
          <span>Free shipping across India</span>
          <span>30-day exchanges</span>
          <span>Secure checkout</span>
        </div>
      </div>
      <div className="border-t border-ink-foreground/15 px-5 py-5 text-center text-xs text-ink-foreground/60">© {new Date().getFullYear()} KADAM. All rights reserved.</div>
    </footer>
  );
}
