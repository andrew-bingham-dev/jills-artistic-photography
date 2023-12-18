import React from "react";

interface SectionWrapperProps {
	name: string;
	children: React.ReactNode;
	bgColor: string;
	sectionClasses?: string;
	containerClasses?: string;
}

const Section: React.FC<SectionWrapperProps> = ({
	name,
	children,
	bgColor,
	sectionClasses = "",
	containerClasses = "",
}) => {
	return (
		<section
			id={name}
			className={`z-section overflow-x-clip bg-${bgColor} ${sectionClasses}`}
		>
			<div
				className={`z-container max-w-7xl mx-auto relative ${containerClasses}`}
			>
				{children}
			</div>
		</section>
	);
};

export default Section;
