"use client";

import { useEffect, useRef, useState } from "react";
import CartButton from "./cart/CartButton";
import { withBasePath } from "@/lib/basePath";

const HIDE_DELAY_MS = 2500;
const TOP_THRESHOLD = 40;

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
        <a href="#top" className="brand" onClick={() => setMenuOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBasePath("/images/logo/logo-full-trimmed.png")} alt="Tam Cúc Đương Thời" className="brand-logo" />
        </a>
        <nav className="site-nav">
          <a href="#cach-choi">Cách chơi</a>
          <a href="#san-pham">Sản phẩm</a>
          <a href="#danh-gia">Đánh giá</a>
          <a href="#faq">FAQ</a>
          <a href="#lien-he">Liên hệ</a>
        </nav>
        <a className="btn btn-primary header-cta" href="#goi-mua">
          Mua ngay
        </a>
        <CartButton />
        <button
          type="button"
          className="header-burger"
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-menu-nav">
            <a href="#cach-choi" onClick={() => setMenuOpen(false)}>Cách chơi</a>
            <a href="#san-pham" onClick={() => setMenuOpen(false)}>Sản phẩm</a>
            <a href="#danh-gia" onClick={() => setMenuOpen(false)}>Đánh giá</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href="#lien-he" onClick={() => setMenuOpen(false)}>Liên hệ</a>
          </nav>
          <a className="btn btn-primary btn-block" href="#goi-mua" onClick={() => setMenuOpen(false)}>
            Mua ngay
          </a>
        </div>
      )}
    </header>
  );
}
