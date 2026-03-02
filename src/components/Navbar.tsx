"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Globe, User } from "lucide-react";
import Image from "next/image";

const locales = [
  { code: "en", label: "EN" },
  { code: "zh", label: "ZH" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const [profileImgError, setProfileImgError] = useState(false);

  const navLinks = [
    { href: "/about", label: t("about") },
    { href: "/projects", label: t("projects") },
    { href: "/experience", label: t("experience") },
    { href: "/interests", label: t("interests") },
  ] as const;

  function switchLocale(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Left: circle profile link to home */}
        <Link
          href="/"
          className="flex-shrink-0 rounded-full ring-2 ring-transparent transition hover:ring-border focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label={t("profileAlt")}
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-full bg-muted">
            {!profileImgError ? (
              <Image
                src="/profile.jpg"
                alt=""
                width={36}
                height={36}
                className="object-cover"
                onError={() => setProfileImgError(true)}
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center text-muted" aria-hidden>
                <User className="h-5 w-5" />
              </span>
            )}
          </div>
        </Link>

        {/* Center-right: About, Projects, Experience, Interests (left of language toggle) */}
        <div className="flex flex-1 justify-end gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`flex-shrink-0 transition-colors hover:text-accent ${
                pathname === href ? "text-foreground" : "text-muted"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right: language toggle */}
        <div className="flex flex-shrink-0 items-center gap-2">
          <Globe className="h-4 w-4 text-muted" aria-hidden />
          <div
            className="flex rounded-lg border border-border/60 bg-background/80 p-0.5"
            role="group"
            aria-label="Switch language"
          >
            {locales.map(({ code, label }) => (
              <button
                key={code}
                type="button"
                onClick={() => switchLocale(code)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  locale === code
                    ? "bg-foreground text-background"
                    : "text-muted hover:text-foreground"
                }`}
                aria-pressed={locale === code}
                aria-label={code === "en" ? "English" : "中文"}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
