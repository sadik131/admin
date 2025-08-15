import TableRow from "../../components/Table/TableBody";
import Table from "../../components/table/TableHead";
import Avatar from "../../components/ui/Avatar";
import {  topSupplierData, topSupplierTh } from "../../option";

function TopSupplier() {

  const statusColors = {
    active: "text-green-600",
    pending: "text-yellow-600"
  };
  return (
    <div class="w-full mx-auto bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      <div class="px-6 py-4 border-b bg-white  flex justify-between items-center">
        <h2 class="text-lg font-semibold text-gray-800">Top Suppliers</h2>
        <span class="text-xs text-gray-500">Last 30 days</span>
      </div>

      <ul class="divide-y divide-gray-200">
        {topSupplierData.map(data=>(
          <li class="px-4 py-3 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <Avatar 
                name={data.name} 
                type="user" 
                size="md"
              />
            <div>
              <p class="text-sm font-medium text-gray-800">{data.name}</p>
              <p class="text-xs text-gray-500">{data.location}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-sm font-semibold text-gray-900">{data.amount}</p>
            <p class="text-xs text-green-600">{data.growth}</p>
          </div>
        </li>
        ))}
      </ul>
      
    </div>
  );
}

export default TopSupplier