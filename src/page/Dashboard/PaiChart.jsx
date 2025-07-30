import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const PaiChartCompo = () => {
        const [state, setState] = useState({
          
            series: [44, 55, 13, 43, 22],
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
        });

        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="pie" width={380} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
      }