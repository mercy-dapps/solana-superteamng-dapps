import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="w-full h-full px-4 py-8 lg:py-10 lg:px-20 bg-[#fff]">
        <div className="flex flex-col lg:flex-row py-3 gap-16">
          <div className="w-[50%] self-center lg:w-1/4">
            <a href="/" className="w-[15%]">
              <Image src={logo} />
            </a>
          </div>
          <div className="flex flex-wrap gap-4 justify-between flex-1">
            <div className="flex flex-col gap-3 lg:gap-5 ">
              <div>
                <p className="text-md font-semibold">Resources</p>
              </div>
              <div className="flex flex-col gap-3 text-sm font-light">
                <Link className="hover:text-primaryYellow" href="/">
                  Web3 Articles
                </Link>

                <Link className="hover:text-primaryYellow" href="/">
                  Industry News
                </Link>

                <Link className="hover:text-primaryYellow" href="/">
                  Tools
                </Link>

                <Link className="hover:text-primaryYellow" href="/">
                  Events
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:gap-5">
              <div>
                <p className="text-md font-semibold">Quick Links</p>
              </div>
              <div className="flex flex-col gap-3 text-sm font-light">
                <Link
                  className="hover:text-primaryYellow cursor-pointer"
                  href="/"
                >
                  About Us
                </Link>

                <Link className="hover:text-primaryYellow" href="/course">
                  Courses
                </Link>

                <Link className="hover:text-primaryYellow" href="/">
                  Community
                </Link>
                <Link className="hover:text-primaryYellow" href="/">
                  Blogs
                </Link>
                <Link className="hover:text-primaryYellow" href="/">
                  FAQs
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:gap-5">
              <div>
                <p className="text-md font-semibold">Legal</p>
              </div>
              <div className="flex flex-col gap-3 text-sm font-light">
                <Link
                  className="hover:text-primaryYellow cursor-pointer"
                  href="/"
                >
                  Privacy Policy
                </Link>

                <Link className="hover:text-primaryYellow" href="/">
                  Terms of Use
                </Link>

                <Link className="hover:text-primaryYellow" href="/">
                  Disclaimer
                </Link>
              </div>
            </div>
            <div className="flex flex-col  gap-3 lg:gap-5">
              <div>
                <p className="text-md font-semibold">Contact</p>
              </div>
              <div className="flex flex-col gap-3 text-sm font-light">
                <Link className="hover:text-primaryYellow" href="/">
                  +23487690345678
                </Link>

                <Link className="hover:text-primaryYellow" href="/">
                  info@studyweb3.com
                </Link>

                <Link className="hover:text-primaryYellow" href="/">
                  54 Jones Close Lekki,Lagos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pt-2 text-sm lg:text-base text-center">
        <div className="border-[0.3px] w-full lg:mt-10 border-[#d9d9d971]"></div>
        <p className="py-3 lg:py-5 font-light">
          {new Date().getFullYear()} StudyWeb3. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
