// home.tsx (Server Component)

import { getIntl } from "@/lib/intl";
import { Locale } from "@/lib/definitions";
import Charts from '@/components/Charts'; // Client component for charts
import Spinner from "@/components/Spinner";
import { Suspense } from 'react';

interface Props {
  params: {
    lang: Locale;
  };
}

export default async function Page({ params: { lang: locale } }: Props) {
  const intl = await getIntl(locale);

  // Fetch data on the server
  const activeUsersData = [
    { date: "Jan", users: 300 },
    { date: "Fev", users: 200 },
    { date: "Mars", users: 250 },
    { date: "Avril", users: 400 },
  ];

  const salesData = [
    { date: "Jan", sales: 50 },
    { date: "Fev", sales: 80 },
    { date: "Mars", sales: 30 },
    { date: "Avril", sales: 100 },
  ];

  const conversionRateData = [
    { name: "Conversion", value: 65 },
    { name: "Pas de conversion", value: 35 },
  ];

  // Pre-format the messages
  const activeUsersMessage = intl.formatMessage({ id: "page.home.activeUsers" }, { period: "30 jours" });
  const salesMessage = intl.formatMessage({ id: "page.home.sales" }, { period: "30 jours" });
  const conversionRateMessage = intl.formatMessage({ id: "page.home.conversionRate" }, { period: "30 jours" });

  return (
    <Suspense fallback={<Spinner />}>
      <Charts
        activeUsersData={activeUsersData}
        salesData={salesData}
        conversionRateData={conversionRateData}
        activeUsersMessage={activeUsersMessage}
        salesMessage={salesMessage}
        conversionRateMessage={conversionRateMessage}
      />
    </Suspense>
  );
}
