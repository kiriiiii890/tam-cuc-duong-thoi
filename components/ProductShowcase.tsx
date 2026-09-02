"use client";

import { useState } from "react";
import { CARD_PAIRS } from "@/lib/cards";

export default function ProductShowcase() {
  const [index, setIndex] = useState(0);
  const total = CARD_PAIRS.length;
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  const goTo = (i: number) => setIndex(((i % total) + total) % total);

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

  return (
    <section id="san-pham" className="section showcase-section">
      <h6 className="section-kicker">01 — Sản phẩm</h6>

      <div className="showcase">
        <div className="showcase-track">
          {visible.map(({ i, pos }) => {
            const pair = CARD_PAIRS[i];
            const isOpen = pos === "center";
            return (
              <article key={pair.id} className={`showcase-card-box${isOpen ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="showcase-media"
                  onClick={() => goTo(i)}
                  aria-label={isOpen ? undefined : `Xem quân ${pair.rank}`}
                  aria-current={isOpen || undefined}
                  tabIndex={isOpen ? -1 : 0}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={pair.redImg} alt={`Lá ${pair.rank} đỏ`} className="showcase-card showcase-card-red" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={pair.blackImg} alt={`Lá ${pair.rank} đen`} className="showcase-card showcase-card-black" />
                </button>
                <div className="showcase-copy" aria-hidden={!isOpen}>
                  <div className="showcase-copy-inner">
                    <h3>{pair.rank}</h3>
                    <p className="showcase-quote">{pair.quote}</p>
                    <p className="showcase-desc">{pair.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
