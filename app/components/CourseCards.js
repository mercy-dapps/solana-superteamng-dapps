import Image from "next/image";

const CourseCard = ({ course }) => {
	return (
		<div className="cursor-pointer">
			<Image src={course.img} className="rounded-tl-lg rounded-tr-lg" />
			<div className="p-5 flex flex-col gap-2">
				<h3 className="text font-semibold">{course.title}</h3>
				<hr></hr>
				<div className="flex flex-row gap-3 text-sm items-center justify-between">
					<div className="flex flex-row gap-3 items-center">
						<p className="">{course.hours} hrs</p>
						<p className="">{course.numOfChapters} Chapters</p>
					</div>
					<p className="bg-[#e0e3ff] p-2 rounded text-[#3443cd] font-medium text-xs">
						{course.level}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
