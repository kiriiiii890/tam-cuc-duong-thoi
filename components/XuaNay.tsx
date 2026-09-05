import { withBasePath } from "@/lib/basePath";

export default function XuaNay() {
  return (
    <section className="xuanay-section">
      <div className="xuanay-grid">
        <div
          className="xuanay-panel xuanay-panel-old"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(40, 18, 83, 0.72), rgba(40, 18, 83, 0.85)), url('${withBasePath("/images/tamcuc.png")}')`,
          }}
        >
          <span className="xuanay-label">Xưa</span>
          <h3 className="xuanay-title uses-webfont">32 quân bài, hai phe Đỏ – Đen</h3>
          <p className="xuanay-body">
            Ra đời từ đời sống dân dã vùng đồng bằng Bắc Bộ, Tam Cúc là sáng tạo bài lá rất riêng
            của người Việt - chữ Hán, chữ Nôm khắc trên nền giấy bồi, luật chơi giản dị mà ai cũng
            chơi được, từ trẻ nhỏ đến người già.
          </p>
        </div>
        <div className="xuanay-panel xuanay-panel-new">
          <span className="xuanay-label">Nay</span>
          <h3 className="xuanay-title uses-webfont">Vẫn luật chơi ấy, một hình hài mới</h3>
          <p className="xuanay-body">
            Vẫn 32 quân, vẫn hai phe, vẫn cách chơi nguyên bản - nhưng mỗi nhân vật nay mang gương
            mặt của đời sống hôm nay. Bảng màu rực rỡ, nét vẽ đương đại, một hồn xưa trong tấm áo
            hoàn toàn mới.
          </p>
        </div>
      </div>
    </section>
  );
}
