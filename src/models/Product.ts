export class PriceMatrix {
  qty: number = 0;
  price: number = 0;
}

export class Product {
  id: string = "";
  name: string = "";
  images?: string[] = [""];
  url?: string;
  description?: string;
  category: string = "";
  minOrder?: number;
  priceSizeRef?: string;
  priceMatrix?: PriceMatrix[];
}
