import React, { useState } from 'react';

const Dropdown = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className='flex justify-center mx-5 my-2 '>
            <div className="relative flex " onBlur={closeDropdown}>
                <button
                    className="bg-white hover:bg-gray-400 border-6  text-gray-800 py-1 px-6 rounded inline-flex items-center focus:outline-none"
                    onClick={toggleDropdown}
                    onBlur={() => setIsOpen(false)}
                >
                    {title}
                    <svg
                        className="w-2.5  h-2.5 ms-2.5 ml-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>
                <div
                    className={`absolute top-full right-0 mt-2 w-auto border bg-white rounded-md overflow-hidden shadow-xl z-10 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'
                        }`}
                >
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className={`${selectedOption === option
                                ? 'bg-gray-200'
                                : 'hover:bg-gray-100'
                                } block px-8 py-2 text-gray-800 border w-full text-left`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;

