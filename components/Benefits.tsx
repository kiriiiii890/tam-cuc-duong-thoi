type Benefit = { icon: string; title: string; body: string };

const BENEFITS: Benefit[] = [
  {
    icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
    title: "Luật in kèm trong hộp",
    body: "Chưa từng chơi tam cúc vẫn vào được ván đầu sau năm phút đọc.",
  },
  {
    icon: '<path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
    title: "32 lá vẽ mới hoàn toàn",
    body: "Không phải in lại bản cũ: từng lá là một tranh riêng, vẽ tay rồi lên màu số.",
  },
  {
    icon: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"></path><path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"></path>',
    title: "Chia bài không dính",
    body: "Giấy 300gsm cán mờ hai mặt, xào bài nhẹ tay, mép không xù sau vài chục ván.",
  },
  {
    icon: '<path d="M20 12v10H4V12"></path><path d="M2 7h20v5H2z"></path><path d="M12 22V7"></path><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
    title: "Tặng được, không cần gói",
    body: "Hộp đã đủ đẹp để đưa thẳng cho người nhận, kèm thiệp trắng viết tay.",
  },
];

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="wrap section">
        <h6 className="section-kicker">03 - Vì sao nên có một bộ</h6>
        <div className="benefits-grid">
          {BENEFITS.map((b) => (
            <div key={b.title}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent-400)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                dangerouslySetInnerHTML={{ __html: b.icon }}
              />
              <h4>{b.title}</h4>
              <p>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
