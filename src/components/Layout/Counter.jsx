import React, { useState } from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };

    return (
        <div className='flex w-fit items-center gap-3 bg-gray-100 rounded-lg p-1'>
            <FiMinusCircle 
                className={`text-lg cursor-pointer ${count === 0 ? 'text-gray-400' : 'text-red-500 hover:text-red-600'}`} 
                onClick={decrement}
            />
            <span className='min-w-[20px] text-center font-medium'>{count}</span>
            <FiPlusCircle 
                className='text-lg cursor-pointer text-green-500 hover:text-green-600' 
                onClick={increment}
            />
        </div>
    );
}

export default Counter;