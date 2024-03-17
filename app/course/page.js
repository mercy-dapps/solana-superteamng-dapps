"use client";

import Link from "next/link";
import Image from "next/image";
import { coursesAvailable } from "../data";



const course = () => {
  return (
    <>
      <div className="">
        <p>
          Welcome! We are here to make learning web3 lots more fun. Think about
          us as the freecodecamp version of web3
        </p>
        <div>
          Course Available
          <div className="grid-cols-3 gap-12 grid w-5/6 m-auto">
            {coursesAvailable.map((course) => (
              <Link
                href={`/course/${course.course_id}`}
                className="rounded-lg shadow-2xl"
                key={course.course_id}
              >
                <Image src={course.img} className="rounded-tl-lg rounded-tr-lg" />
                <h2 className="text-xl">{course.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default course;
