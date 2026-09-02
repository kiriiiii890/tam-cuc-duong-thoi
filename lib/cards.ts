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
    past: "Quân cao nhất, cầm trịch cả bàn cờ",
    present: "Người đánh cờ tướng vỉa hè, giữ nhịp cuộc chơi bằng bản lĩnh",
    quote: "Lãnh đạo bằng bản lĩnh, chiến thắng bằng tầm nhìn.",
    redImg: "/images/card/card-tuong-do.png",
    blackImg: "/images/card/card-tuong-den.png",
  },
  {
    id: "si",
    rank: "Sĩ",
    past: "Cận vệ luôn đứng bên bảo vệ Tướng",
    present: "Người trẻ tri thức, làm việc cùng chiếc laptop ở bất cứ đâu",
    quote: "Giữ vững niềm tin, bảo toàn chính đạo.",
    redImg: "/images/card/card-si-do.png",
    blackImg: "/images/card/card-si-den.png",
  },
  {
    id: "voi",
    rank: "Tượng",
    past: "Tuyến phòng thủ vững chắc phía sau",
    present: "Cậu bé trên xe thư báo, chở tin tức đi khắp phố mỗi sớm",
    quote: "Điềm tĩnh để nhìn xa hơn một nước cờ.",
    redImg: "/images/card/card-voi-do.png",
    blackImg: "/images/card/card-voi-den.png",
  },
  {
    id: "xe",
    rank: "Xe",
    past: "Quân có sức mạnh và tầm hoạt động lớn nhất",
    present: "Người trẻ lướt ván, mang năng lượng tự do của đường phố",
    quote: "Tiến thẳng phía trước, khai mở mọi lối đi.",
    redImg: "/images/card/card-xe-do.png",
    blackImg: "/images/card/card-xe-den.png",
  },
  {
    id: "phao",
    rank: "Pháo",
    past: "Quân tấn công, tạo thế bất ngờ",
    present: "Người cầm loa tay, tiếng nói vang khắp con phố nhỏ",
    quote: "Ẩn mình chờ thời, bừng sáng đúng lúc.",
    redImg: "/images/card/card-phao-do.png",
    blackImg: "/images/card/card-phao-den.png",
  },
  {
    id: "ma",
    rank: "Mã",
    past: "Quân nhanh nhẹn, di chuyển linh hoạt",
    present: "Anh shipper phóng xe giữa phố, nhịp sống của thời kinh tế số",
    quote: "Biến hóa không ngừng, tạo nên điều bất ngờ.",
    redImg: "/images/card/card-ma-do.png",
    blackImg: "/images/card/card-ma-den.png",
  },
  {
    id: "tot",
    rank: "Tốt",
    past: "Quân đông nhất, hỗ trợ tạo thế trận",
    present: "Những đứa trẻ tinh nghịch giữa mùa hội, mầm cây của ngày mai",
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
