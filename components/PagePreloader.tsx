"use client";

import { useEffect, useState } from "react";
import { withBasePath } from "@/lib/basePath";

// The page's own background art — add any future full-bleed images here too.
const PRELOAD_IMAGES = ["/images/bg-1.png", "/images/shawdow.png", "/images/bg-4.png"].map(
  withBasePath
);
const MAX_WAIT_MS = 6000;

// Dark wash over bg-4.png so the pulsing mark stays legible no matter which
// part of the illustration lands under it.
const bgStyle = {
  backgroundImage: `linear-gradient(color-mix(in srgb, var(--color-text) 60%, transparent), color-mix(in srgb, var(--color-text) 60%, transparent)), url('${withBasePath(
    "/images/bg-4.png"
  )}')`,
};

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
    <div
      className={`page-preloader${loading ? "" : " is-done"}`}
      style={bgStyle}
      aria-hidden={!loading}
    >
      <div className="page-preloader-mark">
        <span>TAM CÚC</span>
        <span className="accent">ĐƯƠNG THỜI</span>
      </div>
    </div>
  );
}
