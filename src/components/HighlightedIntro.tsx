"use client";

import { useRef, useEffect, useState } from "react";

const KEYWORDS: { phrase: string; color: string }[] = [
  { phrase: "analytics and product", color: "#88dffa" },
  { phrase: "approachable actions", color: "#ffc1f3" },
  { phrase: "e-commerce platforms", color: "#ffc1f3" },
  { phrase: "Business Analytics", color: "#88dffa" },
].sort((a, b) => b.phrase.length - a.phrase.length);

type Segment = { type: "text"; content: string } | { type: "keyword"; content: string; color: string };

function splitByKeywords(text: string): Segment[] {
  const segments: Segment[] = [];
  let remaining = text;
  let lastIndex = 0;

  while (remaining.length > 0) {
    let best: { index: number; keyword: (typeof KEYWORDS)[0] } | null = null;
    for (const kw of KEYWORDS) {
      const idx = remaining.indexOf(kw.phrase);
      if (idx !== -1 && (best === null || idx < best.index)) best = { index: idx, keyword: kw };
    }
    if (best === null) {
      segments.push({ type: "text", content: remaining });
      break;
    }
    if (best.index > 0) {
      segments.push({ type: "text", content: remaining.slice(0, best.index) });
    }
    segments.push({ type: "keyword", content: best.keyword.phrase, color: best.keyword.color });
    remaining = remaining.slice(best.index + best.keyword.phrase.length);
  }

  return segments;
}

function SquiggleUnderline({ color, visible }: { color: string; visible: boolean }) {
  return (
    <svg
      className="absolute left-0 bottom-0.5 h-2 w-full overflow-visible"
      viewBox="0 0 100 12"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M 0 7 Q 18 3 35 8 Q 52 4 70 7 Q 88 10 100 6"
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="100"
        strokeDashoffset={visible ? 0 : 100}
        style={{
          transition: "stroke-dashoffset 0.7s ease-out",
        }}
        pathLength={100}
      />
    </svg>
  );
}

export function HighlightedIntro({ paragraphs }: { paragraphs: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setVisible(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="space-y-4 text-xl leading-relaxed text-slate-800"
    >
      {paragraphs.map((para, i) => {
        const segments = splitByKeywords(para);
        return (
          <p key={i}>
            {segments.map((seg, j) => {
              if (seg.type === "text") {
                return <span key={j}>{seg.content}</span>;
              }
              return (
                <span key={j} className="relative inline-block">
                  <span className="relative z-[1]">{seg.content}</span>
                  <SquiggleUnderline color={seg.color} visible={visible} />
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}
