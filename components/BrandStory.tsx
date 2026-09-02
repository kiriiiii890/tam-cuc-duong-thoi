// Placeholder copy — swap in the real story later, structure stays the same.
const STORY_BEATS = [
  "Đoạn 1 — nội dung câu chuyện sẽ được viết ở đây.",
  "Đoạn 2 — nội dung câu chuyện sẽ được viết ở đây.",
  "Đoạn 3 — nội dung câu chuyện sẽ được viết ở đây.",
  "Đoạn 4 — nội dung câu chuyện sẽ được viết ở đây.",
  "Đoạn 5 — nội dung câu chuyện sẽ được viết ở đây.",
];

export default function BrandStory() {
  return (
    <section className="story-section">
      <div className="wrap">
        <h6 className="section-kicker">02 — Câu chuyện</h6>
      </div>
      <div className="story-path">
        {STORY_BEATS.map((text, i) => (
          <div key={i} className={`story-seg${i % 2 === 1 ? " is-right" : ""}`}>
            <p>{text}</p>
          </div>
        ))}
        <div className="story-seg story-seg-final">
          <p>Lời kết — nội dung câu chuyện sẽ được viết ở đây.</p>
        </div>
      </div>
    </section>
  );
}
