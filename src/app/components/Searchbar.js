"use client";
import React, { useState } from "react";

const Searchbar = ({
  heading,
  searchingFor,
  location,
  showSecDropdown,
  placeholder,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecDropdownOpen, setSecDdOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setSecDdOpen(false);
  };
  const toggleDropDown = () => {
    setSecDdOpen(!isSecDropdownOpen);
    setIsOpen(false);
  };

  return (
    <>
      <div className=" text-center px-24  ">
        <h2 className=" text-red-600 font-bold text-4xl mt-6">{heading}</h2>
      </div>
      <div className="flex mb-8 flex-wrap justify-center">
        <div className="flex ">
          <div id="dropdown" className=" ">
            <div className="">
              <button
                onClick={toggleMenu}
                className="px-4 py-2 justify-between text-red-600 flex items-center border-y border-x rounded relative focus:outline-none"
              >
                City
                <svg
                  className="w-2.5 h-2.5 ms-2.5 ml-2"
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
            </div>
            {isOpen && (
              <div className="absolute mt-1 w-full md:w-48 bg-white rounded-md shadow-lg z-10">
                {options.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div>
            {showSecDropdown && (
              <div className="w-full">
                <div className="">
                  <button
                    onClick={toggleDropDown}
                    className="px-6 py-2 justify-between text-red-600  flex items-center border-y border-x rounded relative focus:outline-none"
                  >
                    Searching For ?
                    <svg
                      className="w-2.5 h-2.5 ms-2.5 ml-2"
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
                </div>
                {isSecDropdownOpen && (
                  <div className="absolute mt-1 w-full md:w-48 bg-white rounded-md shadow-lg z-10">
                    {searchingFor.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="relative w-full md:w-auto flex">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full md:w-96 text-sm text-gray-900 bg-gray-50 border-r-0 rounded-none border border-gray-300 focus:ring-red-500 focus:border-blue-500 dark:text-white dark:focus:border-red-500 outline-none"
              placeholder={placeholder}
              required
            />
            <button
              type="submit"
              className="flex top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-red-700 rounded-e-lg border border-red-700"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="ml-2">Search</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
