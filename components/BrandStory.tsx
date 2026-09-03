import { withBasePath } from "@/lib/basePath";

// Each card's photo, kept separate from the narrative copy below — the
// story text reads as one continuous essay rather than one paragraph per
// card, so pairing them 1:1 in a single array made the data lie about what
// was actually on screen.
const STORY_IMAGES = [
  { title: "Tướng & bàn cờ vỉa hè", image: "/images/story/story-co-tuong.png" },
  { title: "Trà đá vỉa hè", image: "/images/story/story-tra-da.png" },
  { title: "Cờ ngũ sắc", image: "/images/story/story-co-ngu-sac.png" },
  { title: "Người cầm loa", image: "/images/story/story-nguoi-cam-loa.png" },
  { title: "Người trẻ với máy tính", image: "/images/story/story-nguoi-tre-may-tinh.png" },
  { title: "Shipper", image: "/images/story/story-shipper.png" },
  { title: "Lướt ván & hoạt động ngoài trời", image: "/images/story/story-luot-van.png" },
];

// Two rows alternate a single photo with the narrative text (image-right,
// then image-left) so the pattern stays symmetric; the rest fill an even
// gallery grid below.
const featuredImage = STORY_IMAGES[0];
const rowTwoImage = STORY_IMAGES[1];
const rowThreeImage = STORY_IMAGES[3];
const galleryImages = [STORY_IMAGES[2], STORY_IMAGES[4], STORY_IMAGES[5], STORY_IMAGES[6]];

const INTRO_PARAGRAPHS = [
  "Tam Cúc chưa bao giờ chỉ là một trò chơi bài lá. Suốt nhiều thế hệ, nó là tiếng cười giòn tan trong sân đình ngày hội, là ván bài giải khuây bên nồi bánh chưng đêm ba mươi, là thứ ông bà vẫn lặng lẽ truyền lại cho con cháu qua từng lượt rút bài.",
  "Chúng tôi không muốn cất nó vào viện bảo tàng. Chúng tôi muốn nó tiếp tục được cầm trên tay - bởi những con người rất thật của đời sống đương đại: anh shipper rong ruổi khắp phố, cô cậu học trò học bài mỗi tối qua màn hình, ông lão đánh cờ vỉa hè, tiếng loa phường vang lên mỗi sớm mai.",
];

const ROW_TWO_PARAGRAPHS = [
  "Ngồi ở một góc công viên vào buổi chiều, nhìn dòng người qua lại, tự nhiên lại hình dung mỗi người mang một dáng vẻ rất riêng - như thể họ đang vô tình bước ra từ một quân bài Tam Cúc nào đó.",
  "Ông lão ngồi trầm ngâm bên bàn cờ, tay nhích từng nước đi chậm rãi, toát lên cái điềm tĩnh của một vị Tướng cầm quân. Cách đó vài bước, một người trẻ ngồi gõ laptop trên ghế đá, đầu óc vẫn kết nối dù ở bất cứ đâu - dáng vẻ ấy chẳng khác nào quân Sĩ, lặng lẽ mà luôn sẵn sàng.",
];

const ROW_THREE_PARAGRAPHS = [
  "Chiếc xe thư báo chạy ngang qua đúng giờ như mọi hôm, quen thuộc như quân Tượng chỉ giữ một vùng nhất định nhưng không thể thiếu. Một cậu thanh niên lướt ván vụt qua, thẳng một mạch không ngoái đầu, mang đúng tinh thần của quân Xe - mạnh mẽ và dứt khoát.",
  "Đâu đó vọng lại tiếng rao hàng qua chiếc loa tay, âm thanh chỉ vang xa được nhờ có người đứng nghe, giống hệt cách quân Pháo cần một điểm tựa mới phát huy được sức mạnh. Một anh shipper phóng xe len lỏi qua từng lối nhỏ trong công viên để kịp giao hàng, nhanh nhẹn và khó đoán như quân Mã. Và đám trẻ con đang nô đùa trên bãi cỏ, nhỏ bé, ồn ào, nhưng chính là hình ảnh của quân Tốt - những mầm non rồi sẽ lớn lên thành một điều gì đó lớn lao hơn.",
];

export default function BrandStory() {
  return (
    <section className="story-section">
      <div className="wrap">
        <h6 className="section-kicker">01 - Câu chuyện</h6>

        <div className="story-featured">
          <div className="story-featured-frame">
            <img src={withBasePath(featuredImage.image)} alt={featuredImage.title} />
          </div>
          <p className="story-featured-body story-featured-lead">{INTRO_PARAGRAPHS[0]}</p>
          <p className="story-featured-body">{INTRO_PARAGRAPHS[1]}</p>
        </div>

        <div className="story-row">
          <div className="story-row-text">
            {ROW_TWO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="story-row-thumb">
            <img src={withBasePath(rowTwoImage.image)} alt={rowTwoImage.title} />
          </div>
        </div>

        <div className="story-row">
          <div className="story-row-thumb">
            <img src={withBasePath(rowThreeImage.image)} alt={rowThreeImage.title} />
          </div>
          <div className="story-row-text">
            {ROW_THREE_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="story-gallery">
          {galleryImages.map((beat) => (
            <article key={beat.title} className="story-card">
              <div className="story-card-frame">
                <img src={withBasePath(beat.image)} alt={beat.title} />
              </div>
              <p className="story-card-caption">{beat.title}</p>
            </article>
          ))}
        </div>

        <p className="story-closing">
          Bảy quân bài cũ, bảy lát cắt đời sống hôm nay - cùng xem bộ bài trông ra sao.
        </p>
      </div>
    </section>
  );
}
