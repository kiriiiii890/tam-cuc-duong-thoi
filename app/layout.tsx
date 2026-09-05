import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartProvider";
import CartDrawer from "@/components/cart/CartDrawer";
import PagePreloader from "@/components/PagePreloader";
import FontReady from "@/components/FontReady";

export const metadata: Metadata = {
  title: "Tam Cúc Đương Thời - Bộ bài tam cúc 32 lá vẽ lại từ đầu",
  description:
    "Bộ bài tam cúc 32 lá vẽ lại từ đầu: bộ tướng cũ đặt vào đời sống hôm nay, in offset trên giấy cán mờ. Luật in kèm trong hộp, mở ra là chơi được ván đầu.",
};

// Preloaded ahead of the Google Fonts @import in globals.css so Lora doesn't
// show a flash of unstyled text on first paint. Only the "vietnamese" and
// "latin" subset files are preloaded — the two that actually cover this
// site's copy; these hashed gstatic URLs are pinned to the current font
// version and will need re-fetching (see app/globals.css's @import line)
// if that version ever changes.
const FONT_PRELOADS = [
  "https://fonts.gstatic.com/s/lora/v37/0QI6MX1D_JOuGQbT0gvTJPa787z5vBJOkq1umA.woff2",
  "https://fonts.gstatic.com/s/lora/v37/0QI6MX1D_JOuGQbT0gvTJPa787z5vBJBkq0.woff2",
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      {FONT_PRELOADS.map((href) => (
        <link key={href} rel="preload" as="font" type="font/woff2" href={href} crossOrigin="anonymous" />
      ))}
      <body>
        <FontReady />
        <PagePreloader />
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
