import React from "react";
import Chart from "react-apexcharts";

const FloorInventoryChart = () => {
  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "50%",
        dataLabels: { position: "top" },
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Floor 1", "Floor 2", "Floor 3", "Floor 4", "Floor 5", "Floor 6"],
      title: { text: "Floors", style: { fontSize: "14px" } },
    },
    yaxis: {
      title: { text: "Count", style: { fontSize: "14px" } },
    },
    colors: ["#6366F1", "#FACC15", "#EF4444"], // Total = Indigo, Low Stock = Yellow, Damaged = Red
    grid: { strokeDashArray: 4 },
    tooltip: {
      y: {
        formatter: (val) => `${val} items`
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      markers: { radius: 12 },
    },
  };

  const series = [
    {
      name: "Total Items",
      data: [120, 95, 140, 80, 60, 200],
    },
    {
      name: "Low Stock",
      data: [10, 5, 15, 8, 3, 20],
    },
    {
      name: "Damaged Items",
      data: [5, 2, 6, 1, 0, 8],
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">
        Floor-Wise Inventory Status
      </h2>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default FloorInventoryChart;
