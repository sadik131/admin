import React, { useState } from 'react'
import { expiredData, expiredTh, sortOption } from '../../option';
import SearchInput from '../../components/Form/SearchField';
import Table from '../../components/Table/TableHead';
import ClassSelect from '../../components/Form/SelectField';
import CommonTableRow from '../../components/Table/CommonTableRow';

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
        <>
            <div className="px-6 pt-6 font-roboto bg-bgColor">
                <h1 className="text-xl font-semibold mb-4">Expired Products</h1>
                <div className={`h-full mx-auto p-6 shadow-md rounded-lg bg-white gap-5 font-roboto`}>
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Expired Products</h1>

                    <div className="flex justify-between gap-4 mb-6">
                        <div className='w-1/4'>
                            <SearchInput
                                placeholder="Search"
                                value={searchExam}
                                onChange={(e) => setSearchExam(e.target.value)}
                            />
                        </div>
                        <div className='flex w-1/2 justify-end'>
                            <ClassSelect placeholder="Product" padding="px-4 py-2" option={expiredData.map(data => data.Product)} />
                            <ClassSelect placeholder="Sort by date" padding="px-4 py-2" option={sortOption} />
                        </div>

                    </div>

                    <Table headers={expiredTh}>
                        {filteredData.map((item, index) => (
                            <CommonTableRow
                                key={index}
                                index={index}
                                data={item}
                                view={false}
                                fields={["SQU", "image", "ManufacturerDate", "ExpiryDate"]}
                                imageField="image"
                                nameField="Product"
                            />
                        ))}
                    </Table>

                </div>
            </div>
        </>
    )
}

export default ExpiredProduct