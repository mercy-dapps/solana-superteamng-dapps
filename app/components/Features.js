import React from 'react'
import Image from "next/image"
import edu from "../../public/edutech.png"
import community from "../../public/community.png"
import nft from "../../public/nft.png"
import quiz from "../../public/quizzes.png"

const Features = () => {
  return (
		<section className="p-5 py-12 lg:px-20 lg:py-20 flex flex-col gap-5 lg:gap-12 justify-between">
			<div className="flex flex-col gap-3">
				<h2 className="text-4xl font-semibold">Our Features</h2>
				<p className="w-[55%] font-light">
					Start your learning journey with StudyWeb3 today and become a
					more confident about your web3 skills
				</p>
			</div>
			<div className=" grid-cols-1 md:grid-cols-4 grid gap-12 text-black">
				<div className="bg-[#e0e3ff] p-4 py-8 rounded-lg flex flex-col justify-between gap-8">
					<Image src={edu} className="w-[15%]" />
					<h4>Course Recommendations</h4>
				</div>
				<div className="bg-[#e0e3ff] p-4 py-8 rounded-lg flex flex-col justify-between gap-8">
					<Image src={community} className="w-[15%]" />
					<h4>Community Engagement</h4>
				</div>
				<div className="bg-[#3443cd] p-4 py-8 rounded-lg flex flex-col justify-between gap-8 text-white">
					<Image src={nft} className="w-[15%]" />
					<h4>NFT Certification</h4>
				</div>
				<div className="bg-[#e0e3ff] p-4 py-8 rounded-lg flex flex-col justify-between gap-8">
					<Image src={quiz} className="w-[15%]" />
					<h4>Engaging Quizzes</h4>
				</div>
			</div>
		</section>
  );
}

export default Features
