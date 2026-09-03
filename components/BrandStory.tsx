import { withBasePath } from "@/lib/basePath";

const STORY_BEATS = [
  {
    title: "Tướng & bàn cờ vỉa hè",
    body: "Một ván cờ tướng ở vỉa hè không chỉ là trò chơi - đó là nơi tư duy chiến thuật và bản lĩnh người cầm quân được tôi luyện qua từng nước đi. Bàn cờ nhỏ giữa phố cũng là nơi người ta ngồi lại, trò chuyện, và kết nối với nhau.",
    image: "/images/story/story-co-tuong.png",
  },
  {
    title: "Trà đá vỉa hè",
    body: "Một bàn cờ tướng bày ra ở vỉa hè, dưới gốc cây hay bên hiên nhà, thực chất là một xã hội thu nhỏ. Có kẻ cầm quyền, có người phò tá, có tuyến phòng thủ, có mũi tiên phong, có những quân tốt nhỏ bé nhất nhưng đông đảo nhất. Tam Cúc Đương Thời mượn đúng cấu trúc ấy - không phải để nói về một ván cờ, mà để nói về cách mỗi người, dù ở vị trí nào, cũng đang âm thầm giữ một vai trò trong guồng quay chung.",
    image: "/images/story/story-tra-da.png",
  },
  {
    title: "Cờ ngũ sắc",
    body: "Sắc màu tung bay giữa hội làng, gợi lại không khí lễ hội dân gian rộn ràng. Đó là niềm tự hào về cội nguồn, và minh chứng cho sức sống bền bỉ của văn hóa truyền thống trong nhịp sống hiện đại.",
    image: "/images/story/story-co-ngu-sac.png",
  },
  {
    title: "Người cầm loa",
    body: "Từ chiếc loa tay, loa phường của một thời đã xa, đến tiếng nói vang khắp con phố nhỏ hôm nay - hình ảnh này là biểu tượng cho tiếng nói cộng đồng, luôn tìm cách lan tỏa qua mọi thời kỳ.",
    image: "/images/story/story-nguoi-cam-loa.png",
  },
  {
    title: "Người trẻ với máy tính",
    body: "Chiếc xe thư báo chạy ngang qua đúng giờ như mọi hôm, quen thuộc như quân Tượng chỉ giữ một vùng nhất định nhưng không thể thiếu. Một cậu thanh niên lướt ván vụt qua, thẳng một mạch không ngoái đầu, mang đúng tinh thần của quân Xe - mạnh mẽ và dứt khoát. Đâu đó vọng lại tiếng rao hàng qua chiếc loa tay, âm thanh chỉ vang xa được nhờ có người đứng nghe, giống hệt cách quân Pháo cần một điểm tựa mới phát huy được sức mạnh. Một anh shipper phóng xe len lỏi qua từng lối nhỏ trong công viên để kịp giao hàng, nhanh nhẹn và khó đoán như quân Mã. Và đám trẻ con đang nô đùa trên bãi cỏ, nhỏ bé, ồn ào, nhưng chính là hình ảnh của quân Tốt - những mầm non rồi sẽ lớn lên thành một điều gì đó lớn lao hơn.",
    image: "/images/story/story-nguoi-tre-may-tinh.png",
  },
  {
    title: "Shipper",
    body: "Chiếc xe máy lao đi giữa phố, mang theo nhịp sống hối hả của thời kinh tế số. Shipper là biểu tượng mới của tốc độ và sự linh hoạt - người kết nối mọi giao thương trong lòng đô thị hiện đại.",
    image: "/images/story/story-shipper.png",
  },
  {
    title: "Lướt ván & hoạt động ngoài trời",
    body: "Tự do, năng động, và không ngại thử điều mới - đó là tinh thần của thế hệ trẻ hôm nay. Từng cú lướt ván mang đến nguồn năng lượng trẻ trung, sôi nổi cho toàn bộ câu chuyện thiết kế.",
    image: "/images/story/story-luot-van.png",
  },
];

export default function BrandStory() {
  const [featured, rowTwoText, rowTwoImage, rowThreeImage, rowThreeText, ...rest] = STORY_BEATS;

  return (
    <section className="story-section">
      <div className="wrap">
        <h6 className="section-kicker">02 - Câu chuyện</h6>

        <div className="story-featured">
          <div className="story-featured-frame">
            <img src={withBasePath(featured.image)} alt={featured.title} />
          </div>
          <p className="story-featured-body story-featured-lead">
            Tam Cúc chưa bao giờ chỉ là một trò chơi bài lá. Suốt nhiều thế hệ, nó là tiếng cười giòn
            tan trong sân đình ngày hội, là ván bài giải khuây bên nồi bánh chưng đêm ba mươi, là thứ
            ông bà vẫn lặng lẽ truyền lại cho con cháu qua từng lượt rút bài.
          </p>
          <p className="story-featured-body">
            Nhưng giữa nhịp sống hôm nay - nơi người ta quen tay với màn hình hơn quân bài - Tam Cúc
            dần trở thành một ký ức xa, nằm yên trong ngăn tủ của bà.
          </p>

          <p className="story-featured-body">
            Chúng tôi không muốn cất nó vào viện bảo tàng. Chúng tôi muốn nó tiếp tục được cầm trên
            tay - bởi những con người rất thật của đời sống đương đại: anh shipper rong ruổi khắp
            phố, cô cậu học trò học bài mỗi tối qua màn hình, ông lão đánh cờ vỉa hè, tiếng loa phường
            vang lên mỗi sớm mai.
          </p>
        </div>

        <div className="story-row">
          <div className="story-row-text">
            <p>
              Ngồi ở một góc công viên vào buổi chiều, nhìn dòng người qua lại, tự nhiên lại hình
              dung mỗi người mang một dáng vẻ rất riêng - như thể họ đang vô tình bước ra từ một
              quân bài Tam Cúc nào đó.
            </p>
            <p>
              Ông lão ngồi trầm ngâm bên bàn cờ, tay nhích từng nước đi chậm rãi, toát lên cái điềm
              tĩnh của một vị Tướng cầm quân. Cách đó vài bước, một người trẻ ngồi gõ laptop trên ghế
              đá, đầu óc vẫn kết nối dù ở bất cứ đâu - dáng vẻ ấy chẳng khác nào quân Sĩ, lặng lẽ mà
              luôn sẵn sàng.
            </p>
          </div>
          <div className="story-row-thumb story-row-thumb-sm">
            <img src={withBasePath(rowTwoText.image)} alt={rowTwoText.title} />
          </div>
          <div className="story-row-thumb story-row-thumb-lg">
            <img src={withBasePath(rowTwoImage.image)} alt={rowTwoImage.title} />
          </div>
        </div>

        <div className="story-row">
          <div className="story-row-thumb story-row-thumb-lg">
            <img src={withBasePath(rowThreeImage.image)} alt={rowThreeImage.title} />
          </div>
          <div className="story-row-text">
            <p>{rowThreeText.body}</p>
          </div>
        </div>

        <div className="story-gallery">
          {rest.map((beat) => (
            <article key={beat.title}>
              <div className="story-card-frame">
                <img src={withBasePath(beat.image)} alt={beat.title} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
