// home.tsx (Server Component)

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
    { date: "Feb", users: 200 },
    { date: "Mar", users: 250 },
    { date: "Apr", users: 400 },
  ];

  const salesData = [
    { date: "Jan", sales: 50 },
    { date: "Feb", sales: 80 },
    { date: "Mar", sales: 30 },
    { date: "Apr", sales: 100 },
  ];

  const conversionRateData = [
    { name: "Converted", value: 65 },
    { name: "Not Converted", value: 35 },
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
