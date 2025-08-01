import React, { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      onClick={toggle}
      className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none  ${
        isOn ? 'bg-blue-600' : 'bg-[#b9b9c3]'
      }`}
    >
      <span
        className={`inline-block w-4 h-4 transform transition-transform rounded-full bg-white shadow-md ${
          isOn ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
};

export default ToggleButton;