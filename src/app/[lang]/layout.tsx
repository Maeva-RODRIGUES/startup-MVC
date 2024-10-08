// layout

import Content from "@/components/Content";
import ClientNavbarWrapper from "@/components/ClientNavbarWrapper";
import ClientWrapper from "@/components/ClientWrapper";

import { getUser } from "@/lib/data";
import { Locale } from "@/lib/definitions";

import { i18n } from "../../../i18n-config";

import "@/app/globals.css";

export const metadata = {
  title: "MVP Next dashboard",
  description: "How to create internationalized MVC dasboard with Next.js",
};

interface Props {
  params: { lang: Locale };
  children: React.ReactNode;
}

export default async function Layout({ children, params }: { children: React.ReactNode, params: { lang: Locale } }) {
  const locale = params.lang;
  const user = await getUser();


  if (!locale) {
    throw new Error("Locale is not defined");
  }


  return (
    <html lang={locale}>
      <body className="min-h-screen bg-gray-100">
        <ClientNavbarWrapper locale={locale} user={user} />
        <ClientWrapper>
          <Content>{children}</Content>
        </ClientWrapper>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
