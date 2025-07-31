import React from 'react';

const ProductTable = ({ tableData, tableHead ,title}) => {


  return (
    <div className="bg-white rounded-lg h-fit">

      <div className="flex py-4 px-6 rounded-t-lg border-b border-[#d1d5db80] justify-between items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button className="text-blue-600 text-sm font-medium">View All</button>
      </div>

      <div className="overflow-x-auto p-6">
        <table className="min-w-full border border-[#EBECEF]">
          <thead className=''>
            <tr className="bg-[#F5F6FA]">
              {tableHead.map((th) => (
                <th key={th.id} className="p-4 text-left text-sm font-medium text-black">{th.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((supplier) => (
              <tr key={supplier.id} className="border-b border-gray-100 text-secondary last:border-0">
                <td className="p-4">{supplier.id}</td>
                {supplier.name && <td className="p-4 ">{supplier.name}</td>}
                {supplier.amount && <td className="p-4">{supplier.amount}</td>}
                {supplier.date && <td className="p-4">{supplier.date}</td>}
                {supplier.paymentType && <td className="p-4">{supplier.paymentType}</td>}
                {supplier.paidAmount && <td className="p-4">{supplier.paidAmount}</td>}
                {supplier.dueAmount && <td className="p-4">{supplier.dueAmount}</td>}
                {supplier.payableAmount && <td className="p-4">{supplier.payableAmount}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;