import {
  cartIcon,
  downArrow,
  favicon,
  logo,
  logoMobile,
  profileIcon,
  serachIcon,
} from "@/assets/icon";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full items-center  md:min-h-36 border-b-2">
      <div className="flex justify-between w-full py-6 px-4">
        <span className="hidden md:inline-block">{logo}</span>
        <span className="md:hidden">{logoMobile}</span>
        <p className="font-extrabold text-lg md:text-2xl">LOGO</p>
        <div className="flex items-center gap-6 cursor-pointer">
          {serachIcon}
          {favicon}
          {cartIcon}
          <span className="hidden md:inline-block">{profileIcon}</span>
          <p className="hidden md:flex justify-start items-center gap-2">
            {" "}
            <span>Eng</span>
            {downArrow}
          </p>
        </div>
      </div>
      <nav className="md:flex w-full hidden ">
        <ul className="mx-auto flex pt-2 justify-center items-center gap-16 font-bold uppercase">
          <li>
            <Link href={"#"}>SHOP</Link>
          </li>
          <li>
            <Link href={"#"}>SKILLS</Link>
          </li>
          <li>
            <Link href={"#"}>STORIES</Link>
          </li>
          <li>
            <Link href={"#"}>ABOUT</Link>
          </li>
          <li>
            <Link href={"#"}>CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
