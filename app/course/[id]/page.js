"use client";

import { useState } from "react";
import { coursesAvailable } from "@/app/data";
import Link from "next/link";
import CourseQuestion from "@/app/components/CourseQuestion";

const page = ({ params }) => {
  
  const findMatchCourse = coursesAvailable.find(
    (course) => course.course_id == params.id
  );
  const [showQuestn, setShowQuestn] = useState(false);
  const [completed, setCompleted] = useState(false)

  return (
    <>
      <div>
        {findMatchCourse.title}
        <ul>
          {findMatchCourse.chapters.map((mod) => (
            <li className="pb-4" key={mod.id}>
              <p>
                {mod.module_number}:{" "}
                <Link href={mod.module_link} target="_blank">
                  Click Here
                </Link>
              </p>
            </li>
          ))}
        </ul>
        <button
          className="bg-zinc-800 rounded-xl text-white p-2"
          onClick={()=>setCompleted(true)}
        >
          Mark as Completed
        </button>
      </div>
      {completed && <CourseQuestion params={params} />}
    </>
  );
};

export default page;
