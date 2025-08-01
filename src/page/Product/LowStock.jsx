import React, { useState } from 'react'
import { lowstockData, lowStockTh } from '../../option';
import SearchInput from '../../components/Form/SearchField';
import Table from '../../components/Table/TableHead';
import TableRow from '../../components/Table/TableBody';
import ClassSelect from '../../components/Form/SelectField';

function LowStock() {

    const [searchExam, setSearchExam] = useState('');
    const [searchSubject, setSearchSubject] = useState('');
    const [searchDate, setSearchDate] = useState('');


    const filteredData = lowstockData.filter(item => {
        return (
            item.ProductName.toLowerCase().includes(searchExam.toLowerCase()) &&
            item.ProductName.toLowerCase().includes(searchSubject.toLowerCase()) &&
            item.ProductName.includes(searchDate)
        );
    });

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

            <Table headers={lowStockTh}>
                {filteredData.map((item, index) => (
                    <TableRow
                        view={false}
                        key={index}
                        data={item}
                        index={index}
                    />
                ))}
            </Table>

        </div>
    )
}

export default LowStock