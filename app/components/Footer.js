import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

const Footer = () => {
	return (
		<footer>
			<div className="w-full h-full px-4 py-8 lg:py-10 lg:px-20 bg-[#fff]">
				<div className="flex flex-col lg:flex-nowrap lg:flex-row gap-y-5 gap-x-8 lg:gap-y-0  lg:gap-x-3 lg:justify-between py-3">
					<div className="w-[50%] self-center lg:w-1/4">
						<a href="/" className="w-[15%]">
							<Image src={logo} />
						</a>
					</div>
					<div className="flex flex-col gap-3 lg:gap-5 ">
						<div>
							<p className="text-md font-semibold">Resources</p>
						</div>
						<div className="flex flex-col gap-3 text-sm font-light">
							<Link className="hover:text-primaryYellow" href="/">
								Web3 Articles
							</Link>

							<Link
								className="hover:text-primaryYellow"
								href="/information"
							>
								Industry News
							</Link>

							<Link className="hover:text-primaryYellow" href="/shop">
								Tools
							</Link>

							<Link
								className="hover:text-primaryYellow"
								href="/terms-of-service"
							>
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

							<Link className="hover:text-primaryYellow" href="/shop">
								Community
							</Link>
							<Link className="hover:text-primaryYellow" href="/shop">
								Blogs
							</Link>
							<Link className="hover:text-primaryYellow" href="/shop">
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

							<Link className="hover:text-primaryYellow" href="/course">
								Terms of Use
							</Link>

							<Link className="hover:text-primaryYellow" href="/shop">
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

							<Link
								className="hover:text-primaryYellow"
								href="/information"
							>
								info@studyweb3.com
							</Link>

							<Link className="hover:text-primaryYellow" href="/">
								54 Jones Close Lekki,Lagos
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:pt-2 text-sm lg:text-base text-center">
				<div className="border-[0.3px] w-full lg:mt-10 border-[#d9d9d971]"></div>
				<p className="py-3 lg:py-5 font-light">
					2024 StudyWeb3. All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
