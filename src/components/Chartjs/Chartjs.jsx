import React from 'react';
import {Line} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register (
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DiagnosticHistoryChart = ({history}) => {
  const labels = history.map (
    diagnosis => `${diagnosis.month}, ${diagnosis.year}`
  );
  const systolicData = history.map (
    diagnosis => diagnosis.blood_pressure.systolic.value
  );
  const diastolicData = history.map (
    diagnosis => diagnosis.blood_pressure.diastolic.value
  );

  const data = {
    labels,
    datasets: [
      {
        label: 'Systolic',
        data: systolicData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: false,
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
        pointBackgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Diastolic',
        data: diastolicData,
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        fill: false,
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
        pointBackgroundColor: 'rgb(54, 162, 235)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Blood Pressure',
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value',
        },
        min: 60,
        max: 180,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default DiagnosticHistoryChart;
