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
        label: 'Utilisateurs actifs',
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

   // Options pour configurer la légende à gauche
   const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Permet de gérer la taille manuellement
    plugins: {
      legend: {
        display: true,
        position: 'top', // Place la légende au-dessus
        align: 'start',   // Alignement des éléments de la légende à gauche
        labels: {
          padding: 5,    // Espacement autour des éléments de la légende
          boxWidth: 20,  // Taille de la boîte colorée de la légende
        },
      },
    },
  };
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Utilisateurs Actifs - Graphique à Barres */}
      <div className="p-2">
        <Card>
          <CardHeader>{activeUsersMessage}</CardHeader>
          <CardBody>
            <Bar data={barChartData} />
          </CardBody>
        </Card>
      </div>

      {/* Ventes - Graphique Linéaire */}
      <div className="p-2">
        <Card>
          <CardHeader>{salesMessage}</CardHeader>
          <CardBody>
            <Line data={lineChartData} />
          </CardBody>
        </Card>
      </div>

       {/* Taux de Conversion - Graphique Circulaire */}
       <div className="p-2">
        <Card>
          <CardHeader>{conversionRateMessage}</CardHeader>
          <CardBody>
            <div className="flex flex-col items-center">
              {/* Légende alignée à gauche */}
              <div className="self-start">
              </div>
              {/* Graphique circulaire centré */}
              <div className="w-48 h-48">
              <Pie data={pieChartData} options={pieChartOptions} />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}