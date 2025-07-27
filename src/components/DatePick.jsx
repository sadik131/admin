import React from 'react';

const DatePicker = () => {
  return (
    <div className="w-full mb-4 px-4">
      <label className="block mb-2 text-base font-normal text-[#646464]">
        Date Of Birth *
      </label>
      <div className="relative">
        <input
          type="date"
          className="w-full px-4 py-1 text-[#646464] bg-[#f3f4f6] border border-transparent rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="dd/mm/yyyy"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {/* <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg> */}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
