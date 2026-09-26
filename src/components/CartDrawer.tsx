import { useEffect } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Minus, Plus, X, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/lib/shopify";

export function CartDrawer() {
  const { items, isLoading, isSyncing, isOpen, setOpen, updateQuantity, removeItem, getCheckoutUrl, syncCart } = useCartStore();
  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const total = items.reduce((s, i) => s + parseFloat(i.price.amount) * i.quantity, 0);
  const currency = items[0]?.price.currencyCode || "INR";

  useEffect(() => {
    if (isOpen) syncCart();
  }, [isOpen, syncCart]);

  const checkout = () => {
    const url = getCheckoutUrl();
    if (url) {
      window.open(url, "_blank");
      setOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex h-full w-full flex-col bg-background sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Your Bag</SheetTitle>
          <SheetDescription>{totalItems === 0 ? "Your bag is empty" : `${totalItems} item${totalItems !== 1 ? "s" : ""}`}</SheetDescription>
        </SheetHeader>
        {items.length === 0 ? (
          <div className="flex flex-1 items-center justify-center text-muted-foreground">Nothing here yet.</div>
        ) : (
          <>
            <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-4">
              {items.map((item) => (
                <div key={item.variantId} className="flex gap-4 border-b pb-5">
                  <div className="h-20 w-20 shrink-0 bg-card">
                    {item.product.node.images.edges[0] && (
                      <img src={item.product.node.images.edges[0].node.url} alt={item.product.node.title} className="h-full w-full object-cover" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold tracking-wide">{item.product.node.title}</p>
                    <p className="text-sm text-muted-foreground">{item.selectedOptions.map((o) => o.value).join(" · ")}</p>
                    <p className="mt-1 text-sm">{formatPrice(item.price.amount, item.price.currencyCode)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button aria-label="Decrease" className="border p-1" onClick={() => updateQuantity(item.variantId, item.quantity - 1)}><Minus className="h-3 w-3" /></button>
                      <span className="w-6 text-center text-sm">{item.quantity}</span>
                      <button aria-label="Increase" className="border p-1" onClick={() => updateQuantity(item.variantId, item.quantity + 1)}><Plus className="h-3 w-3" /></button>
                    </div>
                  </div>
                  <button aria-label="Remove" className="self-start text-muted-foreground" onClick={() => removeItem(item.variantId)}><X className="h-4 w-4" /></button>
                </div>
              ))}
            </div>
            <div className="space-y-4 border-t p-4">
              <div className="flex justify-between"><span className="eyebrow">Subtotal</span><span className="font-semibold">{formatPrice(String(total), currency)}</span></div>
              <button onClick={checkout} disabled={isLoading || isSyncing} className="flex w-full items-center justify-center bg-primary py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground disabled:opacity-60">
                {isLoading || isSyncing ? <Loader2 className="h-4 w-4" /> : "Checkout"}
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
