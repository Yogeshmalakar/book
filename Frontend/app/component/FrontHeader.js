'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';
import { IoMdMenu, } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import backphoto from "../component/image/backgroung.webp"
export default function FrontHeader() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="shadow sticky z-50 top-0">
        <nav className="bg-gray border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className="flex self-center font-semibold text-sm dard:text:white">
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg'>Blog-App</span>
            </Link>
            <form>
              <input
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch} 
                className='border-4 border-purple-500 rounded-lg hidden lg:inline'
              />
              <button className=' w-12 h-10 lg:hidden ' color='gray' pill>
                <AiOutlineSearch />
              </button>
             
            </form>
            <div className="hidden md:flex items-center lg:order-2">
            <button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
        >
          {/* {theme === 'light' ? <FaSun /> : <FaMoon />} */}
          <FaMoon/>
        </button>
              <Link href="/auth/login" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                Log in
              </Link>
              {/* <Link href="#" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                Get started
              </Link> */}
            </div>

            {/* Toggle menu for small screens */}
            {toggle ? (
              <ImCross onClick={() => setToggle(!toggle)} className="text-black text-xl md:hidden block" />
            ) : (
              <IoMdMenu onClick={() => setToggle(!toggle)} className="text-black text-3xl md:hidden block" />
            )}

            <ul
              className={`md:hidden duration-700 font-bold cursor-pointer ml-1 rounded-md bg-black text-white fixed top-16 w-[600px] h-screen text-start ${toggle ? 'left-0' : 'left-[-200%]'
                }`}
            >
              <li>
                <Link href="/" className="block py-5 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-5 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="block py-5 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contect" className="block py-5 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                  Contect
                </Link>
              </li>
              <li>
                <div className="flex items-center lg:order-2 mt-2 p-4">
                  <Link href="auth/login" className="text-gray-300 hover:text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                    Log in
                  </Link>
                  {/* <Link href="#" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                    Get started
                  </Link> */}
                </div>
              </li>
            </ul>

            {/* Main navbar for big screen */}
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col  mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link href="/" className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <div className=' w-full h-screen absolute z-0'>
        <Image src={backphoto}/>
      </div> */}
    </>
  );
}