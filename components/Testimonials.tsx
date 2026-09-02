type Testimonial = {
  stars: string;
  quote: string;
  initials: string;
  name: string;
  meta: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    stars: "★★★★★",
    quote:
      "Mua để bày, cuối cùng cả nhà chơi hết buổi chiều mùng hai. Bà tôi nhận ra ngay bộ tướng dù vẽ khác hẳn.",
    initials: "NH",
    name: "Ngọc Hà",
    meta: "Hà Nội · mua gói hai bộ",
  },
  {
    stars: "★★★★★",
    quote:
      "Giấy dày hơn tôi tưởng, xào bài không dính. Tờ luật viết gọn, bạn tôi chưa chơi bao giờ vẫn theo được từ ván hai.",
    initials: "MQ",
    name: "Minh Quân",
    meta: "TP.HCM · mua combo bàn chơi",
  },
  {
    stars: "★★★★☆",
    quote: "Tặng đồng nghiệp, ai cũng hỏi mua ở đâu. Chỉ mong có thêm hộp đựng cỡ lớn để cất cả ba bộ.",
    initials: "TT",
    name: "Thu Trang",
    meta: "Đà Nẵng · mua một bộ",
  },
];

export default function Testimonials() {
  return (
    <section id="danh-gia" className="section">
      <h6 className="section-kicker">06 — Người đã chơi</h6>
      <div className="testi-grid">
        {TESTIMONIALS.map((t) => (
          <div className="testi-card" key={t.name}>
            <div className="testi-stars">{t.stars}</div>
            <p>{t.quote}</p>
            <div className="testi-person">
              <div className="avatar">{t.initials}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-meta">{t.meta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
