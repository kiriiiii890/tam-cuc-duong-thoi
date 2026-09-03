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
            Bộ bài tam cúc 32 lá vẽ lại từ đầu: bộ tướng cũ đặt vào đời sống hôm nay, in offset trên
            giấy cán mờ. Luật in kèm trong hộp, mở ra là chơi được ván đầu.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#goi-mua">
              Mua ngay - 800.000₫
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
