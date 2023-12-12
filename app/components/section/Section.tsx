import React from "react";

interface SectionWrapperProps {
	children: React.ReactNode;
	bgColor: string;
}

const Section: React.FC<SectionWrapperProps> = ({ children, bgColor }) => {
	return (
		<section className={`w-full bg-${bgColor}`}>
			<div className="max-w-7xl mx-auto">{children}</div>
		</section>
	);
};

export default Section;
