"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { X } from "lucide-react";
import {
  PROJECTS,
  type ProjectItem,
  type ProjectType,
  type ProjectCategory,
} from "@/data/projects";

function getDisplaySkills(project: ProjectItem, locale: string): string[] {
  if (locale === "zh" && project.skillsZh?.length) {
    return project.skillsZh;
  }
  return project.skills;
}

function getCtaKey(type: ProjectType): "ctaClickToTry" | "ctaReadPaper" | "ctaWatchDemo" {
  switch (type) {
    case "website":
      return "ctaClickToTry";
    case "pdf":
      return "ctaReadPaper";
    case "demo":
      return "ctaWatchDemo";
  }
}

const CATEGORY_CONFIG: Record<
  ProjectCategory,
  {
    titleKey: "category1Title" | "category2Title";
    descKey: "category1Description" | "category2Description";
    borderColor: string;
    hoverGlow: string;
    tagBg: string;
  }
> = {
  dev: {
    titleKey: "category1Title",
    descKey: "category1Description",
    borderColor: "border-[#88dffa]",
    hoverGlow:
      "hover:scale-[1.05] hover:shadow-[0_0_15px_rgba(136,223,250,0.5)] focus-visible:ring-[#88dffa]",
    tagBg: "bg-sky-100/90 text-sky-800 dark:bg-sky-200/50 dark:text-sky-900",
  },
  ml: {
    titleKey: "category2Title",
    descKey: "category2Description",
    borderColor: "border-[#ffc1f3]",
    hoverGlow:
      "hover:scale-[1.05] hover:shadow-[0_0_15px_rgba(255,193,243,0.5)] focus-visible:ring-[#ffc1f3]",
    tagBg: "bg-pink-100/90 text-pink-800 dark:bg-pink-200/50 dark:text-pink-900",
  },
};

export function ProjectGallery() {
  const locale = useLocale();
  const t = useTranslations("projects");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const devProjects = PROJECTS.filter((p) => p.category === "dev");
  const mlProjects = PROJECTS.filter((p) => p.category === "ml");
  const selected = selectedId != null ? PROJECTS.find((p) => p.id === selectedId) : null;
  const close = useCallback(() => setSelectedId(null), []);

  function renderSection(category: ProjectCategory, projects: typeof PROJECTS) {
    const config = CATEGORY_CONFIG[category];
    const isDev = category === "dev";
    const titleColor = isDev ? "text-sky-600 dark:text-sky-400" : "text-pink-600 dark:text-pink-400";

    return (
      <section className="w-full">
        <header className="mb-6">
          <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${titleColor}`}>
            {t(config.titleKey)}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {t(config.descKey)}
          </p>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const titleKey = `project${project.id}Title` as const;
            const title = t(titleKey);
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedId(project.id)}
                className={`group relative w-full overflow-hidden rounded-xl border bg-white/40 text-left shadow-sm backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white ${config.borderColor} ${config.hoverGlow}`}
              >
                <div className="relative aspect-video w-full bg-slate-100/50">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover transition duration-200 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute bottom-0 left-0 right-0 bg-white/60 backdrop-blur-sm px-3 py-2 text-sm font-semibold text-slate-800">
                    {title}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 border-t border-slate-200/60 bg-white/30 px-3 py-2 backdrop-blur-sm">
                  {getDisplaySkills(project, locale).map((skill) => (
                    <span
                      key={skill}
                      className={`rounded px-2 py-0.5 text-xs font-medium ${config.tagBg}`}
                    >
                      {skill.startsWith("#") ? skill : `#${skill}`}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-20 sm:gap-24">
        {renderSection("dev", devProjects)}
        {renderSection("ml", mlProjects)}
      </div>

      {/* Modal — light glassmorphism */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            aria-hidden
            onClick={close}
          />
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-xl backdrop-blur-md dark:bg-slate-50/95 dark:border-slate-300/50">
            <div className="relative aspect-video w-full bg-slate-100/80">
              <Image
                src={selected.image}
                alt=""
                fill
                className="object-contain"
                sizes="512px"
              />
              <button
                type="button"
                onClick={close}
                className="absolute right-2 top-2 rounded-full bg-white/90 p-1.5 text-slate-700 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-5">
              <h2 id="project-modal-title" className="text-xl font-semibold text-slate-800 dark:text-slate-900">
                {t(`project${selected.id}Title` as const)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-600">
                {t(`project${selected.id}Description` as const)}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {getDisplaySkills(selected, locale).map((skill) => (
                  <span
                    key={skill}
                    className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-200/80 dark:text-slate-800"
                  >
                    {skill.startsWith("#") ? skill : `#${skill}`}
                  </span>
                ))}
              </div>
              <a
                href={selected.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:bg-slate-700 dark:hover:bg-slate-600"
              >
                {t(getCtaKey(selected.type))}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
