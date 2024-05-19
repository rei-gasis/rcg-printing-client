export class Category {
  id: string = "";
  name: string = "";
  image: string = "";
  variants?: Variant[];
  url?: string;
  description?: string;
  minOrder?: number;
  priceSizeRef?: string;
  priceMatrix?: PriceMatrix[];
}

export class Variant {
  type: string = "";
  image: string = "";
}

export class PriceMatrix {
  qty: number = 0;
  price: number = 0;
}
