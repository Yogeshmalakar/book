import React from 'react'
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

function FrontFooter() {
  return (
    <footer className="border border-t-8 border-teal-500">
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid w-full justify-between sm:flex md:grid-cols-1">
        <div className="mt-5">
          <Link href="/">
            <span className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Blog-App
              </span>
              
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <h5 className="text-lg font-semibold">About</h5>
            <ul>
              <li>
                <Link href="https://www.100jsprojects.com">
                  100 JS Projects
                </Link>
              </li>
              <li>
                <Link href="/about">
                  Blog-App
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold">Follow us</h5>
            <ul>
              <li>
                <Link href="https://github.com/SandeepRathod3">
                  Github
                </Link>
              </li>
              <li>
                <Link href="#">
                  Discord
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold">Legal</h5>
            <ul>
              <li>
                <Link href="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Sandeep Rathod
        </p>
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
          <Link href="#">
            <BsFacebook />
          </Link>
          <Link href="#">
            <BsInstagram />
          </Link>
          <Link href="#">
            <BsTwitter />
          </Link>
          <Link href="https://github.com/SandeepRathod3">
            <BsGithub />
          </Link>
          <Link href="#">
            <BsDribbble />
          </Link>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default FrontFooter