import React from "react";

interface SectionWrapperProps {
	children: React.ReactNode;
	bgColor: string;
	classes?: string;
}

const Section: React.FC<SectionWrapperProps> = ({
	children,
	bgColor,
	classes,
}) => {
	return (
		<section className={`w-full bg-${bgColor} ${classes}`}>
			<div className="max-w-7xl mx-auto relative">{children}</div>
		</section>
	);
};

export default Section;
