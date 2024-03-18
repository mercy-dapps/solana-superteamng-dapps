"use client";

import Link from "next/link";
import Image from "next/image";
import { coursesAvailable } from "../data";
import CourseCard from "../components/CourseCards";

const course = () => {
	return (
		<section className="p-5 py-12 lg:px-20 lg:py-20 flex flex-col gap-5 lg:gap-7">
			<div className="flex flex-col gap-3">
				<h2 className="text-4xl font-semibold">Courses Available</h2>
				<p className="w-[55%] font-light">
					Welcome! We are here to make learning web3 a lot more fun. Think
					about us as the freecodecamp version of web3
				</p>
				<div>
					<div className="w-fit mx-auto my-12 grid-cols-1 md:grid-cols-2 grid xl:grid-cols-3 gap-16  text-black">
						{coursesAvailable.map((course, index) => (
							<Link
								href={`/course/${course.course_id}`}
								className="rounded-lg shadow-xl"
								key={course.course_id}
							>
								<CourseCard course={course} key={index} />
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default course;
