import React, { useState } from 'react'
import { examData, productData, productTableHeaders } from '../../option';
import SearchInput from '../../components/Form/SearchField';
import Table from '../../components/Table/TableHead';
import TableRow from '../../components/Table/TableBody';

function AllProduct({ title = "All Product", width = "max-w-5xl" }) {
  const [searchExam, setSearchExam] = useState('');
  const [searchSubject, setSearchSubject] = useState('');
  const [searchDate, setSearchDate] = useState('');


  const filteredData = productData.filter(item => {
    return (
      item.productName.toLowerCase().includes(searchExam.toLowerCase()) &&
      item.brand.toLowerCase().includes(searchSubject.toLowerCase()) &&
      item.brand.includes(searchDate)
    );
  });
  const statusColors = {
    "active": "bg-green-100 text-green-800",
    "inactive": "bg-red-100 text-red-800",
  };
  return (
    <div className={`max-w-5xl mx-auto p-6 shadow-md rounded-lg bg-white gap-5 font-roboto`}>
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">{title}</h1>

      <div className="flex gap-4 mb-6">
        <SearchInput
          placeholder="Search by Name..."
          value={searchExam}
          onChange={(e) => setSearchExam(e.target.value)}
        />
        <SearchInput
          placeholder="Search by Brand..."
          value={searchSubject}
          onChange={(e) => setSearchSubject(e.target.value)}
        />
        <SearchInput
          placeholder="Search by Name..."
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
      </div>

      <Table headers={productTableHeaders}>
        {filteredData.map((item, index) => (
          <TableRow
            key={index}
            data={item}
            index={index}
            statusColors={statusColors}
          />
        ))}
      </Table>

    </div>
  );
}

export default AllProduct