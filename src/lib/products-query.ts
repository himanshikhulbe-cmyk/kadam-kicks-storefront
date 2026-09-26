import { queryOptions } from "@tanstack/react-query";
import { fetchProduct, fetchProducts } from "./shopify";

export const productsQuery = queryOptions({ queryKey: ["products"], queryFn: () => fetchProducts(20) });
export const productQuery = (handle: string) => queryOptions({ queryKey: ["product", handle], queryFn: () => fetchProduct(handle) });
