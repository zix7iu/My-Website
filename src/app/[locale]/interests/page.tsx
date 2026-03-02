import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { PhotoBoothStack } from "@/components/PhotoBoothStack";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function InterestsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("interests");

  return (
    <div className="interests-mesh film-grain relative min-h-screen">
      <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <h1
          className="font-display text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(90deg, #7dd3fc, #c4b5fd, #f9a8d4)",
          }}
        >
          {t("title")}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 leading-relaxed">
          {t("intro")}
        </p>
        <h2
          className="mt-20 font-display text-xl font-bold tracking-tight sm:text-2xl bg-clip-text text-transparent text-center"
          style={{
            backgroundImage: "linear-gradient(90deg, #7dd3fc, #c4b5fd, #f9a8d4)",
            textShadow:
              "0 0 20px rgba(125, 211, 252, 0.5), 0 0 40px rgba(249, 168, 212, 0.35)",
          }}
        >
          Photo Booth
        </h2>
        <div className="mt-4 flex justify-center">
          <PhotoBoothStack />
        </div>
      </div>
    </div>
  );
}
