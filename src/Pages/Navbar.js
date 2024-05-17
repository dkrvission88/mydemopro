import React from "react";
import { FaFilter, FaLocationCrosshairs } from "react-icons/fa6";
// import React from 'react-icons';
// import logo from '../assets/image2.jpg'

// import userLogin from './src/assets/yellow.png';
// import address from 'assets/img/address.png';
// import myLocation from 'assets/img/my_location_regular_icon.png';

const Navbar = () => {
  return (
    <nav className="bg-white text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Element 1: Logo */}
        <a className="flex items-center" href="/">
          <img
            src="assets/nav1.jpg"
            alt="Game Hunt"
            title="Game Hunt"
            className="h-10"
          />
        </a>
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>

        {/* Element 2: Search Bar with Icons */}

        <div>
          <button
            id="actionsDropdownButton"
            data-dropdown-toggle="actionsDropdown"
            className="w-full md:w-auto flex items-center justify-center py-1 rounded-[8px] px-3 text-sm font-medium text-black  bg-white  border border-slate-300"
            type="button"
          >
            <div className="flex justify-between">
              <span className="text-black text-[14px] w-[300px] ">
                Current Location..
              </span>
              <span className="text-black mr-1 mt-[2px]">
                <FaLocationCrosshairs />
              </span>
            </div>
          </button>
        </div>

        {/* Element 3: Span Text Elements */}
        <div className="hidden md:flex space-x-4">
          <span className="cursor-pointer text-black">Gamehunt Academy</span>
        </div>

        {/* Element 4: Dropdown */}
        <div className="relative hidden md:block">
          <button className="flex items-center text-black px-4 py-2 rounded">
            Partner
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg hidden group-hover:block">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Option 1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Option 2
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Option 3
            </a>
          </div>
        </div>

        {/* Element 5: Button */}
        <button className="bg-red-600 hover:bg-blue-500 text-white px-4 py-2 rounded-[200px]">
          Login /Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
