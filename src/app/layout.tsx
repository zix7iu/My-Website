import { headers } from "next/headers";

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const headersList = await headers();
  const locale = headersList.get("x-next-intl-locale") ?? "en";

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
