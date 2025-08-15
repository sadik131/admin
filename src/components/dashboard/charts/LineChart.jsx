import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChartCompo = () => {
  const [state] = React.useState({
    series: [{
      name: "Desktops",
      data: [10, 25, 27, 15, 30]
    }],
    options: {
      chart: {
        height: '100%', // Changed from fixed 350 to percentage
        type: 'line',
        zoom: {
          enabled: false
        },
        parentHeightOffset: 0, // Important for proper height calculation
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['A', 'S', 'M', 'T', 'F', 'F'],
      },
      responsive: [{
        breakpoint: 768,
        options: {
          chart: {
            height: 300
          }
        }
      }]
    },
  });

  return (
    <div className='bg-white rounded-lg w-full'>
      {/* top */}
      <div className="flex py-4 px-6 rounded-t-lg border-b border-[#d1d5db80] justify-between items-center">
        <h2 className="text-lg font-semibold">Monthly Purchases</h2>
        <button className="text-blue-600 text-sm font-medium">View All</button>
      </div>
      {/* chart container with fixed height */}
      <div className='w-full p-4 bg-white rounded' style={{ height: '400px' }}>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
}

export default LineChartCompo;