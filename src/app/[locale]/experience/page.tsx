import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ExperiencePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("experience");

  return (
    <div className="home-vaporwave min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        {t("title")}
      </h1>
      {/* Legend aligned with timeline columns (58% left, 42% right) */}
      <div className="mt-2 flex items-center">
        <div className="w-[calc(58%-2rem)] pr-4 sm:pr-6 text-right text-sm font-medium text-foreground">
          {t("legendLeft")}
        </div>
        <div className="w-16 flex-shrink-0" />
        <div className="w-[calc(42%-2rem)] pl-4 sm:pl-6 text-left text-sm text-gray-500 dark:text-gray-400">
          {t("legendRight")}
        </div>
      </div>
      <div className="mt-10">
        <ExperienceTimeline />
      </div>
    </div>
    </div>
  );
}
