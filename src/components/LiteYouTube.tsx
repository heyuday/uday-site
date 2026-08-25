"use client";

import { useState } from "react";

/**
 * Click-to-load YouTube embed. Ships a thumbnail and nothing else until the
 * viewer asks for the player — a raw iframe costs ~500KB on first paint.
 */
export default function LiteYouTube({
  id,
  title,
  href,
}: {
  id: string;
  title: string;
  href: string;
}) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="border-line bg-ink relative aspect-video w-full overflow-hidden rounded-lg border">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="border-line bg-panel-2 relative aspect-video w-full overflow-hidden rounded-lg border">
      {/* Plain <img>: the thumbnail is a remote asset on a static export, and
          maxres doesn't exist for every upload — hence the hq fallback. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        onError={(e) => {
          const el = e.currentTarget;
          if (!el.dataset.fallback) {
            el.dataset.fallback = "1";
            el.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
          }
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={() => setActive(true)}
        className="group bg-ink/15 hover:bg-ink/5 absolute inset-0 flex items-center justify-center transition-colors"
      >
        <span className="sr-only">Play: {title}</span>
        <span
          aria-hidden="true"
          className="bg-paper/95 flex h-14 w-20 items-center justify-center rounded-lg shadow-sm transition-transform group-hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="fill-ink h-6 w-6 translate-x-0.5">
            <path d="M6 4l14 8-14 8z" />
          </svg>
        </span>
      </button>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-paper/95 text-ink absolute right-3 bottom-3 rounded px-2.5 py-1 font-mono text-[11px]"
      >
        watch on youtube ↗
      </a>
    </div>
  );
}
