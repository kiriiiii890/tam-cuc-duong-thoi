"use client";

import { useEffect, useRef, useState } from "react";
import CartButton from "./cart/CartButton";

const HIDE_DELAY_MS = 2500;
const TOP_THRESHOLD = 40;

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const syncHeaderHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current.offsetHeight}px`
        );
      }
    };
    syncHeaderHeight();
    window.addEventListener("resize", syncHeaderHeight);

    const clearHideTimer = () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
    };

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      const scrollingUp = y < lastY.current;

      if (y <= TOP_THRESHOLD || scrollingUp) {
        setHidden(false);
        clearHideTimer();
      } else {
        // scrolling down (or paused after doing so) — hide once the user
        // stops for a moment, rather than the instant they scroll down
        clearHideTimer();
        hideTimer.current = setTimeout(() => setHidden(true), HIDE_DELAY_MS);
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", syncHeaderHeight);
      window.removeEventListener("scroll", onScroll);
      clearHideTimer();
    };
  }, []);

  return (
    <header ref={headerRef} className={`site-header${hidden ? " is-hidden" : ""}`}>
      <div className="wrap">
        <a href="#top" className="brand">
          <span>TAM CÚC</span>
          <span className="accent">ĐƯƠNG THỜI</span>
        </a>
        <nav className="site-nav">
          <a href="#san-pham">Sản phẩm</a>
          <a href="#danh-gia">Đánh giá</a>
          <a href="#faq">FAQ</a>
          <a href="#lien-he">Liên hệ</a>
        </nav>
        <a className="btn btn-primary" href="#goi-mua">
          Mua ngay
        </a>
        <CartButton />
      </div>
    </header>
  );
}
