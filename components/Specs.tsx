const SPECS: [string, string][] = [
  ["Số lá", "32 lá, hai màu đỏ và đen"],
  ["Chất liệu", "Giấy ivory 300gsm, cán mờ hai mặt"],
  ["Kích thước lá", "57 × 87 mm"],
  ["Kỹ thuật in", "Offset bốn màu, bo góc 3 mm"],
  ["Hộp đựng", "Giấy cứng, nắp gài, in một màu"],
  ["Kèm theo", "Tờ luật gấp bốn trang, thiệp trắng"],
  ["Trọng lượng", "180 g cả hộp"],
  ["Xuất xứ", "Thiết kế và in tại Việt Nam"],
];

export default function Specs() {
  return (
    <section className="section">
      <h6 className="section-kicker">04 — Thông số</h6>
      <div className="specs-grid">
        <table className="table">
          <tbody>
            {SPECS.map(([label, value]) => (
              <tr key={label}>
                <td style={{ width: "42%", color: "color-mix(in srgb, var(--color-text) 60%, transparent)" }}>
                  {label}
                </td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="specs-note">
          <p>
            Bản in đầu giới hạn 500 bộ, đánh số ở mặt trong nắp hộp. Hết bản đầu, lá bài giữ nguyên nét
            vẽ nhưng số hộp sẽ không còn.
          </p>
          <p className="fine">Ảnh chụp thật, màu in có thể lệch nhẹ so với màn hình.</p>
        </div>
      </div>
    </section>
  );
}
