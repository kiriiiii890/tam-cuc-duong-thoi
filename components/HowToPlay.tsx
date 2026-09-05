"use client";

import { useEffect, useRef, useState } from "react";
import { CARD_PAIRS } from "@/lib/cards";
import { withBasePath } from "@/lib/basePath";
import DecorPattern from "./DecorPattern";

const byId = Object.fromEntries(CARD_PAIRS.map((c) => [c.id, c]));
const [tuong, si, voi, xe, phao, ma, tot] = [
  byId.tuong,
  byId.si,
  byId.voi,
  byId.xe,
  byId.phao,
  byId.ma,
  byId.tot,
];
const RANK_ORDER = [tuong, si, voi, xe, phao, ma, tot];

// Small fanned stack of card faces — reused (at two sizes) for the "32 lá"
// intro and the two dealt hands, so it isn't redrawn per step.
function CardFan({ images, size = "md" }: { images: string[]; size?: "md" | "sm" }) {
  const mid = (images.length - 1) / 2;
  return (
    <div className={`howto-fan${size === "sm" ? " howto-fan-sm" : ""}`}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="howto-fan-card"
          style={{ transform: `rotate(${(i - mid) * 6}deg)`, zIndex: i }}
        />
      ))}
    </div>
  );
}

// Two cards facing off — the winner glows and carries a tag, the loser is
// dimmed. Reused for the "Đỏ thắng Đen" rule and for the "so bài" step.
function CardClash({
  winnerImg,
  winnerAlt,
  loserImg,
  loserAlt,
  tag,
  vs = "VS",
}: {
  winnerImg: string;
  winnerAlt: string;
  loserImg: string;
  loserAlt: string;
  tag: string;
  vs?: string;
}) {
  return (
    <div className="howto-clash">
      <div className="howto-clash-card is-winner">
        <img src={winnerImg} alt={winnerAlt} />
        <span className="howto-clash-tag">{tag}</span>
      </div>
      <span className="howto-clash-vs">{vs}</span>
      <div className="howto-clash-card is-loser">
        <img src={loserImg} alt={loserAlt} />
      </div>
    </div>
  );
}

type Step = {
  title: string;
  lead: string;
  caption?: string;
  visual: React.ReactNode;
};

const STEPS: Step[] = [
  {
    title: "Một bộ, hai phe",
    lead: "Bộ bài có 32 lá, chia đều cho hai phe: Đỏ và Đen — chơi được với 2, 3 hoặc 4 người.",
    caption: "32 lá — 16 Đỏ, 16 Đen",
    visual: (
      <CardFan
        images={[tuong.redImg, tuong.blackImg, xe.redImg, xe.blackImg, tot.redImg, tot.blackImg]}
      />
    ),
  },
  {
    title: "Thứ bậc quân bài",
    lead: "Từ mạnh đến yếu: Tướng, Sĩ, Tượng, Xe, Pháo, Mã, Tốt — bảy bậc, bảy vai trò.",
    visual: (
      <ol className="howto-ranks">
        {RANK_ORDER.map((c, i) => (
          <li key={c.id} className="howto-rank-row">
            <span className="howto-rank-index">{i + 1}</span>
            <span className="howto-rank-frame-wrap">
              <span className="howto-rank-frame">
                <img src={c.redImg} alt={c.rank} className="howto-rank-img" />
              </span>
              {i < RANK_ORDER.length - 1 && <span className="howto-rank-arrow">›</span>}
            </span>
            <span className="howto-rank-name">{c.rank}</span>
          </li>
        ))}
      </ol>
    ),
  },
  {
    title: "Đỏ luôn thắng Đen",
    lead: "Cùng một quân, lá Đỏ luôn thắng lá Đen.",
    visual: (
      <CardClash
        winnerImg={tuong.redImg}
        winnerAlt="Tướng Đỏ"
        loserImg={tuong.blackImg}
        loserAlt="Tướng Đen"
        tag="Thắng"
      />
    ),
  },
  {
    title: "Cách chia bài",
    lead: "Chia đều bài cho tất cả người chơi. Bàn 3 người được khuyên chơi nhất — cân bằng và kịch tính hơn cả.",
    caption: "Bàn 3 người bỏ ra 5 lá trước khi chia: 2 Tướng, 1 Sĩ Đỏ, 1 Tốt Đỏ, 1 Tốt Đen — còn 27 lá, chia 9 lá/người (bàn 2/4 người dùng nguyên 32 lá)",
    visual: (
      <CardFan images={[tuong.redImg, tuong.blackImg, si.redImg, tot.redImg, tot.blackImg]} />
    ),
  },
  {
    title: "Trình làng",
    lead: "Vừa chia xong mà có 4 hay 5 lá Tốt cùng màu trên tay? Công bố ngay để nhận điểm thưởng.",
    caption: "Tứ tử (4 Tốt): +2 điểm — Ngũ tử (5 Tốt): +5 điểm và được đi trước",
    visual: (
      <CardFan images={[tot.redImg, tot.redImg, tot.redImg, tot.redImg, tot.redImg]} />
    ),
  },
  {
    title: "Kết đôi, kết ba",
    lead: "Đang làm Cái và có sẵn một đôi hay bộ ba? Gọi kết đôi/kết ba để ăn to hơn — thắng thì cộng điểm thưởng, thua thì đối thủ ẵm trọn.",
    caption: "Cái thắng: +2/+3 điểm — Bị đè: đối thủ +4/+6 điểm",
    visual: (
      <div className="howto-combos">
        <div className="howto-combo">
          <div className="howto-combo-cards">
            <img src={phao.redImg} alt="Pháo Đỏ" />
            <img src={phao.blackImg} alt="Pháo Đen" />
          </div>
          <span className="howto-combo-label">Kết đôi — Pháo</span>
        </div>
        <div className="howto-combo">
          <div className="howto-combo-cards">
            <img src={xe.redImg} alt="Xe Đỏ" />
            <img src={phao.redImg} alt="Pháo Đỏ" />
            <img src={ma.redImg} alt="Mã Đỏ" />
          </div>
          <span className="howto-combo-label">Kết ba — Xe, Pháo, Mã</span>
        </div>
      </div>
    ),
  },
  {
    title: "Cách ra bài",
    lead: "Ra một lá, một đôi, hay trọn bộ ba cùng màu — Tướng-Sĩ-Tượng hoặc Xe-Pháo-Mã.",
    visual: (
      <div className="howto-combos">
        <div className="howto-combo">
          <div className="howto-combo-cards">
            <img src={tot.redImg} alt="Tốt Đỏ" />
          </div>
          <span className="howto-combo-label">Một lá</span>
        </div>
        <div className="howto-combo">
          <div className="howto-combo-cards">
            <img src={xe.redImg} alt="Xe Đỏ" />
            <img src={xe.blackImg} alt="Xe Đen" />
          </div>
          <span className="howto-combo-label">Một đôi — Xe</span>
        </div>
        <div className="howto-combo">
          <div className="howto-combo-cards">
            <img src={tuong.redImg} alt="Tướng Đỏ" />
            <img src={si.redImg} alt="Sĩ Đỏ" />
            <img src={voi.redImg} alt="Tượng Đỏ" />
          </div>
          <span className="howto-combo-label">Bộ ba cùng màu — Tướng, Sĩ, Tượng</span>
        </div>
      </div>
    ),
  },
  {
    title: "So bài",
    lead: "Cái úp 1–3 lá xuống, đối thủ buộc phải úp lại đúng số lá. Lật đồng thời — bộ mạnh hơn ăn trọn và trở thành Cái lượt sau.",
    caption: "Lặp lại từng lượt, đến khi một người hết bài trước",
    visual: (
      <CardClash
        winnerImg={phao.redImg}
        winnerAlt="Pháo Đỏ"
        loserImg={ma.blackImg}
        loserAlt="Mã Đen"
        tag="Ăn lượt"
        vs="→"
      />
    ),
  },
  {
    title: "Vậy thôi",
    lead: "Chỉ vậy thôi. Mở hộp ra, là chơi được ngay.",
    visual: (
      <div className="howto-close">
        <img
          src={withBasePath("/images/item/hop-bai-lon.png")}
          alt="Hộp bài Tam Cúc Đương Thời"
          className="howto-close-img"
        />
      </div>
    ),
  },
];

const TOTAL = STEPS.length;
const SWIPE_THRESHOLD = 50;

export default function HowToPlay() {
  const [step, setStep] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const goTo = (i: number) => {
    const target = Math.min(Math.max(i, 0), TOTAL - 1);
    if (target === step) return;
    setStep(target);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;
      if (e.key === "ArrowRight") goTo(step + 1);
      if (e.key === "ArrowLeft") goTo(step - 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    goTo(dx < 0 ? step + 1 : step - 1);
  };

  return (
    <section id="cach-choi" className="section howto-section">
      <DecorPattern />
      <h2 className="uses-webfont">Luật chơi, gói trong chín bước</h2>
      <div className="howto-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="howto-panels">
          {STEPS.map((s, i) => {
            const isActive = i === step;
            const offset = isActive ? 0 : i < step ? -28 : 28;
            return (
              <div
                key={s.title}
                className={`howto-panel${isActive ? " is-active" : ""}`}
                style={{ transform: `translateX(${offset}px)`, opacity: isActive ? 1 : 0 }}
                aria-hidden={!isActive}
              >
                <div className="howto-panel-text">
                  <span className="howto-step-num">Bước {i + 1}/{TOTAL}</span>
                  <p className="howto-lead">{s.lead}</p>
                </div>
                <div className="howto-panel-visual">
                  <div className="howto-visual">{s.visual}</div>
                  {s.caption && <p className="howto-visual-caption">{s.caption}</p>}
                </div>
              </div>
            );
          })}
        </div>
        <div className="howto-controls">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => goTo(step - 1)}
            disabled={step === 0}
          >
            ← Trước
          </button>
          <div className="howto-dots" role="tablist" aria-label="Tiến trình các bước">
            {STEPS.map((s, i) => (
              <button
                key={s.title}
                type="button"
                role="tab"
                aria-selected={i === step}
                aria-label={`Đi tới bước ${i + 1}: ${s.title}`}
                className={`howto-dot${i === step ? " is-active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => goTo(step + 1)}
            disabled={step === TOTAL - 1}
          >
            Tiếp →
          </button>
        </div>
      </div>
    </section>
  );
}
