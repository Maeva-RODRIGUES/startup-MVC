// intl.client.ts

import { createIntl } from "@formatjs/intl";
import type { Locale } from "@/lib/definitions";

// Messages chargés de manière synchrone
import enMessages from '../lang/en.json';
import frMessages from '../lang/fr.json';
import deMessages from '../lang/de.json';

const messagesMap = {
  en: enMessages,
  fr: frMessages,
  de: deMessages,
};

export function getClientIntl(locale: Locale) {
  const messages = messagesMap[locale] || messagesMap['en'];

  return createIntl({
    locale: locale,
    messages: messages,
  });
}
