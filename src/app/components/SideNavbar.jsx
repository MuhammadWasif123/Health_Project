"use client";
/** @format */
import React, { useState } from "react";
import {
  FaShoppingCart,
  FaUsers,
  FaCog,
  FaChevronRight,
  FaChevronLeft,
  FaUserCircle
} from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { IoCartOutline, IoSettingsOutline } from "react-icons/io5";
import { useWindowWidth } from "@react-hook/window-size";
import Link from "next/link";
import { IoTimeOutline  } from "react-icons/io5";

const Button = ({ onClick, children, className }) => (
  <button onClick={onClick} className={`p-2 ${className}`}>
    {children}
  </button>
);

const Nav = ({ isCollapsed, links, toggleSidebar, isMobile }) => (

  <nav className={`relative flex flex-col ${isCollapsed ? "w-16" : "w-64"} transition-all duration-300`}>
    {!isMobile && ( // Render the toggle button only if it's not a mobile device
      <div className="flex justify-end p-2">
        <Button onClick={toggleSidebar} className="rounded-full bg-gray-200 mr-2">
          {isCollapsed ? <FaChevronRight size={20} /> : <FaChevronLeft size={20} />}
        </Button>
      </div>
    )}
    {links.map((link, index) => (
      <Link
        key={index}
        href={link.href}
        className="flex items-center p-4 hover:bg-gray-200"
      >
        <link.icon className="mr-2" size={24} />
        {!isCollapsed && <span>{link.title}</span>}
      </Link>
    ))}
  </nav>
);
const SideNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className={`relative flex min-h-screen border-r ${isCollapsed ? "w-16" : "w-64"} transition-all duration-300`}>
      <div className="flex flex-col border-r px-3 pb-10 pt-6 bg-white">
        <Nav
          isCollapsed={mobileWidth ? true : isCollapsed}
          links={[
            {
              title: "Dashboard",
              href: "/dashboard",
              icon: LuLayoutGrid,
            },
            {
              title: "Doctor Appointment",
              href: "/dashboard/DoctorAppointment",
              icon: FiUsers,
            },
            {
              title: "Appointments",
              href: "/dashboard/appointments",
              icon: IoTimeOutline ,
            },
            {
              title: "Settings",
              href: "/dashboard/settings",
              icon: IoSettingsOutline,
            },
          ]}
          toggleSidebar={toggleSidebar}
          isMobile={mobileWidth} // Pass the isMobile prop
        />  
      </div>
    </div>
  );
};

export default SideNavbar;
