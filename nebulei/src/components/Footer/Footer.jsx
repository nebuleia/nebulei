import React from 'react';

import Logo from '../../icons/logo.svg'

const Footer = () => {
  return (
    <>
        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" class="flex items-center mb-4 sm:mb-0">
                    <img src={Logo} className="mr-3 h-8" alt="Nebulei Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NEBULEI.</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 "></a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6"></a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 "></a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline"></a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022 <a href="/" className="hover:underline"> Nebulei™</a>. All Rights Reserved.
            </span>
        </footer>
    </>
  );
};

export default Footer;