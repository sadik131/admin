import React, { useState } from 'react'
import { category, expiredData, expiredTh } from '../../option';
import SearchInput from '../../components/Form/SearchField';
import Table from '../../components/Table/TableHead';
import TableRow from '../../components/Table/TableBody';
import ClassSelect from '../../components/Form/SelectField';

function ExpiredProduct() {

    const [searchExam, setSearchExam] = useState('');
    const [searchSubject, setSearchSubject] = useState('');
    const [searchDate, setSearchDate] = useState('');


    const filteredData = expiredData.filter(item => {
        return (
            item.Product.toLowerCase().includes(searchExam.toLowerCase()) &&
            item.Product.toLowerCase().includes(searchSubject.toLowerCase()) &&
            item.Product.includes(searchDate)
        );
    });

    return (
        <div className={`max-w-5xl h-screen mx-auto p-6 shadow-md rounded-lg bg-white gap-5 font-roboto`}>
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Expired Products</h1>

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

            <Table headers={expiredTh}>
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

export default ExpiredProduct