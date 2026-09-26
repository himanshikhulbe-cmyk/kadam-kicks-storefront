import { cn } from "@/lib/utils";

/** KADAM wordmark: the first A carries a small diamond (a nod to Warli geometry) in place of its crossbar. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("font-display text-2xl font-bold tracking-[0.18em] leading-none", className)} aria-label="KADAM">
      K
      <span className="relative inline-block">
        A
        <span aria-hidden className="absolute left-1/2 top-[58%] h-[0.16em] w-[0.16em] -translate-x-1/2 rotate-45 bg-gold" />
      </span>
      DAM
    </span>
  );
}
