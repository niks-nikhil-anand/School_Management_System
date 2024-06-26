"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { IoIosNotifications } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { IoSettings } from 'react-icons/io5';

const NavbarAdmin = ({ toggleSidebar }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.nav
      className="bg-gray-800 dark:bg-gray-900 text-white p-4 flex justify-between items-center shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-xl font-bold">Admin Panel</div>
      <div className="text-xl font-bold">Next Schooling</div>
      <button onClick={toggleSidebar} className="md:hidden block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="hidden md:flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className="p-2"
        >
          {isDarkMode ? <MdLightMode  /> : <MdDarkMode />}
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2">
          <IoIosNotifications />
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2">
          <IoSettings />
        </motion.button>
        <div className="relative group">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2"
          >
            <CgProfile />
          </motion.button>
          <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border rounded shadow-lg z-20">
            <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              Profile
            </a>
            <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              Settings
            </a>
            <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              Logout
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavbarAdmin;
