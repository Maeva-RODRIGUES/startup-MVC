// intl.ts

import "server-only";
import { createIntl } from "@formatjs/intl";
import type { Locale } from "@/lib/definitions";

// Configuration d'internationalisation spécifique au serveur
export function getIntl(locale: Locale) {
  const messages = require(`../lang/${locale}.json`);
  return createIntl({ locale, messages });
}

