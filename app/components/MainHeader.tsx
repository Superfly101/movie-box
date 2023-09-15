"use client";

import Image from "next/image";
import logo from "/public/logo.svg";
import searchIcon from "../icons/search.png";
import Link from "next/link";
import { useState } from "react";

const MainHeader = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <header className="z-10 w-full sticky top-0 py-2 px-4 md:px-12 lg:px-16">
      <nav className="py-1 flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Image src={logo} alt="Movie box logo" />
          <p className="font-bold text-white">MovieBox</p>
        </div>
        <div className="hidden w-5/12 relative md:block">
          <input
            type="text"
            className="w-full text-sm bg-transparent border-2 py-1 px-2 border-[#D1D5DB] rounded-md outline-none placeholder:text-white"
            placeholder="What do you want to watch?"
          />
          <Image
            src={searchIcon}
            alt="search icon"
            className="absolute top-2 right-2"
          />
        </div>
        <div className="flex items-center gap-8">
          <Link href="" className="hidden text-white font-bold md:block">
            Sign in
          </Link>
          <div
            className="flex flex-col gap-1.5 justify-center items-center bg-rose w-10 h-10 p-2 rounded-full cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            <div className="w-5 h-0.5 bg-white rounded-lg"></div>
            <div className="w-5 h-0.5 bg-white rounded-lg"></div>
          </div>
        </div>
      </nav>
      <nav
        className={`px-2 flex flex-col gap-2 backdrop-blur-sm bg-white/30 overflow-hidden duration-300 ${
          isActive ? "h-[90px]" : "h-0"
        }`}
      >
        <Link href="" className="text-white font-bold mt-2">
          Sign in
        </Link>
        <hr />
        <div className="relative">
          <input
            type="text"
            className="w-full text-sm bg-transparent border-2 py-1 px-2 border-[#D1D5DB] rounded-md outline-none placeholder:text-white"
            placeholder="What do you want to watch?"
          />
          <Image
            src={searchIcon}
            alt="search icon"
            className="absolute top-2 right-2"
          />
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
