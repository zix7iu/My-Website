import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ProjectGallery } from "@/components/ProjectGallery";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("projects");

  return (
    <div className="home-vaporwave min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          {t("title")}
        </h1>
        <div className="mt-12">
          <ProjectGallery />
        </div>
      </div>
    </div>
  );
}
