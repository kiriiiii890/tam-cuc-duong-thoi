import { withBasePath } from "@/lib/basePath";

const STORY_BEATS = [
  {
    title: "Tướng & bàn cờ vỉa hè",
    body: "Một ván cờ tướng ở vỉa hè không chỉ là trò chơi — đó là nơi tư duy chiến thuật và bản lĩnh người cầm quân được tôi luyện qua từng nước đi. Bàn cờ nhỏ giữa phố cũng là nơi người ta ngồi lại, trò chuyện, và kết nối với nhau.",
    image: "/images/story/story-co-tuong.png",
  },
  {
    title: "Trà đá vỉa hè",
    body: "Một ly trà đá, một chiếc ghế nhựa, và cả con phố dừng lại trong giây lát. Sự bình dị ấy chính là chất liệu làm nên bản sắc đường phố Việt Nam — nơi những cuộc trò chuyện đời thường trở thành ký ức.",
    image: "/images/story/story-tra-da.png",
  },
  {
    title: "Cờ ngũ sắc",
    body: "Sắc màu tung bay giữa hội làng, gợi lại không khí lễ hội dân gian rộn ràng. Đó là niềm tự hào về cội nguồn, và minh chứng cho sức sống bền bỉ của văn hóa truyền thống trong nhịp sống hiện đại.",
    image: "/images/story/story-co-ngu-sac.png",
  },
  {
    title: "Người cầm loa",
    body: "Từ chiếc loa tay, loa phường của một thời đã xa, đến tiếng nói vang khắp con phố nhỏ hôm nay — hình ảnh này là biểu tượng cho tiếng nói cộng đồng, luôn tìm cách lan tỏa qua mọi thời kỳ.",
    image: "/images/story/story-nguoi-cam-loa.png",
  },
  {
    title: "Người trẻ với máy tính",
    body: "Chiếc laptop mở ra ở bất cứ đâu — quán cà phê, góc phố, hay ngay trên vỉa hè. Đó là hình ảnh của thế hệ tri thức mới: không ngừng học hỏi, sáng tạo, và tiếp nối bằng chính năng lượng của mình.",
    image: "/images/story/story-nguoi-tre-may-tinh.png",
  },
  {
    title: "Shipper",
    body: "Chiếc xe máy lao đi giữa phố, mang theo nhịp sống hối hả của thời kinh tế số. Shipper là biểu tượng mới của tốc độ và sự linh hoạt — người kết nối mọi giao thương trong lòng đô thị hiện đại.",
    image: "/images/story/story-shipper.png",
  },
  {
    title: "Lướt ván & hoạt động ngoài trời",
    body: "Tự do, năng động, và không ngại thử điều mới — đó là tinh thần của thế hệ trẻ hôm nay. Từng cú lướt ván mang đến nguồn năng lượng trẻ trung, sôi nổi cho toàn bộ câu chuyện thiết kế.",
    image: "/images/story/story-luot-van.png",
  },
];

export default function BrandStory() {
  return (
    <section className="story-section">
      <div className="wrap">
        <h6 className="section-kicker">02 — Câu chuyện</h6>
      </div>
      <div className="story-path">
        {STORY_BEATS.map((beat, i) => (
          <div key={beat.title} className={`story-item${i % 2 === 1 ? " is-right" : ""}`}>
            <div className="story-seg">
              <img src={withBasePath(beat.image)} alt={beat.title} />
            </div>
            <div className="story-caption">
              <h4>{beat.title}</h4>
              <p>{beat.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
