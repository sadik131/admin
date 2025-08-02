import React, { useState } from 'react';
import ToggleButton from './Toggle';

const QRCodeGenerator = () => {
    const [paperSize, setPaperSize] = useState('');
    const [referenceNumber, setReferenceNumber] = useState('');

    const handleGenerateQR = () => {
        // QR code generation logic would go here
        alert(`Generating QR code for Reference: ${referenceNumber} on ${paperSize} paper`);
    };

    const handleReset = () => {
        setPaperSize('');
        setReferenceNumber('');
    };

    const handlePrint = () => {
        // Print logic would go here
        alert('Printing QR code...');
    };

    return (
        <>
            <div className="mx-auto py-6 bg-white border-b border-[#919eab4d]">
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="mb-4 w-1/2">
                        <label className="block mb-2 text-base font-normal text-secondary">
                            Paper Size *
                        </label>
                        <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={paperSize}
                            onChange={(e) => setPaperSize(e.target.value)}
                            required
                        >
                            <option value="">Select</option>
                            <option value="A4">A4</option>
                            <option value="Letter">Letter</option>
                            <option value="A5">A5</option>
                            <option value="A6">A6</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-base font-normal text-secondary">
                            Reference Number
                        </label>
                        <ToggleButton />
                    </div>
                </div>
            </div>

            <div className="flex justify-end flex-col lg:flex-row gap-5 mt-6 ">
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={handleGenerateQR}
                >
                    Generate QR Code
                </button>
                <button
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    onClick={handleReset}
                >
                    Reset
                </button>
                <button
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    onClick={handlePrint}
                >
                    Print QRcode
                </button>
            </div>
        </>
    );
};

export default QRCodeGenerator;