import React, { useState } from 'react'
import { categoryData, categoryTh, lowstockData, lowStockTh } from '../../option';
import SearchInput from '../../components/Form/SearchField';
import Table from '../../components/Table/TableHead';
import TableRow from '../../components/Table/TableBody';

function Category() {

    const [searchExam, setSearchExam] = useState('');
    const [searchSubject, setSearchSubject] = useState('');
    const [searchDate, setSearchDate] = useState('');


    const filteredData = categoryData.filter(item => {
        return (
            item.Category.toLowerCase().includes(searchExam.toLowerCase()) &&
            item.Category.toLowerCase().includes(searchSubject.toLowerCase()) &&
            item.Category.includes(searchDate)
        );
    });

    const statusColors = {
        "active": "bg-green-100 text-green-800",
        "inactive": "bg-red-100 text-red-800",
    };

    return (
        <div className={`max-w-5xl h-screen mx-auto p-6 shadow-md rounded-lg bg-white gap-5 font-roboto`}>
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Low Stocks</h1>

            <div className="flex justify-between gap-4 mb-6">
                <div className='w-1/4'>
                    <SearchInput
                        placeholder="Search"
                        value={searchExam}
                        onChange={(e) => setSearchExam(e.target.value)}
                    />
                </div>
                {/* <ClassSelect type={"Category Type  *"} placeholder="Please select Category" option={category} /> */}

            </div>

            <Table headers={categoryTh}>
                {filteredData.map((item, index) => (
                    <TableRow
                        view={false}
                        key={index}
                        data={item}
                        index={index}
                        statusColors={statusColors}
                    />
                ))}
            </Table>

        </div>
    )
}

export default Category