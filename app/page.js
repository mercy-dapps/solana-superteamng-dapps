import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CourseSection from "./components/CourseSection";
import Subscribe from "./components/Subscribe";

const page = () => {
	return (
		<div>
			<Hero />
			<CourseSection/>
			<Subscribe/>
			<Footer />
		</div>
	);
};

export default page;
