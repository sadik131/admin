import React from 'react';
import {
  BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Page A', uv: 100 },
  { name: 'Page B', uv: 200 },
  { name: 'Page C', uv: 300 },
  { name: 'Page D', uv: 240 },
  { name: 'Page E', uv: 500 },
  { name: 'Page F', uv: 700 },
  { name: 'Page G', uv: 100 },
];

const BarChartCompo = () => {
  return (
    <div className="w-1/2 h-[600px]"> 
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="orange" stroke="" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="green" stroke="" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartCompo;
