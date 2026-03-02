import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { HighlightedIntro } from "@/components/HighlightedIntro";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  const introKeys = ["intro1", "intro2", "intro3", "intro4"] as const;

  return (
    <div className="home-vaporwave min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:gap-16">
        {/* Left column: circular profile + contact details */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="relative aspect-square w-48 shrink-0 overflow-hidden rounded-full bg-muted/50 sm:w-56">
            <Image
              src="/About_photo.jpg"
              alt={t("imageAlt")}
              fill
              className="object-cover"
              sizes="224px"
            />
          </div>

          <div className="mt-6 flex flex-col gap-3 text-sm text-muted">
            <a
              href="https://maps.google.com/?q=New+York+NY"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              <span>{t("location")}</span>
            </a>
            <a
              href={`mailto:${t("email")}`}
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              <span>{t("email")}</span>
            </a>
            <a
              href="https://github.com/zix7iu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4 shrink-0" aria-hidden />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/zixuanliu77/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
              <span>LinkedIn</span>
            </a>
            <a
              href="/English_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-xs font-medium text-accent underline-offset-2 hover:underline"
            >
              {t("checkResume")}
            </a>
          </div>
        </div>

        {/* Right column: professional introduction */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h1>
          <div className="mt-6">
            <HighlightedIntro
              paragraphs={introKeys
                .map((key) => t(key as (typeof introKeys)[number]))
                .filter(Boolean)}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
