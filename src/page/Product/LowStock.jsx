import React, { useState } from 'react'
import { lowstockData, lowStockTh } from '../../option';
import SearchInput from '../../components/Form/SearchField';
import Table from '../../components/Table/TableHead';
import ClassSelect from '../../components/Form/SelectField';
import CommonTableRow from '../../components/table/CommonTableRow';

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
        <>
            <div className="px-6 pt-6 font-roboto bg-bgColor">
                <h1 className="text-xl font-semibold mb-4">Low Stocks</h1>
                <div className={`mx-auto p-6 shadow-md rounded-lg bg-white gap-5 font-roboto`}>
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Low Stocks</h1>

                    <div className="flex justify-between gap-4 mb-6">
                        <div className='w-1/4'>
                            <SearchInput
                                placeholder="Search"
                                value={searchExam}
                                onChange={(e) => setSearchExam(e.target.value)}
                            />
                        </div>
                        <div className='flex'>
                            <ClassSelect placeholder="Warehouse" option={[...new Set(lowstockData.map(data => data.Warehouse))]} />
                            <ClassSelect placeholder="Store" option={[...new Set(lowstockData.map(data => data.Store))]} />
                            <ClassSelect placeholder="Category" option={[...new Set(lowstockData.map(data => data.Category))]} />
                        </div>

                    </div>

                    <Table headers={lowStockTh}>
                        {filteredData.map((item, index) => (
                            <CommonTableRow
                                key={index}
                                index={index}
                                data={item}
                                view={false}
                                fields={["Warehouse", "Store", "image", "Category", "SkU", "Qty", "qtyAlert"]}
                                imageField="image"
                                nameField="ProductName"
                            />
                        ))}
                    </Table>

                </div>
            </div>
        </>
    )
}

export default LowStock