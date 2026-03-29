"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import {
  EXPERIENCE_TIMELINE,
  EXPERIENCE_TIMELINE_ZH,
  EDUCATION_BLOCKS,
  EDUCATION_BLOCKS_ZH,
  EXPERIENCE_SPINE_EN,
  EXPERIENCE_SPINE_ZH,
  type TimelineItem,
  type TimelineRow,
  type EducationBlock,
} from "@/data/experience";

function getEducationBlockStyle(
  block: EducationBlock,
  spineMin: number,
  spineMax: number,
  yearCount: number
): { top: string; height: string } {
  const endCapped = Math.min(block.endYear, spineMax);
  const startCapped = Math.max(block.startYear, spineMin);
  const topPct = ((spineMax - endCapped) / yearCount) * 100;
  const spanYears = endCapped - startCapped + 1;
  const heightPct = (spanYears / yearCount) * 100;
  return { top: `${topPct}%`, height: `${heightPct}%` };
}

function EducationSegment({
  block,
  spineMin,
  spineMax,
  yearCount,
}: {
  block: EducationBlock;
  spineMin: number;
  spineMax: number;
  yearCount: number;
}) {
  const style = getEducationBlockStyle(block, spineMin, spineMax, yearCount);
  return (
    <div
      className="absolute left-0 right-0 flex gap-2 items-center rounded-lg border border-pink-200/30 bg-pink-200/5 px-2 py-1.5 transition-all duration-300 hover:bg-pink-200/20 hover:border-pink-200/50"
      style={{ top: style.top, height: style.height, minHeight: "2.5rem" }}
    >
      {/* Vertical segment bar */}
      <div
        className="w-1 shrink-0 rounded-full bg-pink-300/60"
        style={{ height: "100%", minHeight: "1.5rem" }}
        aria-hidden
      />
      {/* Label centered in the middle of the time span */}
      <div className="flex-1 min-w-0 py-1 text-pink-900/80 dark:text-pink-200/90 flex flex-col justify-center">
        <p className="text-[10px] font-medium uppercase tracking-wider opacity-90">
          {block.dateRange}
        </p>
        <p className="mt-0.5 font-semibold text-sm leading-tight">{block.title}</p>
        {block.subtitle && (
          <p className="mt-0.5 text-xs leading-snug opacity-90">{block.subtitle}</p>
        )}
      </div>
    </div>
  );
}

function TimelineCardLeft({
  item,
  isExpanded,
  onToggle,
}: {
  item: TimelineItem;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const hasDetails =
    (item.achievements?.length ?? 0) > 0 || (item.skills?.length ?? 0) > 0;

  return (
    <div className="rounded-xl border-l-4 border-sky-300/80 border border-sky-200/40 bg-sky-50/40 dark:bg-sky-950/30 dark:border-sky-400/50 text-left text-foreground shadow-sm overflow-hidden transition-shadow hover:shadow-md hover:border-sky-300/60">
      <button
        type="button"
        onClick={hasDetails ? onToggle : undefined}
        className={`w-full p-4 text-left ${hasDetails ? "cursor-pointer" : "cursor-default"}`}
        aria-expanded={hasDetails ? isExpanded : undefined}
        aria-label={hasDetails ? (isExpanded ? "Collapse details" : "Expand details") : undefined}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium uppercase tracking-wider opacity-80">
              {item.dateRange}
            </p>
            <p className="mt-1 font-semibold">{item.title}</p>
            {item.subtitle && (
              <p className="mt-0.5 text-sm text-muted">{item.subtitle}</p>
            )}
          </div>
          {hasDetails && (
            <span
              className={`flex-shrink-0 rounded-full p-0.5 text-muted transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
              aria-hidden
            >
              <ChevronDown className="h-4 w-4" />
            </span>
          )}
        </div>
      </button>

      {/* Expandable content with height/opacity transition */}
      {hasDetails && (
        <div
          className={`transition-all duration-300 ease-out ${
            isExpanded ? "overflow-y-auto overflow-x-hidden" : "overflow-hidden"
          }`}
          style={{
            maxHeight: isExpanded ? "400px" : "0",
            opacity: isExpanded ? 1 : 0,
          }}
        >
          <div className="border-t border-border/50 bg-muted/20 px-4 pb-4 pt-3 min-h-0">
              {item.achievements && item.achievements.length > 0 && (
                <ul className="space-y-1.5 text-sm text-muted">
                  {item.achievements.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.skills && item.skills.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-border/80 px-2 py-0.5 text-xs font-medium text-muted"
                    >
                      {skill.startsWith("#") ? skill : `#${skill}`}
                    </span>
                  ))}
                </div>
              )}
            </div>
        </div>
      )}
    </div>
  );
}

function TimelineRowBlock({
  row,
  rowIndex,
  isVisible,
  expandedKey,
  setExpandedKey,
}: {
  row: TimelineRow;
  rowIndex: number;
  isVisible: boolean;
  expandedKey: string | null;
  setExpandedKey: (key: string | null) => void;
}) {
  return (
    <div
      className={`flex items-start gap-0 transition-all duration-500 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {/* Left: Intern & Research — staggered slide-in from left */}
      <div className="w-[calc(58%-2rem)] pr-4 sm:pr-6 text-right">
        <div className="inline-block space-y-3 text-left max-w-lg ml-auto">
          {row.left.length > 0 ? (
            row.left.map((item, i) => {
              const key = `${rowIndex}-${i}`;
              return (
                <div
                  key={key}
                  className={`experience-slide-in-left ${isVisible ? "visible" : ""}`}
                  style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
                >
                  <TimelineCardLeft
                    item={item}
                    isExpanded={expandedKey === key}
                    onToggle={() =>
                      setExpandedKey(expandedKey === key ? null : key)
                    }
                  />
                </div>
              );
            })
          ) : (
            <div className="h-4" />
          )}
        </div>
      </div>

      {/* Center: line node + year (glow when in view) */}
      <div className="flex flex-shrink-0 flex-col items-center w-16">
        <span
          className={`text-xs font-semibold tabular-nums text-slate-600 dark:text-slate-400 ${
            isVisible ? "experience-year-glow" : ""
          }`}
        >
          {row.year}
        </span>
        <div className="mt-1.5 h-3 w-3 rounded-full border-2 border-white dark:border-slate-900 shadow-sm bg-gradient-to-b from-sky-300 to-pink-300" />
      </div>

      {/* Right: spacer; education segments rendered in overlay */}
      <div className="w-[calc(42%-2rem)] pl-4 sm:pl-6" aria-hidden />
    </div>
  );
}

export function ExperienceTimeline() {
  const locale = useLocale();
  const timeline: TimelineRow[] =
    locale === "zh" ? EXPERIENCE_TIMELINE_ZH : EXPERIENCE_TIMELINE;
  const spine =
    locale === "zh" ? EXPERIENCE_SPINE_ZH : EXPERIENCE_SPINE_EN;
  const educationBlocks =
    locale === "zh" ? EDUCATION_BLOCKS_ZH : EDUCATION_BLOCKS;

  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set());
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const rowEls = container.querySelectorAll("[data-timeline-row]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );
    rowEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [timeline]);

  return (
    <div ref={containerRef} className="relative">
      {/* Central vertical line — gradient light blue to light pink */}
      <div
        className="absolute top-0 bottom-0 w-0.5 -translate-x-px rounded-full"
        style={{
          left: "calc(58% + 2rem)",
          background: "linear-gradient(to bottom, #7dd3fc, #c4b5fd, #f9a8d4)",
        }}
        aria-hidden
      />

      {/* Rows: fixed min-height so education block % aligns with spine years */}
      <div className="space-y-0">
        {timeline.map((row, index) => (
          <div
            key={row.year}
            data-timeline-row
            data-index={index}
            className="relative min-h-[6.5rem] py-8 first:pt-2 last:pb-2"
          >
            <TimelineRowBlock
              row={row}
              rowIndex={index}
              isVisible={visibleIndexes.has(index)}
              expandedKey={expandedKey}
              setExpandedKey={setExpandedKey}
            />
          </div>
        ))}
      </div>

      {/* Education: light pink blocks beside the main spine (hover to increase opacity) */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: "calc(58% + 2rem)", right: 0 }}
        aria-hidden
      >
        <div className="relative h-full w-full max-w-sm pl-3">
          {educationBlocks.map((block, i) => (
            <EducationSegment
              key={i}
              block={block}
              spineMin={spine.min}
              spineMax={spine.max}
              yearCount={spine.yearCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
