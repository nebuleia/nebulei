import React, { useState } from 'react';
import { Transition } from "@headlessui/react";

import Logo from '../../icons/logo.svg'


function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href='/'>
                  <img
                    className="h-8 w-8 "
                    src={Logo}
                    alt="Nebulei Logo"
                  />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 space-x-4 flex items-center">
                  <div className='flex'>
                    <a
                      href="#"
                      className="text-black no-underline hover:underline px-3 py-2 rounded-md text-sm font-medium duration-100"
                    >
                      Login
                    </a>
                  </div>

                  <div className='flex'>
                    <a
                      href="#"
                      className="text-white bg-gradient-to-br from-purple-400 to-purple-700 px-3 py-2 rounded-md text-sm font-medium duration-100"
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-purple-700 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white duration-100"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-0 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-0 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                <a
                  href="#"
                  className="text-black no-underline hover:underline block px-3 py-2 rounded-md text-base font-medium duration-100"
                >
                  Login
                </a>

                <a
                  href="#"
                  className="text-white bg-gradient-to-br from-purple-400 to-purple-700 block px-3 py-2 rounded-md text-base font-medium duration-100"
                >
                  Register
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
}

export default Nav;
