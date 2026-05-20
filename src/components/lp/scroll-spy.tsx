"use client";

import { useEffect } from "react";

export function ScrollSpy({ targets }: { targets: string[] }) {
  useEffect(() => {
    const sections = targets
      .map((href) => document.querySelector(href))
      .filter((el): el is HTMLElement => el instanceof HTMLElement);
    const links = targets
      .map((href) =>
        document.querySelector<HTMLAnchorElement>(`[data-spy="${href}"]`),
      )
      .filter((el): el is HTMLAnchorElement => el !== null);

    if (sections.length === 0 || links.length === 0) return;

    let ticking = false;
    function update() {
      ticking = false;
      const y = window.scrollY + 120;
      let activeIdx = -1;
      sections.forEach((sec, i) => {
        if (sec.offsetTop <= y) activeIdx = i;
      });
      links.forEach((link, i) => {
        link.classList.toggle("active", i === activeIdx);
      });
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [targets]);

  return null;
}
