import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Mon', Purchase: 44, Sales: 60 },
  { name: 'Tues', Purchase: 100, Sales: 120 },
  { name: 'Wed', Purchase: 40, Sales: 60 },
  { name: 'Thurs', Purchase: 56, Sales: 90 },
  { name: 'Fri', Purchase: 30, Sales: 50 },
  { name: 'Sat', Purchase: 58, Sales: 95 },
  { name: 'Sun', Purchase: 50, Sales: 90 },
];

const BarChartCompo = () => {
  return (
    <div className="w-full h-[600px] bg-white rounded-lg">
      <div className="flex justify-between py-4 px-6 rounded-t-lg border-b border-[#d1d5db80]">
        <h2 className="text-xl font-bold">Purchase & Sales</h2>
        <select name="" id="" className='border border-gray-300 rounded-md p-2 text-sm focus:outline-none'>
          <option value="">This Month</option>
          <option value="">This Year</option>
          <option value="">This Week</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Purchase"
            name="Net Profit"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
            />
          <Bar
            dataKey="Sales"
            name="Free Cash"
            fill="#10b981"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartCompo;