import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

import { Bar } from "react-chartjs-2";
// import React from 'react';
import styled from "styled-components";
import usersStore from "../../../../store";

const Container = styled.div`
  margin-top: 30px;
`;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  const { chartData, filter } = usersStore();

  const lastTwoDigits = filter.toString().slice(-2);

  const labels = Array.from({ length: 12 }, (_, i) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthLabel = monthNames[i];
    const yearLabel = lastTwoDigits;

    return `${monthLabel} ${yearLabel}`;
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        axis: "x",
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          fontFamily: "Lato",
        },
      },
      y: {
        axis: "y",
        grid: {
          display: true,
          drawBorder: false,
          borderDash: [5, 5],
        },
        ticks: {
          fontFamily: "Lato",
          min: 0, // Minimum value for the Y-axis
          max:
            Math.max(
              ...chartData.swipes,
              ...chartData.likes,
              ...chartData.matches
            ) + 1, // Maximum value for the Y-axis
          stepSize: 1, // Specify the step size to make the labels whole numbers
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Swipes",
        data: [...chartData.swipes, Math.max(...chartData.swipes) + 3],
        backgroundColor: "#50cd89",
      },
      {
        label: "Likes",
        data: [...chartData.likes, Math.max(...chartData.likes) + 3],
        backgroundColor: "#ce1f1f",
      },
      {
        label: "Matches",
        data: [...chartData.matches, Math.max(...chartData.matches) + 3],
        backgroundColor: "#00a3ff",
      },
    ],
  };
  return (
    <Container>
      <Bar options={options} data={data} />
    </Container>
  );
};

export default Charts;
