import React, { useState } from 'react'
import { examData, productData, productTableHeaders } from '../option';
import SearchInput from '../components/SearchInput';
import Table from '../components/TableData';
import TableRow from '../components/TableRow';

function AllProduct() {
  const [searchExam, setSearchExam] = useState('');
    const [searchSubject, setSearchSubject] = useState('');
    const [searchDate, setSearchDate] = useState('');
  
  
    const filteredData = productData.filter(item => {
      return (
        item.brand.toLowerCase().includes(searchExam.toLowerCase()) &&
        item.category.toLowerCase().includes(searchSubject.toLowerCase()) &&
        item.productCode.includes(searchDate)
      );
    });
  
    return (
      <div className="max-w-5xl mx-auto p-6 shadow-md rounded-lg bg-white gap-5">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">All Product</h1>
        
        <div className="flex gap-4 mb-6">
          <SearchInput 
            placeholder="Search by brand..."
            value={searchExam}
            onChange={(e) => setSearchExam(e.target.value)}
          />
          <SearchInput 
            placeholder="Search by id..."
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
            />
          ))}
        </Table>
        
      </div>
    );
}

export default AllProduct