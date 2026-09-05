import { withBasePath } from "@/lib/basePath";

const STORY_PARAGRAPHS = [
  "Tam Cúc chưa bao giờ chỉ là một trò chơi bài lá. Suốt nhiều thế hệ, nó là tiếng cười giòn tan trong sân đình ngày hội, là ván bài giải khuây bên nồi bánh chưng đêm ba mươi, là thứ ông bà vẫn lặng lẽ truyền lại cho con cháu qua từng lượt rút bài.",
  "Nhưng giữa nhịp sống hôm nay — nơi người ta quen tay với màn hình hơn quân bài — Tam Cúc dần trở thành một ký ức xa, nằm yên trong ngăn tủ của bà.",
  "Chúng tôi không muốn cất nó vào viện bảo tàng. Chúng tôi muốn nó tiếp tục được cầm trên tay — bởi những con người rất thật của đời sống đương đại: anh shipper rong ruổi khắp phố, cô cậu học trò học bài mỗi tối qua màn hình, ông lão đánh cờ vỉa hè, tiếng loa phường vang lên mỗi sớm mai.",
  "Tam Cúc Đương Thời là nơi bảy quân bài cũ khoác lên mình một diện mạo mới — để một trò chơi tưởng đã ngủ quên lại tiếp tục được kể, được chơi, và được nhớ.",
];

export default function BrandStory() {
  return (
    <section className="story-section">
      <div
        className="story-pattern"
        aria-hidden="true"
        style={{ backgroundImage: `url('${withBasePath("/images/bg-5.png")}')` }}
      />
      <div className="wrap">
        <h2 className="story-title">Câu chuyện của chúng tôi</h2>
        <div className="story-body">
          {STORY_PARAGRAPHS.map((paragraph, i) => (
            <p key={paragraph} className={i === 0 ? "story-lead" : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
