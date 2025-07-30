import React, { useState } from 'react';
import { examData } from '../../option';
import SearchInput from '../../components/Form/SearchField';
import Table from '../../components/Table/TableHead';
import TableRow from '../../components/Table/TableBody';

const ExamResults = () => {
  const [searchExam, setSearchExam] = useState('');
  const [searchSubject, setSearchSubject] = useState('');
  const [searchDate, setSearchDate] = useState('');


  const filteredData = examData.filter(item => {
    return (
      item.examName.toLowerCase().includes(searchExam.toLowerCase()) &&
      item.subject.toLowerCase().includes(searchSubject.toLowerCase()) &&
      item.date.includes(searchDate)
    );
  });

  const tableHeaders = ['ID', 'Exam Name', 'Subject', 'Grade', 'Percent','Date'];

  const gradeColors = {
    'A': 'bg-green-100 text-green-800',
    'B': 'bg-blue-100 text-blue-800',
    'C': 'bg-yellow-100 text-yellow-800',
    'D': 'bg-red-100 text-red-800'
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-lg bg-white gap-5">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">All Exam Results</h1>
      
      <div className="flex gap-4 mb-6">
        <SearchInput 
          placeholder="Search by Exam..."
          value={searchExam}
          onChange={(e) => setSearchExam(e.target.value)}
        />
        <SearchInput 
          placeholder="Search by Subject..."
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
            gradeColors={gradeColors}
          />
        ))}
      </Table>
      
    </div>
  );
};

export default ExamResults;