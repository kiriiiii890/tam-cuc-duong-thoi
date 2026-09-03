export type Product = {
  id: string;
  tag: string;
  name: string;
  price: number;
  sub: string;
  features: string[];
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "single",
    tag: "Một bộ",
    name: "Một bộ",
    price: 828626,
    sub: "Cho người mua thử",
    features: ["1 bộ 32 lá + hộp cứng", "Tờ luật + thiệp trắng", "Giao 2–4 ngày"],
  },
  {
    id: "double",
    tag: "Hai bộ",
    name: "Hai bộ",
    price: 1500000,
    sub: "Tiết kiệm 100.000₫ · một bộ để tặng",
    features: ["2 bộ 32 lá + 2 hộp cứng", "Tờ luật + thiệp trắng mỗi hộp", "Miễn phí vận chuyển"],
    featured: true,
  },
  {
    id: "combo",
    tag: "Combo bàn chơi",
    name: "Combo bàn chơi",
    price: 2200000,
    sub: "Tiết kiệm 200.000₫ · đủ cho một bàn bốn người",
    features: ["3 bộ 32 lá + 3 hộp cứng", "Khăn chơi vải bố 60 × 60 cm", "Miễn phí vận chuyển"],
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
