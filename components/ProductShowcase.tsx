"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CARD_PAIRS } from "@/lib/cards";
import { withBasePath } from "@/lib/basePath";

// Merch that ships alongside the card deck itself — shown as a plain grid
// below the rank carousel, no interaction needed.
const ADDON_ITEMS = [
  {
    name: "Hộp bài nhỏ",
    description: "Kích thước gọn, tiện mang theo mỗi khi ra ngoài chơi.",
    images: ["/images/item/hop-bai-nho.png"],
  },
  {
    name: "Hộp đựng bài",
    description: "Giấy cứng cán màng, khắc hoạ tinh giản hoạ tiết mây & hoa văn cổ.",
    images: ["/images/item/hop-bai-lon.png"],
  },
  {
    name: "Khăn trải bài",
    description: "Vải bố in hoạ tiết mây, trải bàn êm tay khi xào và so bài.",
    images: ["/images/item/khan-vuong-01.png"],
  },
  {
    name: "Túi quà tặng",
    description: "Hoạ tiết mây & ánh sao, sẵn sàng cho những dịp biếu tặng.",
    images: ["/images/item/tui-vai-01.png", "/images/item/tui-vai-02.png"],
  },
];

// How long the width/opacity open-close transitions run (globals.css) — the
// FLIP slide below is kept in lockstep with that so a card visibly travels
// to its new slot while it grows open, instead of snapping there instantly.
const SLIDE_MS = 700;

// The departing card's clone fades out much faster than that: it's pinned
// at its last position while the closing center card reflows into that same
// spot over the full SLIDE_MS, so if the clone lingered that long the two
// would visibly overlap. Clearing it early avoids the collision.
const EXIT_MS = 280;

// How long the centered rank sits idle before the carousel auto-advances to
// the next one.
const AUTO_ADVANCE_MS = 25000;

export default function ProductShowcase() {
  const [index, setIndex] = useState(0);
  const [blackFlipped, setBlackFlipped] = useState(false);
  const [redFlipped, setRedFlipped] = useState(false);
  const total = CARD_PAIRS.length;
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  // FLIP: before the reorder commits, snapshot where each still-visible card
  // box currently sits on screen. After React moves it to its new flex slot
  // (an instant snap), animate from that old position back to the new one —
  // so clicking a side card reads as it flying into the center, not teleporting.
  const boxRefs = useRef(new Map<string, HTMLElement>());
  const flipFromRef = useRef<Map<string, DOMRect> | null>(null);
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const exitRef = useRef<HTMLDivElement | null>(null);

  // The side card that drops out of the 3-card window this step (React just
  // unmounts it — no exit transition of its own) gets cloned here, pinned in
  // place over its last on-screen position, and faded out before it's
  // actually dropped, instead of vanishing instantly.
  const [exiting, setExiting] = useState<{
    id: string;
    pair: (typeof CARD_PAIRS)[number];
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  const goTo = (i: number) => {
    const target = ((i % total) + total) % total;
    if (target === index) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const exitingIndex = target === nextIndex ? prevIndex : target === prevIndex ? nextIndex : null;
    if (exitingIndex !== null && !reduceMotion) {
      const pair = CARD_PAIRS[exitingIndex];
      const el = boxRefs.current.get(pair.id);
      const host = showcaseRef.current;
      if (el && host) {
        const elRect = el.getBoundingClientRect();
        const hostRect = host.getBoundingClientRect();
        setExiting({
          id: pair.id,
          pair,
          left: elRect.left - hostRect.left,
          top: elRect.top - hostRect.top,
          width: elRect.width,
          height: elRect.height,
        });
      }
    }

    const rects = new Map<string, DOMRect>();
    boxRefs.current.forEach((el, id) => rects.set(id, el.getBoundingClientRect()));
    flipFromRef.current = rects;
    setIndex(target);
    setBlackFlipped(false);
    setRedFlipped(false);
  };

  // Auto-advance to the next rank on a timer — restarts every time the
  // centered rank changes, whether that happened by hand or on its own.
  useEffect(() => {
    const id = setTimeout(() => goTo(nextIndex), AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // Fade the departing card's clone out quickly (EXIT_MS), then hold it
  // fully invisible (`fill: "forwards"` keeps it at opacity 0 instead of
  // snapping back to visible once the animation ends) until the rest of the
  // transition has actually settled (SLIDE_MS), only then dropping it from
  // the DOM — so removal never lands mid-transition.
  useLayoutEffect(() => {
    if (!exiting) return;
    const el = exitRef.current;
    if (!el) return;
    el.animate(
      [
        { opacity: 1, filter: "blur(0)" },
        { opacity: 0, filter: "blur(6px)" },
      ],
      { duration: EXIT_MS, easing: "cubic-bezier(0.4, 0, 0.2, 1)", fill: "forwards" }
    );
    const id = window.setTimeout(() => {
      setExiting((cur) => (cur?.id === exiting.id ? null : cur));
    }, SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [exiting]);

  useLayoutEffect(() => {
    const fromRects = flipFromRef.current;
    flipFromRef.current = null;
    if (!fromRects) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    boxRefs.current.forEach((el, id) => {
      const from = fromRects.get(id);
      if (!from) {
        // just mounted (the new card sliding into the vacated slot) — no
        // position to fly from, so ease it in from faded/blurred to clear
        // instead of snapping straight into view.
        el.animate(
          [
            { opacity: 0, filter: "blur(6px)" },
            { opacity: 1, filter: "blur(0)" },
          ],
          { duration: SLIDE_MS, easing: "cubic-bezier(0.4, 0, 0.2, 1)" }
        );
        return;
      }
      const to = el.getBoundingClientRect();
      const dx = from.left - to.left;
      if (!dx) return;
      el.animate(
        [{ transform: `translateX(${dx}px)` }, { transform: "translateX(0)" }],
        { duration: SLIDE_MS, easing: "cubic-bezier(0.4, 0, 0.2, 1)" }
      );
    });
  }, [index]);

  // Only 3 cards ever exist on screen: the open one in the center, and its
  // immediate neighbors closed on either side. Picking a side card slides
  // the whole window over by one — the far card on the opposite side drops
  // out, the old center closes into its neighbor's spot. Image pair always
  // stays on the left, copy always on the right — same in every direction.
  // Repositioning is left entirely to the browser's own flex reflow (driven
  // by the width/opacity CSS transitions below) instead of a hand-rolled JS
  // slide — mixing the two caused transitions to freeze mid-flight.
  const visible = [
    { i: prevIndex, pos: "left" },
    { i: index, pos: "center" },
    { i: nextIndex, pos: "right" },
  ];

  // While one card opens and its old neighbor closes, the track's total
  // height can briefly dip below its settled value (the two transitions
  // aren't perfectly in lockstep — the closing card can lose height before
  // the opening one has gained it back), which yanks every section below
  // it up and back down. Watch the track itself (not just the open card,
  // since the closing one can cause the same dip) and floor it to the
  // tallest height it's actually measured, so it can grow but never
  // shrink below that while a transition is running.
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [minHeight, setMinHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const height = entries[0]?.borderBoxSize?.[0]?.blockSize ?? entries[0]?.contentRect.height;
      if (!height) return;
      setMinHeight((prev) => (prev === undefined ? height : Math.max(prev, height)));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // A resize (e.g. rotating a phone, or a much narrower window) can make the
  // previously-recorded floor too tall — drop it and let it re-measure.
  useEffect(() => {
    const onResize = () => setMinHeight(undefined);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section id="san-pham" className="section showcase-section">
      <div className="showcase-heading-block">
        <span className="showcase-heading-kicker">Bộ nhân vật</span>
        <h2 className="showcase-heading-title uses-webfont">Bảy quân bài, bảy câu chuyện</h2>
        <p className="showcase-heading-body">
          Mỗi quân bài truyền thống được tái hiện qua một nhân vật quen thuộc của phố thị hôm nay
          — giữ nguyên thứ bậc, đổi mới linh hồn.
        </p>
      </div>

      <div className="showcase" ref={showcaseRef}>
        {exiting && (
          <div
            ref={exitRef}
            className="showcase-card-box showcase-card-box-exit"
            aria-hidden="true"
            style={{ left: exiting.left, top: exiting.top, width: exiting.width, height: exiting.height }}
          >
            <div className="showcase-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={exiting.pair.blackImg} alt="" className="showcase-card showcase-card-back" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={exiting.pair.redImg} alt="" className="showcase-card showcase-card-front" />
            </div>
          </div>
        )}
        <div className="showcase-track" ref={trackRef} style={minHeight ? { minHeight } : undefined}>
          {visible.map(({ i, pos }) => {
            const pair = CARD_PAIRS[i];
            const isOpen = pos === "center";
            return (
              <article
                key={pair.id}
                ref={(el) => {
                  if (el) boxRefs.current.set(pair.id, el);
                  else boxRefs.current.delete(pair.id);
                }}
                className={`showcase-card-box${isOpen ? " is-open" : ""}`}
              >
                {isOpen ? (
                  <div className="showcase-media">
                    <button
                      type="button"
                      className={`showcase-turn showcase-card-back${blackFlipped ? " is-turned" : ""}`}
                      onClick={() => setBlackFlipped((v) => !v)}
                      aria-label={
                        blackFlipped
                          ? `Xem mặt trước quân ${pair.rank} đen`
                          : `Lật xem mặt sau quân ${pair.rank} đen`
                      }
                    >
                      <span className="showcase-turn-face showcase-turn-front">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={pair.blackImg} alt={`Lá ${pair.rank} đen`} className="showcase-card-img" />
                      </span>
                      <span className="showcase-turn-face showcase-turn-back">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={withBasePath("/images/card/card-logo.png")}
                          alt="Mặt sau lá bài"
                          className="showcase-card-img"
                        />
                      </span>
                    </button>
                    <button
                      type="button"
                      className={`showcase-turn showcase-card-front${redFlipped ? " is-turned" : ""}`}
                      onClick={() => setRedFlipped((v) => !v)}
                      aria-label={
                        redFlipped
                          ? `Xem mặt trước quân ${pair.rank} đỏ`
                          : `Lật xem mặt sau quân ${pair.rank} đỏ`
                      }
                    >
                      <span className="showcase-turn-face showcase-turn-front">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={pair.redImg} alt={`Lá ${pair.rank} đỏ`} className="showcase-card-img" />
                      </span>
                      <span className="showcase-turn-face showcase-turn-back">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={withBasePath("/images/card/card-logo.png")}
                          alt="Mặt sau lá bài"
                          className="showcase-card-img"
                        />
                      </span>
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="showcase-media"
                    onClick={() => goTo(i)}
                    aria-label={`Xem quân ${pair.rank}`}
                  >
                    <div className="showcase-turn showcase-card-back">
                      <span className="showcase-turn-face showcase-turn-front">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={pair.blackImg} alt={`Lá ${pair.rank} đen`} className="showcase-card-img" />
                      </span>
                    </div>
                    <div className="showcase-turn showcase-card-front">
                      <span className="showcase-turn-face showcase-turn-front">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={pair.redImg} alt={`Lá ${pair.rank} đỏ`} className="showcase-card-img" />
                      </span>
                    </div>
                  </button>
                )}
                <div className="showcase-copy" aria-hidden={!isOpen}>
                  <div className="showcase-copy-inner">
                    <h3>{pair.rank}</h3>
                    <p className="showcase-desc">
                      <span className="showcase-desc-label">Xưa</span>
                      {pair.past}
                    </p>
                    <p className="showcase-desc">
                      <span className="showcase-desc-label">Nay</span>
                      {pair.present}
                    </p>
                    <p className="showcase-quote">
                      &ldquo;
                      {pair.quote.split("\n").map((line, i, arr) => (
                        <span key={i}>
                          {line}
                          {i < arr.length - 1 && <br />}
                        </span>
                      ))}
                      &rdquo;
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="showcase-footer">
        <button type="button" className="showcase-arrow" aria-label="Quân trước" onClick={() => goTo(index - 1)}>
          ←
        </button>
        <span className="showcase-counter">
          {index + 1}<span className="showcase-counter-total">/{total}</span>
        </span>
        <button type="button" className="showcase-arrow" aria-label="Quân sau" onClick={() => goTo(index + 1)}>
          →
        </button>
      </div>

      <div className="showcase-addons">
        <div className="showcase-addons-heading">
          <span className="showcase-addons-kicker">Từ bản vẽ đến sản phẩm</span>
          <h2 className="showcase-addons-title uses-webfont">Chỉn chu trong từng chi tiết</h2>
          <p className="showcase-addons-subhead">
            Từ nét phác thảo tay đầu tiên đến hộp giấy trên kệ — mỗi công đoạn đều được giữ đúng
            tinh thần của bộ bài.
          </p>
        </div>
        <div className="showcase-addons-grid">
          {ADDON_ITEMS.map((item) => (
            <div className="showcase-addon-card" key={item.name}>
              <div className={`showcase-addon-frame${item.images.length > 1 ? " is-split" : ""}`}>
                {item.images.map((src) => (
                  <img key={src} src={withBasePath(src)} alt={item.name} />
                ))}
              </div>
              <p className="showcase-addon-name">{item.name}</p>
              <p className="showcase-addon-caption">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
