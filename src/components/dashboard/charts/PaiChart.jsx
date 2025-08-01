import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PaiChartCompo = () => {
  const [state] = useState({
    series: [30, 30, 20, 20],
    options: {
      chart: {
        type: "donut",
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%' // Adjust this to change the donut hole size
          }
        }
      },
      labels: ["Purchase", "Sales", "Expense", "Gross Profit"],
      colors: ["#487FFF", "#8252E9", "#FF9F29", "#16A34A"],
      legend: {
        position: "bottom",
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
            return `${val}%`; // Changed from "units" to "%"
          },
        },
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: '100%'
          },
          legend: {
            position: "bottom"
          }
        }
      }]
    },
  });

  return (
    <div className="bg-white rounded-lg w-full">
      {/* top */}
      <div className="flex py-4 px-6 rounded-t-lg border-b border-[#d1d5db80] justify-between items-center">
        <h2 className="text-lg font-semibold">Product by Category</h2>
        <button className="text-blue-600 text-sm font-medium">View All</button>
      </div>
      {/* chart */}
      <div className="w-full p-4 bg-white rounded">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
          width="100%"
        />
      </div>
    </div>
  );
};

export default PaiChartCompo;