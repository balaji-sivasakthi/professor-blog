"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#333] text-white">
      <div
        onClick={toggleMenu}
        className="flex justify-between items-center [&_div]:p-3 hover:bg-black"
      >
        <div>Menu</div>
        <ul className="hidden sm:flex lg:flex p-3 [&_li]:p-3">
          <li className={`${pathName === "/" && "sm:bg-[#990026]"}`}>
            <Link href={"/"} title="Home">
              Home
            </Link>
          </li>
          <li className={`${pathName === "/about" && "bg-[#990026]"}`}>
            <Link href={"/about"} title="About">
              About
            </Link>
          </li>
          <li className={`${pathName === "/contact" && "bg-[#990026]"}`}>
            <Link href={"/contact"} title="Contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="sm:hidden bg-black">
          <GiHamburgerMenu
            className="cursor-pointer"
            size={32}
            onClick={toggleMenu}
          />
        </div>
      </div>
      <ul
        className={`sm:hidden [&_li]:p-3 [&_li:hover]:bg-[#990026] [&_li]:border-b-[.5px] [&_li]:border-solid [&_li]:border-gray cursor-pointer bg-[#333] ${
          showMenu ? "block" : "hidden"
        }`}
      >
        <li className={`${pathName === "/" && "bg-[#990026]"}`}>
          <Link href={"/"} title="Home">
            Home
          </Link>
        </li>
        <li className={`${pathName === "/about" && "bg-[#990026]"}`}>
          <Link href={"/about"} title="About">
            About
          </Link>
        </li>
        <li className={`${pathName === "/contact" && "bg-[#990026]"}`}>
          <Link href={"/contact"} title="Contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
