"use client";

import { useEffect, useState } from "react";

const THRESHOLD = 520;

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setVisible(y > THRESHOLD);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-bar${visible ? " is-visible" : ""}`}>
      <div className="wrap">
        <div className="info">
          <div className="title">Tam Cúc Đương Thời</div>
          <div className="sub">32 lá · bản in đầu 500 bộ</div>
        </div>
        <a className="btn btn-primary" href="#goi-mua">
          Mua ngay - 800.000₫
        </a>
      </div>
    </div>
  );
}
