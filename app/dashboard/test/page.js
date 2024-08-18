"use client"; // 添加這行以將此組件標記為客戶端組件

import React, { useState } from 'react';

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white text-black pt-32">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-lg">網站標題</h1>
        <div className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none">
            菜單
          </button>
          <div
            className={`absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
              dropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <ul>
              <li className="hover:bg-gray-600">
                <a href="#section1" className="block px-4 py-2">部分 1</a>
              </li>
              <li className="hover:bg-gray-600">
                <a href="#section2" className="block px-4 py-2">部分 2</a>
              </li>
              <li className="hover:bg-gray-600">
                <a href="#section3" className="block px-4 py-2">部分 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
