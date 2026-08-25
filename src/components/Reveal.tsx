"use client";

import { useEffect, useRef, useState } from "react";

/**
 * One entrance, once. Lighter than pulling in a motion library for a fade.
 * `.u-reveal` is a no-op under `prefers-reduced-motion`.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      // No observer (very old browsers, some crawlers): show immediately by
      // touching the DOM rather than looping through state.
      el.dataset.shown = "true";
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-shown={shown}
      style={{ transitionDelay: `${delay}ms` }}
      className={`u-reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
