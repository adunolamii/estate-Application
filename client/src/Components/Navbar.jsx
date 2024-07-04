import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-green-600 p-4">
      <div className=" container mx-auto flex justify-between items-center">
        <div className="text-white text-xl"> Estate</div>
        <div className="hidden md:flex">
          <ul className="tablet:block flex space-x-4">
                        <li><Link to="/" >Homee</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/features">Features</Link></li>              
                        <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className=" tablet:hidden w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 mt-2">
            <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="/features" className="text-gray-300 hover:text-white">Features</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
    </div>
  )
}



export default Navbar