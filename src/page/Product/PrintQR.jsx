import React, { useState } from 'react'
import { categoryData, PrintQrData, QRCodeTd } from '../../option';
import SearchInput from '../../components/Form/SearchField';
import Table from '../../components/Table/TableHead';
import CommonTableRow from '../../components/Table/CommonTableRow';
import ClassSelect from '../../components/Form/SelectField';
import PrintQRTable from '../../components/table/PrintQRTable';
import QRCodeGenerator from '../../components/layout/QRCodeGenerator';

function PrintQR() {

  const [searchExam, setSearchExam] = useState('');
  const [searchSubject, setSearchSubject] = useState('');
  const [searchDate, setSearchDate] = useState('');


  const filteredData = PrintQrData.filter(item => {
    return (
      item.code.toLowerCase().includes(searchExam.toLowerCase()) &&
      item.code.toLowerCase().includes(searchSubject.toLowerCase()) &&
      item.code.includes(searchDate)
    );
  });



  return (
    <>
      <div className="px-6 pt-6 font-roboto bg-bgColor">
        <h1 className="text-xl font-semibold mb-4">Manage your QR code</h1>
        <div className={` mx-auto p-6 shadow-md rounded-lg bg-white gap-5 font-roboto`}>
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Print QR Code</h1>

          <div className="flex flex-col justify-between gap-4 mb-6">
            <div className='flex '>
              <ClassSelect type="Warehouse* " placeholder="Select" padding='py-2 px-4 w-[100px] ' option={[...new Set(categoryData.map(data => data.status))]} />
              <ClassSelect type="Store* " placeholder="Select" padding='py-2 px-4 w-[100px] ' option={[...new Set(categoryData.map(data => data.status))]} />
            </div>
            <div className='w-1/2 px-4'>
              <SearchInput
                placeholder="Search"
                value={searchExam}
                padding='px-4 py-2 w-full'
                onChange={(e) => setSearchExam(e.target.value)}
              />
            </div>

          </div>

          <PrintQRTable />
          <QRCodeGenerator />

        </div>
      </div>
    </>
  )
}

export default PrintQR