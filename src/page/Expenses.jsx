import React, { useState } from 'react';
import SearchInput from '../components/SearchInput';
import TableRow from '../components/TableRow';
import Divider from '../components/Divider';
import { examData, expenseData } from '../option';
import Table from '../components/TableData';

const Expenses = () => {
  const [searchExam, setSearchExam] = useState('');
  const [searchSubject, setSearchSubject] = useState('');
  const [searchDate, setSearchDate] = useState('');


  const filteredData = expenseData.filter(item => {
    return (
      item.id.toLowerCase().includes(searchExam.toLowerCase()) &&
      item.email.toLowerCase().includes(searchSubject.toLowerCase()) &&
      item.date.includes(searchDate)
    );
  });

  const tableHeaders = ['ID', 'Expense', 'Amount', 'Status', 'E-Mail', 'Date'];

 const statusColors = {
    'Paid': 'bg-green-100 text-green-800',
    'Due': 'bg-red-100 text-red-800',
    'Pending': 'bg-yellow-100 text-yellow-800'
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-lg bg-white gap-5">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">All Expenses</h1>
      
      <div className="flex gap-4 mb-6">
        <SearchInput 
          placeholder="Search by id..."
          value={searchExam}
          onChange={(e) => setSearchExam(e.target.value)}
        />
        <SearchInput 
          placeholder="Search by email"
          value={searchSubject}
          onChange={(e) => setSearchSubject(e.target.value)}
        />
        <SearchInput 
          placeholder="dd/mm/yyyy"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
      </div>

      <Table headers={tableHeaders}>
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
};

export default Expenses;