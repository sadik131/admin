import React, { useState } from 'react';
import { categoryData, PrintQrData } from '../../option';
import SearchInput from '../../components/Form/SearchField';
import ClassSelect from '../../components/Form/SelectField';
import PrintQRTable from '../../components/table/PrintQRTable';
import QRCodeGenerator from '../../components/layout/QRCodeGenerator';

function PrintQR() {
  const [searchExam, setSearchExam] = useState('');

  // You can update filtering logic as needed
  const filteredData = PrintQrData.filter(item =>
    item.code.toLowerCase().includes(searchExam.toLowerCase())
  );

  return (
    <div className="px-4 sm:px-6 pt-6 font-roboto bg-bgColor min-h-screen">
      <h1 className="text-xl font-semibold mb-4">Manage your QR code</h1>

      <div className="max-w-7xl mx-auto p-6 shadow-md rounded-lg bg-white font-roboto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Print QR Code</h1>

        {/* Responsive Filter Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full md:w-2/3">
            <ClassSelect
              type="Warehouse* "
              placeholder="Select"
              padding="py-2 px-4 w-full"
              option={[...new Set(categoryData.map((data) => data.status))]}
            />
            <ClassSelect
              type="Store* "
              placeholder="Select"
              padding="py-2 px-4 w-full"
              option={[...new Set(categoryData.map((data) => data.status))]}
            />
          </div>

          <div className="w-full md:w-1/3">
            <SearchInput
              placeholder="Search"
              value={searchExam}
              padding="px-4 py-2 w-full"
              onChange={(e) => setSearchExam(e.target.value)}
            />
          </div>
        </div>

        {/* Table Wrapper with overflow */}
        <div className="overflow-x-auto mb-6">
          <PrintQRTable data={filteredData} />
        </div>

        {/* QR Code Generator Section */}
        <div className="w-full">
          <QRCodeGenerator />
        </div>
      </div>
    </div>
  );
}

export default PrintQR;
