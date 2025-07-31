import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const PaiChartCompo = () => {
  const [state, setState] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
        width: 380,
      },
      labels: ["Apples", "Bananas", "Oranges", "Grapes", "Berries"],
      colors: ["#FF4560", "#00E396", "#008FFB", "#FEB019", "#775DD0"],
      legend: {
        position: "right",
        fontSize: "14px",
        markers: {
          width: 12,
          height: 12,
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "14px",
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return `${val} units`;
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 250,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className="w-1/2 flex justify-center items-center p-4 bg-white rounded shadow">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        width={state.options.chart.width}
      />
    </div>
  );
};
