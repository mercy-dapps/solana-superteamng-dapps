"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.png";

const Navbar = () => {
const pathname = usePathname();

	return (
		<nav className="p-3 lg:px-16 sticky top-0 flex justify-between items-center shadow bg-white">
			<a href="/" className="w-[15%]">
				<Image src={logo} />
			</a>
			<div>
				<ul className="flex flex-row gap-8">
					<li>
						<a
							href="/"
							className={
								pathname === "/"
									? "text-[#3443cd] font-medium"
									: "text-black"
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
						<a
							href="/"
							// className={
							// 	pathname === "/course"
							// 		? "text-[#3443cd] font-medium"
							// 		: "text-black"
							// }
						>
							Community
						</a>
					</li>
					<li>
						<a
							href="/"
							// className={
							// 	pathname === "/course"
							// 		? "text-[#3443cd] font-medium"
							// 		: "text-black"
							// }
						>
							Resources
						</a>
					</li>
				</ul>
			</div>
			<WalletMultiButton className="!bg-purple-600 hover:bg-black transition-all duration-200 rounded-lg" />
		</nav>
	);
};

export default Navbar;
