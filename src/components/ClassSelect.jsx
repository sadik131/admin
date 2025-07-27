import React, { useState, useRef, useEffect } from 'react';
import { FaCaretUp } from "react-icons/fa";



const ClassSelect = ({ type, placeholder, option }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(option);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownClick = () => {
    if (dropdownVisible) {
      setDropdownVisible(false);
      return;
    }
    setDropdownVisible(true);
    setSearchValue('');
    setFilteredOptions(gender);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    const filtered = option.filter((opt) =>
      opt.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setDropdownVisible(false);
  };

  return (
    <div className="relative w-full px-4 mb-6" ref={wrapperRef}>
      <label className="block mb-2 text-base font-normal text-[#646464]">{type}</label>

      <div
        className="w-full px-4 py-1 text-[#b4b4b4] flex justify-between items-center bg-[#f0f1f3] rounded-md shadow-sm cursor-pointer "
        onClick={handleDropdownClick}
      >
        {selectedValue || 'Please Select Class *'}
        <span className={`transition-transform duration-200 ${dropdownVisible ? 'rotate-180' : 'rotate-0'}`}>
          <FaCaretUp className='' /></span>
      </div>

      {dropdownVisible && (
        <div className="absolute z-20 p-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-64 overflow-auto">
          <input
            type="text"
            className="w-full p-1 border  border-gray-200 focus:outline-none"
            placeholder="Search class..."
            value={searchValue}
            onChange={handleSearchChange}
            autoFocus
          />
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(option)}
                className="p-1 cursor-pointer hover:bg-blue-100"
              >
                {option}
              </div>
            ))
          ) : (
            <div className="p-1 text-gray-500">No match found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ClassSelect;
