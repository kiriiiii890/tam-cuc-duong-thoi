import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartProvider";
import CartDrawer from "@/components/cart/CartDrawer";
import PagePreloader from "@/components/PagePreloader";

export const metadata: Metadata = {
  title: "Tam Cúc Đương Thời — Bộ bài tam cúc 32 lá vẽ lại từ đầu",
  description:
    "Bộ bài tam cúc 32 lá vẽ lại từ đầu: bộ tướng cũ đặt vào đời sống hôm nay, in offset trên giấy cán mờ. Luật in kèm trong hộp, mở ra là chơi được ván đầu.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <PagePreloader />
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
