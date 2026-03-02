import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { ChevronDown, User, Code2, History, Heart } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const BENTO_ITEMS = [
  {
    href: "/about",
    labelKey: "about" as const,
    icon: User,
    glowClass: "hover:shadow-[0_0_40px_rgba(216,180,254,0.5)] hover:border-violet-200/60",
  },
  {
    href: "/projects",
    labelKey: "projects" as const,
    icon: Code2,
    glowClass: "hover:shadow-[0_0_40px_rgba(186,230,253,0.6)] hover:border-sky-200/60",
  },
  {
    href: "/experience",
    labelKey: "experience" as const,
    icon: History,
    glowClass: "hover:shadow-[0_0_40px_rgba(221,214,254,0.5)] hover:border-purple-200/60",
  },
  {
    href: "/interests",
    labelKey: "interests" as const,
    icon: Heart,
    glowClass: "hover:shadow-[0_0_40px_rgba(251,207,232,0.6)] hover:border-pink-200/60",
  },
] as const;

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tNav = await getTranslations("nav");

  return (
    <div className="home-vaporwave min-h-[calc(100vh-3.5rem)]">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        {/* Hero */}
        <section className="text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-[#1e293b]">{t("greeting")}</span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #7dd3fc, #c4b5fd, #f9a8d4)" }}
            >
              {t("name")}
            </span>
          </h1>
          <p className="mt-4 font-sans text-lg text-slate-600 sm:text-xl">
            {t("tagline")}
          </p>
          <p className="mt-8 flex items-center justify-center gap-2 font-sans text-sm text-slate-500">
            {t("hint")}
            <ChevronDown className="h-4 w-4 shrink-0" aria-hidden />
          </p>
        </section>

        {/* Bento grid */}
        <section className="mt-14 sm:mt-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {BENTO_ITEMS.map(({ href, labelKey, icon: Icon, glowClass }) => (
              <Link
                key={href}
                href={href}
                className={`group flex min-h-[140px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/40 bg-white/25 px-6 py-8 backdrop-blur-xl transition-all duration-300 ${glowClass}`}
              >
                <span className="rounded-xl bg-white/40 p-3 text-slate-600 transition-colors group-hover:text-slate-800">
                  <Icon className="h-8 w-8" aria-hidden />
                </span>
                <span className="font-sans text-lg font-semibold text-slate-700">
                  {tNav(labelKey)}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
