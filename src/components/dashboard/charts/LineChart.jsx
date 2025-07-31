import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const inventoryData = [
  { month: "Jan", stock: 500, sold: 120 },
  { month: "Feb", stock: 450, sold: 160 },
  { month: "Mar", stock: 470, sold: 140 },
  { month: "Apr", stock: 420, sold: 180 },
  { month: "May", stock: 400, sold: 210 },
  { month: "Jun", stock: 380, sold: 230 },
  { month: "Jul", stock: 360, sold: 240 },
];

export default function InventoryLineChart() {
  return (
    <div className="h-[500px] w-full mx-auto bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Monthly Inventory Overview</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={inventoryData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="stock" stroke="#8884d8" name="Available Stock" />
          <Line type="monotone" dataKey="sold" stroke="#82ca9d" name="Sold Units" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
