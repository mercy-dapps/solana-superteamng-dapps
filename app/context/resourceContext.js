"use client";

import { createContext, useState } from "react";
import { popularCourses } from "../data";

export const ResourceContext = createContext();

export const ResourceContextProvider = ({ children }) => {
  const persistedData =
    typeof window !== "undefined"
      ? window.localStorage.getItem("appState")
      : "[]";

  const data = persistedData ? JSON.parse(persistedData) : popularCourses;

  const [courses, setCourses] = useState(data);

  const updateCertificateLink = (link, id) => {
    const updatedCourses = courses.map((course) =>
      course.course_id == id ? { ...course, certificate_link: link } : course
    );

    setCourses(updatedCourses);

    localStorage.setItem("appState", JSON.stringify(updatedCourses));
  };

  return (
    <ResourceContext.Provider
      value={{
        courses,
        updateCertificateLink,
      }}
    >
      {children}
    </ResourceContext.Provider>
  );
};
