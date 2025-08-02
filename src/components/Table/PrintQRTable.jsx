import React, { useState } from 'react'
import { PrintQrData, QRCodeTd } from '../../option'
import Table from './TableHead';
import CommonTableRow from './CommonTableRow';

function PrintQRTable() {


    const [searchExam, setSearchExam] = useState('');
    const [searchSubject, setSearchSubject] = useState('');
    const [searchDate, setSearchDate] = useState('');


    const filteredData = PrintQrData.filter(item => {
        return (
            item.ProductName.toLowerCase().includes(searchExam.toLowerCase()) &&
            item.ProductName.toLowerCase().includes(searchSubject.toLowerCase()) &&
            item.ProductName.includes(searchDate)
        );
    });

    return (
        <div className='bg-[#f9fafb] p-6'>
            <Table headers={QRCodeTd}>
                {filteredData.map((item, index) => (
                    <CommonTableRow
                        key={index}
                        index={index}
                        data={item}
                        view={false}
                        fields={["image", "sku", "code","refNumber","qty"]}
                        imageField="image"
                        nameField="ProductName"
                    />
                ))}
            </Table>
        </div>
    )
}

export default PrintQRTable