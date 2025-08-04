
  // src/types/Product.d.ts
  import type { Product } from "@/types/Product";

export interface Product {
  name: string;
  category: string;
  status: string;
  tags?: string[];
}
