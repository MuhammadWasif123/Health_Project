// components/NavBar.js
'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { navList } from './data';
import { useAuth } from "../../utils/context";

const NavBar = () => {
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const { isRegistered, isUserName, logout,isFullyRegistered } = useAuth();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const mobilehandleClick = () => {
    setMobileDropdown(!mobileDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className={`lg:hidden bg-red-700 h-auto`}>
        <div className="flex items-center justify-between p-4">
          <div className="bg-white p-2 rounded">
            <Link href="/" onClick={() => setMobileDropdown(false)}>
              <Image src="/healthLogo.png" alt="logo" width={110} height={110} />
            </Link>
          </div>
          <div className="text-white text-[24px]" onClick={mobilehandleClick}>
            {mobileDropdown ? <IoClose className="text-[30px]" /> : <FaBars />}
          </div>
        </div>
        {mobileDropdown && (
          <ul className="flex flex-col gap-3 p-3 bg-red-700">
            {navList.map((li, index) => (
              <li className="text-[14px] py-2 border-b border-gray-300" key={index}>
                <Link className="text-white hover:text-gray-300" href={li.url} onClick={() => setMobileDropdown(false)}>
                  <h3 className="font-bold">{li.link}</h3>
                  <p>{li.secondLine}</p>
                </Link>
              </li>
            ))}
            {isFullyRegistered && (
              <li className="text-[14px] py-2 border-b border-gray-300" onClick={logout}>
                <span className="text-white hover:text-gray-300 cursor-pointer">Logout</span>
              </li>
            )}
          </ul>
        )}
      </nav>

      {/* Laptop Screen */}
      <nav className="hidden lg:flex h-[70px] bg-red-700 items-center justify-between px-2">
        <div className="bg-white p-2 rounded">
          <Link href="/">
            <Image src="/healthLogo.png" alt="logo" width={110} height={110} />
          </Link>
        </div>
        <ul className="flex gap-4 items-center">
          {navList.map((li, index) => (
            <li className="text-[12px]" key={index}>
              <Link className="text-white hover:text-gray-300" href={li.url}>
                <h3 className="font-bold">{li.link}</h3>
                <p>{li.secondLine}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative text-white text-[12px] font-bold" ref={dropdownRef}>
          {isFullyRegistered ? (
            <div className="flex items-center">
              <Link href="/dashboard">
                <span className="cursor-pointer">{isUserName}</span>
              </Link>
              <button onClick={logout} className="ml-4 text-white hover:text-gray-300">
                Logout
              </button>
            </div>
          ) : (
            <div onClick={toggleDropdown} className="cursor-pointer flex items-center text-[12px]">
              Signup | Login
              <IoMdArrowDropdown className="ml-1" />
            </div>
          )}
          {dropdownVisible && !isRegistered && (
            <div className="absolute z-10 right-0 mt-2 text-red-700 w-48 bg-white shadow-lg rounded-md text-red-00">
              <Link href="/doctor/login">
                <div className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownVisible(false)}>
                  Doctor Login
                </div>
              </Link>
              <Link href="/patient/login">
                <div className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownVisible(false)}>
                  Patient Login
                </div>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
