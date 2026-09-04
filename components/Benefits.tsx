type Benefit = { title: string; body: string };

const BENEFITS: Benefit[] = [
  {
    title: "Cầm lên là chơi được ngay",
    body: "Không cần ai dạy. Mở hộp, đọc tờ luật gấp bốn trang, năm phút sau đã vào ván đầu.",
  },
  {
    title: "Không lá nào là bản chỉnh sửa",
    body: "32 lá là 32 bức tranh vẽ tay riêng biệt, lên màu số từng chi tiết — không phải Photoshop lại bản gốc.",
  },
  {
    title: "Bền tay qua hàng trăm ván",
    body: "Giấy ivory 300gsm cán mờ hai mặt — xào bài trơn tay, mép không xù dù chơi suốt cả mùa Tết.",
  },
  {
    title: "Mở hộp ra là thành món quà",
    body: "Không cần giấy gói, không cần nơ. Hộp cứng in sẵn, kèm thiệp trắng để bạn viết đôi dòng gửi người nhận.",
  },
];

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="wrap section">
        <h2 className="benefits-title uses-webfont">Vì sao nên có một bộ</h2>
        <div className="benefits-grid">
          {BENEFITS.map((b) => (
            <div key={b.title}>
              <h4>{b.title}</h4>
              <p>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
