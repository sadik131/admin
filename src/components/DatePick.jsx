import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const DatePicke = ({ lable, value }) => {

    // Convert JS Date string to YYYY-MM-DD

  const formatDateForInput = (dateStr) => {
    const date = new Date(dateStr);
    if (isNaN(date)) return ''; 
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2); 
    const day = (`0${date.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
  };

  const formattedValue = formatDateForInput(value);


  return (
    <div className="w-full mb-4 px-4">
      <label className="block mb-2 text-base font-normal text-[#646464]">
        {lable}
      </label>
      <div className="relative">
        <input
          value={formattedValue}
          type="date"
          className="w-full cursor-pointer px-4 py-3 text-[#646464] bg-[#f3f4f6] custom-date-input border border-transparent rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="dd/mm/yyyy"
        />
        <div

          className="pointer-events-none cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3">
          <FaCalendarAlt className='h-4 w-4 cursor-pointer text-[#111]' />
        </div>
      </div>
    </div>
  );
};

export default DatePicke;
