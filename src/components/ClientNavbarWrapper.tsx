// ClientNavbarWrapper.tsx

"use client"; // Indique que ce composant est un Client Component

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { usePathname } from 'next/navigation'; // Pour détecter la route actuelle
import { useEffect, useState } from 'react'; // Pour gérer l'état et les effets
import { Locale } from "@/lib/definitions";
import { User } from "@/lib/data";
import { getClientIntl } from "@/lib/intl.client"; // Importer la fonction intl client
import { IntlShape } from '@formatjs/intl'; // Importez le type IntlShape

interface Props {
  locale: Locale;
  user: User;
}

export default function ClientNavbarWrapper({ locale, user }: Props) {
  const pathname = usePathname();
  const [intl, setIntl] = useState<IntlShape<string> | null>(null);
  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    async function loadIntlAndMessages() {
      const messages = await getMessages(locale); // Charger les messages ici
      const intlInstance = getClientIntl(locale, messages); // Utiliser getClientIntl avec les messages chargés
      setIntl(intlInstance);
      setMessages(messages);
    }
    loadIntlAndMessages();
  }, [locale]);

  const isLoginPage = pathname.includes('/login');

  if (!intl || !messages) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!isLoginPage && <Navbar locale={locale} user={user} messages={messages} />}
      {!isLoginPage && <Sidebar locale={locale} />}
    </>
  );
}

// Fonction asynchrone pour charger les messages selon la locale
async function getMessages(locale: string) {
  return (await import(`../lang/${locale}.json`)).default;
}
