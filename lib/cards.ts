import { withBasePath } from "./basePath";

export type CardPair = {
  id: string;
  rank: string;
  past: string;
  present: string;
  quote: string;
  redImg: string;
  blackImg: string;
};

const RAW_CARD_PAIRS: CardPair[] = [
  {
    id: "tuong",
    rank: "Tướng",
    past: "Quân cao nhất trên bàn cờ, không bao giờ rời khỏi cung của mình nhưng mọi nước đi của đối phương đều xoay quanh việc bảo vệ hay uy hiếp quân này. Mất Tướng là mất tất cả - ván cờ kết thúc ngay lập tức.",
    present: "Ngoài vỉa hè, Tướng là người ngồi chiếu trên - không hẳn đánh hay nhất bàn, nhưng là người giữ nhịp, phân xử tranh cãi, và quyết định khi nào ván cờ dừng lại để cả nhóm còn kịp về ăn cơm tối.",
    quote: "Lãnh đạo bằng bản lĩnh, chiến thắng bằng tầm nhìn.",
    redImg: "/images/card/card-tuong-do.png",
    blackImg: "/images/card/card-tuong-den.png",
  },
  {
    id: "si",
    rank: "Sĩ",
    past: "Chỉ được đi trong phạm vi cung nhỏ, mỗi bước đúng một đường chéo - Sĩ không tranh công đầu nhưng là lớp giáp cuối cùng đứng chắn giữa Tướng và hiểm nguy, âm thầm mà không thể thiếu.",
    present: "Sĩ thời nay là những người trẻ cắm cúi bên laptop ở quán cà phê góc phố, lặng lẽ xây dựng nền tảng cho một điều gì đó lớn hơn - không ồn ào, nhưng chính họ giữ cho guồng máy vận hành trơn tru.",
    quote: "Giữ vững niềm tin, bảo toàn chính đạo.",
    redImg: "/images/card/card-si-do.png",
    blackImg: "/images/card/card-si-den.png",
  },
  {
    id: "voi",
    rank: "Tượng",
    past: "Đi theo đường chéo dài bốn ô, không bao giờ vượt sông - Tượng là tuyến phòng thủ bền bỉ ở hậu phương, âm thầm bịt kín những khoảng trống mà đối phương chực chờ khai thác.",
    present: "Cậu bé giao báo mỗi sáng cũng đi một hành trình cố định như vậy: cùng một tuyến đường, cùng một khung giờ, cần mẫn mang tin tức đến từng con hẻm trước khi cả thành phố kịp thức giấc.",
    quote: "Điềm tĩnh để nhìn xa hơn một nước cờ.",
    redImg: "/images/card/card-voi-do.png",
    blackImg: "/images/card/card-voi-den.png",
  },
  {
    id: "xe",
    rank: "Xe",
    past: "Đi ngang dọc không giới hạn số ô, chỉ cần đường thẳng thông suốt - Xe là quân mạnh nhất bàn cờ, thứ vũ khí mà người chơi giỏi luôn tìm cách giữ lại đến cùng cho những đòn quyết định.",
    present: "Trên đường phố, tinh thần ấy sống trong những người trẻ lướt ván: không đường ray, không giới hạn, chỉ có tốc độ và sự tự do tuyệt đối để đi bất cứ đâu mình muốn, miễn là còn đà.",
    quote: "Tiến thẳng phía trước, khai mở mọi lối đi.",
    redImg: "/images/card/card-xe-do.png",
    blackImg: "/images/card/card-xe-den.png",
  },
  {
    id: "phao",
    rank: "Pháo",
    past: "Muốn ăn quân phải nhảy qua đúng một quân khác làm bàn đạp - nước đi kỳ lạ nhất bàn cờ, biến Pháo thành quân luôn giấu một bất ngờ, khiến đối thủ phải dè chừng ngay cả khi tưởng đã an toàn.",
    present: "Tiếng loa tay vang lên giữa con phố nhỏ cũng vậy: bất chợt, không báo trước, nhưng đủ sức khiến cả một khu phố dừng lại lắng nghe - một lời rao, một thông báo, hay đôi khi chỉ là một câu chuyện phiếm.",
    quote: "Ẩn mình chờ thời, bừng sáng đúng lúc.",
    redImg: "/images/card/card-phao-do.png",
    blackImg: "/images/card/card-phao-den.png",
  },
  {
    id: "ma",
    rank: "Mã",
    past: "Nước đi hình chữ L độc đáo, có thể nhảy qua đầu quân khác mà không quân nào cản được - Mã là quân của những đường tấn công bất ngờ nhất, khó đoán nhất trên bàn cờ.",
    present: "Anh shipper luồn lách qua từng con hẻm, tắt ngõ này vòng lối kia để kịp đơn hàng đúng giờ - cũng một kiểu di chuyển không theo đường thẳng, nhưng luôn tìm ra lối đi nhanh nhất giữa lòng đô thị chật chội.",
    quote: "Biến hóa không ngừng, tạo nên điều bất ngờ.",
    redImg: "/images/card/card-ma-do.png",
    blackImg: "/images/card/card-ma-den.png",
  },
  {
    id: "tot",
    rank: "Tốt",
    past: "Mỗi bên có tới năm quân Tốt, bước từng ô một cách chậm rãi và khiêm nhường nhất bàn cờ - nhưng nếu đi trót lọt đến hàng cuối, một quân Tốt bé nhỏ có thể phong Hậu và đảo ngược cả cục diện.",
    present: "Những đứa trẻ chạy nhảy giữa mùa hội làng cũng vậy - nhỏ bé, đông đảo, nghịch ngợm không theo hàng lối nào cả, nhưng chính các em mới là những mầm cây sẽ lớn lên viết tiếp câu chuyện của phố.",
    quote: "Khởi đầu nhỏ bé, kết thúc bằng kỳ tích.",
    redImg: "/images/card/card-tot-do.png",
    blackImg: "/images/card/card-tot-den.png",
  },
];

export const CARD_PAIRS: CardPair[] = RAW_CARD_PAIRS.map((pair) => ({
  ...pair,
  redImg: withBasePath(pair.redImg),
  blackImg: withBasePath(pair.blackImg),
}));
