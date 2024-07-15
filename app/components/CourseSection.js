"use client";

import Link from "next/link";
import { popularCourses } from "../data";
import CourseCard from "./CourseCards";
import { PrimaryButton } from "./Button";

const CourseSection = () => {
	return (
		<section className="p-5 py-12 lg:px-20 lg:py-20 flex flex-col gap-5 lg:gap-7">
			<div className="flex flex-col gap-3">
				<h2 className="text-4xl font-semibold">Popular Courses</h2>
				<p className="w-[80%] md:w-[55%] font-light">
					Discover our curated selection of popular courses designed to
					empower you with essential skills and knowledge for navigating
					the Web3 landscape. Whether you're starting your journey or
					advancing your expertise, these courses are tailored to meet your
					learning needs.
				</p>
			</div>
			<div className="w-fit mx-auto my-12 grid-cols-1 md:grid-cols-2 grid xl:grid-cols-3 gap-16  text-black">
				{popularCourses.slice(0, 6).map((course, index) => (
					<Link
						href={`/course/${course.course_id}`}
						className="rounded-lg shadow"
						key={course.course_id}
					>
						<CourseCard course={course} key={index} />
					</Link>
				))}
			</div>
			<div className="self-center">
				<Link href="/course">
					<PrimaryButton text="View Courses" />
				</Link>
			</div>
		</section>
	);
};

export default CourseSection;
