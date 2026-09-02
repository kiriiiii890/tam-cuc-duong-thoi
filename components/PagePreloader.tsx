"use client";

import { useEffect, useState } from "react";

// The page's own background art — add any future full-bleed images here too.
const PRELOAD_IMAGES = ["/images/bg-1.png", "/images/shawdow.png"];
const MAX_WAIT_MS = 6000;

export default function PagePreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadImage = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // don't block the page over one bad image
        img.src = src;
      });

    const timeout = new Promise<void>((resolve) => {
      setTimeout(resolve, MAX_WAIT_MS);
    });

    Promise.race([Promise.all(PRELOAD_IMAGES.map(loadImage)), timeout]).then(() => {
      if (!cancelled) setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={`page-preloader${loading ? "" : " is-done"}`} aria-hidden={!loading}>
      <div className="page-preloader-mark">
        <span>TAM CÚC</span>
        <span className="accent">ĐƯƠNG THỜI</span>
      </div>
    </div>
  );
}
