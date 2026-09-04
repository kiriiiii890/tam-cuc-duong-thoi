"use client";

import { useEffect } from "react";

// document.fonts.ready alone isn't reliable here: Google Fonts splits each
// family into per-unicode-range files (a "vietnamese" subset separate from
// "latin"), and the browser only fetches a given subset once it discovers
// text on the page that needs it. That discovery happens incrementally
// during layout, so `.ready` can resolve before a subset used further down
// the page (e.g. the Vietnamese diacritics in a Fraunces heading in the
// FAQ section) has actually been requested — the class flips on, the text
// un-hides, and it briefly paints in the fallback font.
//
// document.fonts.load(font, text) sidesteps that: passing sample text that
// contains the actual diacritics forces the browser to resolve which
// subset covers it and fetch that specific file, and the returned promise
// only settles once it's loaded. Explicitly load both.
const SAMPLE = "Đương Thời ẩ ế ề ệ ỉ ỏ ồ ộ ớ ờ ừ ấ";

export default function FontReady() {
  useEffect(() => {
    Promise.all([
      document.fonts.load('700 16px "Lora"', SAMPLE),
      document.fonts.load('700 16px "Fraunces"', SAMPLE),
      document.fonts.ready,
    ]).then(() => {
      document.documentElement.classList.add("fonts-loaded");
    });
  }, []);

  return null;
}
