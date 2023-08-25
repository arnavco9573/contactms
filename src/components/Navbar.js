import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };
  
    return (
      <div className="max-w-full">
        <nav className="bg-gradient-to-r from-gray-700 to-gray-950 text-white flex justify-between mx-auto p-2 md:p-4">
          <a className="pt-2 md:pt-5 pl-2 md:pl-5 text-xl md:text-2xl" href="/">
            WireFrame
          </a>
          <div className="flex md:hidden">
            <button
              id="mobile-menu-button"
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <ul className={`hidden md:flex px-2 md:px-12 py-2 md:py-4 space-x-4 md:space-x-8 justify-end items-center ${mobileMenuOpen ? 'hidden' : 'block'}`}>
            <li className="py-2 hover:text-cyan-400 transition-all duration-500 group relative cursor-pointer">
              <Link className="" to="/">Contact</Link>
              <div className="absolute bottom-0 w-full h-1 bg-cyan-400 hidden group-hover:block transition-all duration-500"></div>
            </li>
            
            <li className="py-2 hover:text-cyan-400 transition-all duration-500 group relative cursor-pointer">
              <Link className="" to="/maps">Maps</Link>
              <div className="absolute bottom-0 w-full h-1 bg-cyan-400 hidden group-hover:block transition-all duration-500"></div>
            </li>
            <li className="py-2 hover:text-cyan-400 transition-all duration-500 group relative cursor-pointer">
              <Link className="" to="/charts">Charts</Link>
              <div className="absolute bottom-0 w-full h-1 bg-cyan-400 hidden group-hover:block transition-all duration-500"></div>
            </li>
            
          </ul>
        </nav>
        <div
          id="mobile-menu"
          className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <ul className="bg-gradient-to-r from-gray-700 to-gray-950 text-white py-2 space-y-2 px-4">
            <li className="hover:text-cyan-400 transition-all duration-500 cursor-pointer">
              <Link className="" to="/">Contact</Link>
            </li>
            <li className="py-2 hover:text-cyan-400 transition-all duration-500 group relative cursor-pointer">
              <Link className="" to="/maps">Maps</Link>
              <div className="absolute bottom-0 w-full h-1 bg-cyan-400 hidden group-hover:block transition-all duration-500"></div>
            </li>
            <li className="py-2 hover:text-cyan-400 transition-all duration-500 group relative cursor-pointer">
              <Link className="" to="/charts">Charts</Link>
              <div className="absolute bottom-0 w-full h-1 bg-cyan-400 hidden group-hover:block transition-all duration-500"></div>
            </li>
            
            
          </ul>
        </div>
      </div>
  )
}

export default Navbar
