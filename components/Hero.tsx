import { withBasePath } from "@/lib/basePath";

export default function Hero() {
  const bgFillStyle = {
    backgroundImage: `url('${withBasePath("/images/bg-1.png")}')`,
    WebkitMaskImage: `url('${withBasePath("/images/shawdow.png")}')`,
    maskImage: `url('${withBasePath("/images/shawdow.png")}')`,
  };
  // Mobile swaps in a plain (unmasked) background — see the
  // `.hero-bg-fill-mobile` / `@media (max-width: 640px)` rules in
  // globals.css for why the desktop mask shape doesn't work there.
  const bgFillStyleMobile = {
    backgroundImage: `url('${withBasePath("/images/bg-4.png")}')`,
  };

  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-fill hero-bg-fill-desktop" style={bgFillStyle} />
        <div className="hero-bg-fill hero-bg-fill-mobile" style={bgFillStyleMobile} />
      </div>
      <div className="wrap">
        <div>
          <div className="hero-eyebrow">32 lá · Bài giấy · In tại Việt Nam</div>
          <h1 className="uses-webfont">
            Tìm về hồn xưa
            <br />
            trong nếp bài
            <br />
            sờn cũ
          </h1>
          <p>
            Vẽ lại từ những quân bài đã sờn cũ, đã lặng lẽ nằm quên trong ngăn tủ - nơi 32 lá bài dân
            gian bước ra đời sống hôm nay, mang theo một hình hài hoàn toàn mới.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#goi-mua">
              Mua ngay - 828.626₫
            </a>
            <a className="btn btn-secondary" href="#san-pham">
              Xem chi tiết
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
