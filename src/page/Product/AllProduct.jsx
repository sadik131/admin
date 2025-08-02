import React, { useState } from 'react'
import { productData, productTableHeaders } from '../../option';
import SearchInput from '../../components/Form/SearchField';
import Table from '../../components/table/TableHead';
import TableRow from '../../components/Table/TableBody';

function AllProduct({ title = "All Product" }) {
  const [searchExam, setSearchExam] = useState('');
  const [searchSubject, setSearchSubject] = useState('');
  const [searchDate, setSearchDate] = useState('');

  const filteredData = productData.filter(item => {
    return (
      item.name.toLowerCase().includes(searchExam.toLowerCase()) &&
      item.brand.toLowerCase().includes(searchSubject.toLowerCase()) &&
      item.brand.includes(searchDate)
    );
  });

  const statusColors = {
    "active": "bg-green-100 text-green-800",
    "inactive": "bg-red-100 text-red-800",
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-6 shadow-md rounded-lg bg-white font-roboto">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">{title}</h1>

      <div className="flex flex-col lg:flex-row gap-4 mb-6">
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

      <div className="overflow-x-hidden">
        <Table headers={productTableHeaders}>
          {filteredData.map((item, index) => (
            <TableRow
              key={index}
              data={item}
              view={true}
              index={index}
              statusColors={statusColors}
            />
          ))}
        </Table>
      </div>
    </div>
  );
}

export default AllProduct;
