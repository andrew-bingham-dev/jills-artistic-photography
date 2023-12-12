import React from "react";

interface SectionWrapperProps {
	children: React.ReactNode;
}

const Section: React.FC<SectionWrapperProps> = ({ children }) => {
	return (
		<section className="w-full max-w-7xl mx-auto px-8">{children}</section>
	);
};

export default Section;
