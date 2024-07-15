import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CourseSection from "./components/CourseSection";
import Subscribe from "./components/Subscribe";

const page = () => {
  return (
    <div>
      <Hero />
      <Features />
      <CourseSection />
      <Subscribe />
    </div>
  );
};

export default page;
