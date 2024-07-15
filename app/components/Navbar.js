"use client";
import { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.png";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="p-3 lg:px-16 sticky z-30 top-0 flex justify-between items-center shadow bg-white">
      <a href="/" className="md:w-[15%] w-[40%]">
        <Image src={logo} />
      </a>
      <ul className="md:flex flex-row gap-8 hidden">
        <li>
          <a
            href="/"
            className={
              pathname === "/" ? "text-[#3443cd] font-medium" : "text-black"
            }
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/course"
            className={
              pathname === "/course"
                ? "text-[#3443cd] font-medium"
                : "text-black"
            }
          >
            Courses
          </a>
        </li>
        <li>
          <a href="/">Community</a>
        </li>
        <li>
          <a href="/">Resources</a>
        </li>
      </ul>
      <WalletMultiButton className="!bg-purple-600 hover:bg-black transition-all duration-200 rounded-lg" />
    </nav>
  );
};

export default Navbar;
