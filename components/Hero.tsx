import { withBasePath } from "@/lib/basePath";

export default function Hero() {
  const bgFillStyle = {
    backgroundImage: `url('${withBasePath("/images/bg-1.png")}')`,
    WebkitMaskImage: `url('${withBasePath("/images/shawdow.png")}')`,
    maskImage: `url('${withBasePath("/images/shawdow.png")}')`,
  };

  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-fill" style={bgFillStyle} />
      </div>
      <div className="wrap">
        <div>
          <div className="hero-eyebrow">32 lá · Bài giấy · In tại Việt Nam</div>
          <h1>
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
