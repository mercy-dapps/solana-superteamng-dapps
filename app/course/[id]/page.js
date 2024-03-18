"use client";

import { useState, useContext } from "react";
import { ResourceContext } from "@/app/context/resourceContext";

import { PrimaryButton } from "@/app/components/Button";
import Link from "next/link";
import Image from "next/image";
import CourseQuestion from "@/app/components/CourseQuestion";

const page = ({ params }) => {
  const { courses } = useContext(ResourceContext);

  console.log(courses);

  const findMatchCourse = courses.find(
    (course) => course.course_id == params.id
  );

  const [completed, setCompleted] = useState(false);

  return (
    <section className="lg:px-20 relative gap-5 lg:gap-14">
      <div className="flex p-5 py-12 lg:py-20 flex-row gap-5 lg:gap-14">
        <div className="w-1/2">
          <Image src={findMatchCourse.img} className="rounded w-full h-full" />
        </div>
        <div className="flex flex-col justify-between gap-3">
          <h2 className="text-4xl font-semibold">{findMatchCourse.title}</h2>
          <ul>
            {findMatchCourse.chapters.map((mod) => (
              <li className="pb-4" key={mod.id}>
                <p className="font-light">
                  {mod.module_number}:{" "}
                  <Link
                    href={mod.module_link}
                    target="_blank"
                    className="text-[#3443cd] font-normal hover:underline"
                  >
                    Click Here
                  </Link>
                </p>
              </li>
            ))}
          </ul>

          {findMatchCourse.certificate_link == "" ? (
            <PrimaryButton
              text="Mark as Completed"
              onClick={() => setCompleted(true)}
            />
          ) : (
            <a href={findMatchCourse.certificate_link} target="_blank">
              <PrimaryButton text="Open Certificate" />
            </a>
          )}
        </div>
      </div>
      {completed && (
        <CourseQuestion params={params} onClick={() => setCompleted(false)} />
      )}
    </section>
  );
};

export default page;
