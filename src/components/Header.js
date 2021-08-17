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
        <div>
          <input type="text" />
          <SearchIcon />
        </div>
      </div>
      {/* Bottom Half */}
      <div></div>
    </header>
  );
}

export default Header;
