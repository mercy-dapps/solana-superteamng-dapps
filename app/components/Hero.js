import heroImg from "../../public/hero.jpg";
import Link from "next/link";
import Image from "next/image";
import { PrimaryButton } from "./Button.js";

const Hero = () => {
	return (
		<section className="py-8 lg:py-16 ">
			<div className="md:flex flex-row gap-2 items-center mx-auto md:justify-between px-4 lg:px-20 lg:pt-12">
				<div className="flex flex-col gap-4 lg:gap-6 items-start justify-center w-[80%] md:w-[48%] mx-auto">
					<h1 className=" text-[1.7rem] lg:text-[3.7rem] w-full lg:w-[100%] lg:leading-[4rem] font-semibold">
						Learn Web3 with
						<span className="text-[#3443cd]"> StudyWeb3</span>
					</h1>
					<p className=" lg:w-[90%] font-light">
						At StudyWeb3, we're dedicated to empowering individuals like
						you with the knowledge and skills needed to thrive in the
						fast-paced world of Web3 technologies. Whether you're a
						beginner or an experienced professional, our platform offers a
						comprehensive learning experience tailored to your needs.
					</p>
					<div>
						<Link href="/course">
							<PrimaryButton text="Get Started" />
						</Link>
					</div>
				</div>

				<div className="w-[80%] md:w-[48%] mx-auto">
					<Image src={heroImg} className="w-[100%]" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
