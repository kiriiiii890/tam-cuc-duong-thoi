import { withBasePath } from "./basePath";

export type CardPair = {
  id: string;
  rank: string;
  quote: string;
  description: string;
  redImg: string;
  blackImg: string;
};

// Placeholder copy — swap in the real descriptions later, structure stays the same.
const RAW_CARD_PAIRS: CardPair[] = [
  {
    id: "tuong",
    rank: "Tướng",
    quote: "Người đứng đầu bộ tướng, không ai kết đôi được với Tướng.",
    description: "Quân cao nhất trong 7 bậc, chỉ có một lá mỗi màu. Vẽ lại thành người đứng giữa đám đông ồn ào của phố.",
    redImg: "/images/card/card-tuong-do.png",
    blackImg: "/images/card/card-tuong-den.png",
  },
  {
    id: "si",
    rank: "Sĩ",
    quote: "Hai lá mỗi màu, đứng sát cạnh Tướng.",
    description: "Mô tả ngắn về quân Sĩ sẽ được cập nhật ở đây — tạm thời giữ vai trò minh họa bố cục.",
    redImg: "/images/card/card-si-do.png",
    blackImg: "/images/card/card-si-den.png",
  },
  {
    id: "voi",
    rank: "Tượng",
    quote: "Hai lá mỗi màu, đi cùng hàng với Sĩ.",
    description: "Mô tả ngắn về quân Tượng sẽ được cập nhật ở đây — tạm thời giữ vai trò minh họa bố cục.",
    redImg: "/images/card/card-voi-do.png",
    blackImg: "/images/card/card-voi-den.png",
  },
  {
    id: "xe",
    rank: "Xe",
    quote: "Hai lá mỗi màu, thứ bậc ngang Pháo và Mã.",
    description: "Mô tả ngắn về quân Xe sẽ được cập nhật ở đây — tạm thời giữ vai trò minh họa bố cục.",
    redImg: "/images/card/card-xe-do.png",
    blackImg: "/images/card/card-xe-den.png",
  },
  {
    id: "phao",
    rank: "Pháo",
    quote: "Hai lá mỗi màu, thứ bậc ngang Xe và Mã.",
    description: "Mô tả ngắn về quân Pháo sẽ được cập nhật ở đây — tạm thời giữ vai trò minh họa bố cục.",
    redImg: "/images/card/card-phao-do.png",
    blackImg: "/images/card/card-phao-den.png",
  },
  {
    id: "ma",
    rank: "Mã",
    quote: "Hai lá mỗi màu, thứ bậc ngang Xe và Pháo.",
    description: "Mô tả ngắn về quân Mã sẽ được cập nhật ở đây — tạm thời giữ vai trò minh họa bố cục.",
    redImg: "/images/card/card-ma-do.png",
    blackImg: "/images/card/card-ma-den.png",
  },
  {
    id: "tot",
    rank: "Tốt",
    quote: "Năm lá mỗi màu — đông nhất trong bộ tướng.",
    description: "Mô tả ngắn về quân Tốt sẽ được cập nhật ở đây — tạm thời giữ vai trò minh họa bố cục.",
    redImg: "/images/card/card-tot-do.png",
    blackImg: "/images/card/card-tot-den.png",
  },
];

export const CARD_PAIRS: CardPair[] = RAW_CARD_PAIRS.map((pair) => ({
  ...pair,
  redImg: withBasePath(pair.redImg),
  blackImg: withBasePath(pair.blackImg),
}));
