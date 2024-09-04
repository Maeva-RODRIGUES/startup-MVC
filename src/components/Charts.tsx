// Charts.tsx (Client Component)

'use client'; // Indique que c'est un composant client

import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js';
import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import CardBody from "@/components/CardBody";

// Enregistrer les composants de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface ChartsProps {
  activeUsersData: { date: string; users: number; }[];
  salesData: { date: string; sales: number; }[];
  conversionRateData: { name: string; value: number; }[];
  activeUsersMessage: string;
  salesMessage: string;
  conversionRateMessage: string;
}

export default function Charts({
  activeUsersData,
  salesData,
  conversionRateData,
  activeUsersMessage,
  salesMessage,
  conversionRateMessage,
}: ChartsProps) {
  const barChartData = {
    labels: activeUsersData.map(data => data.date),
    datasets: [
      {
        label: 'Utilisateurs Actifs',
        data: activeUsersData.map(data => data.users),
        backgroundColor: '#8884d8',
      },
    ],
  };

  const lineChartData = {
    labels: salesData.map(data => data.date),
    datasets: [
      {
        label: 'Ventes',
        data: salesData.map(data => data.sales),
        borderColor: '#82ca9d',
        fill: false,
      },
    ],
  };

  const pieChartData = {
    labels: conversionRateData.map(data => data.name),
    datasets: [
      {
        label: 'Taux de Conversion',
        data: conversionRateData.map(data => data.value),
        backgroundColor: ['#0088FE', '#FF8042'],
      },
    ],
  };

  return (
    <>
      {/* Utilisateurs Actifs - Graphique à Barres */}
      <div>
        <Card>
          <CardHeader>{activeUsersMessage}</CardHeader>
          <CardBody>
            <Bar data={barChartData} />
          </CardBody>
        </Card>
      </div>

      {/* Ventes - Graphique Linéaire */}
      <div>
        <Card>
          <CardHeader>{salesMessage}</CardHeader>
          <CardBody>
            <Line data={lineChartData} />
          </CardBody>
        </Card>
      </div>

      {/* Taux de Conversion - Graphique Circulaire */}
      <div>
        <Card>
          <CardHeader>{conversionRateMessage}</CardHeader>
          <CardBody>
            <Pie data={pieChartData} />
          </CardBody>
        </Card>
      </div>
    </>
  );
}
