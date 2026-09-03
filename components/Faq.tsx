"use client";

import { useState } from "react";

const FAQ_DATA: [string, string][] = [
  [
    "Chưa từng chơi tam cúc thì bắt đầu thế nào?",
    "Trong hộp có tờ luật gấp bốn trang: thứ bậc bộ tướng, cách kết đôi kết ba, cách tính điểm và ba tình huống thường gặp. Đọc năm phút là vào được ván đầu.",
  ],
  [
    "Bộ bài có bao nhiêu lá, có đúng tam cúc truyền thống không?",
    "Đúng 32 lá, chia hai màu đỏ và đen, thứ bậc giữ nguyên như tam cúc cổ. Chỉ phần hình vẽ là mới.",
  ],
  [
    "Giấy có bền không, chơi lâu có xù mép?",
    "Giấy ivory 300gsm cán mờ hai mặt, bo góc 3 mm. Chơi thường xuyên vài trăm ván mép vẫn phẳng, miễn là không để hộp ẩm.",
  ],
  [
    "Đơn hàng giao trong bao lâu?",
    "Nội thành Hà Nội và TP.HCM 1–2 ngày, các tỉnh khác 2–4 ngày. Gói hai bộ và combo được miễn phí vận chuyển.",
  ],
  [
    "Có đổi trả được không?",
    "Trong 7 ngày kể từ khi nhận, nếu hộp còn nguyên seal. Nếu bài bị lỗi in, chúng tôi đổi bộ mới và chịu phí gửi hai chiều.",
  ],
  [
    "Mua làm quà tặng thì có gói không?",
    'Mỗi hộp đã kèm thiệp trắng để viết tay. Nếu cần gói giấy và dây buộc, chọn ô "gói quà" ở bước thanh toán.',
  ],
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ borderTop: "2px solid var(--color-divider)" }}>
      <div className="section">
        <div className="faq-layout">
          <div className="faq-heading">
            <h6 className="section-kicker" style={{ marginBottom: 12 }}>
              07 - Câu hỏi thường gặp
            </h6>
            <h2>
              Trước khi
              <br />
              bấm mua
            </h2>
          </div>
          <div>
            {FAQ_DATA.map(([q, a], i) => {
              const isOpen = openIndex === i;
              return (
                <div className="faq-item" key={q}>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="q-text">{q}</span>
                    <span className="q-sign">{isOpen ? "–" : "+"}</span>
                  </button>
                  {isOpen && <p className="faq-a">{a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
