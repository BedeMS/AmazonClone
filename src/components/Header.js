// 56:37

import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Top Half */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          {/* if we're using Image component from next.js, 
            we have to make sure we create a next config file and "whitelist" 
            the websites we're going to be pulling the images from. */}
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* search bar input*/}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor bg-yellow-400  hover:bg-yellow-500">
          <input
            className="p-2 h-fulll w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 white-space-nowrap">
          <div>
              <p>Hellow Bede</p>
              <p>Account & Lists</p>
          </div>
          <div>
              <p>Returns</p>
              <p>& Orders</p>
          </div>
          <div>
              <ShoppingCartIcon className="h-10"/>
              <p>Basket</p>

          </div>
        </div>
      </div>
      {/* Bottom Half */}
      <div></div>
    </header>
  );
}

export default Header;
