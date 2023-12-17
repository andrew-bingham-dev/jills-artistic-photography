import BrowHeadingParagraph from "../brow-heading-paragraph/BrowHeadingParagraph";
import Section from "../section/Section";
import ServicesCard from "../services-cards/ServicesCard";
import ServicesCardContainer from "../services-cards/ServicesCardContainer";

const ServicesSection = () => {
	return (
		<Section
			name="ServicesSection"
			bgColor="my-medium-blue"
			sectionClasses="overflow-hidden"
			containerClasses="z-[20]"
		>
			<div className="h-[800px] bg-my-medium-blue py-16">
				<BrowHeadingParagraph
					color="my-light-beige"
					brow="Capture"
					heading="Preserve Your Precious Moments"
					paragraph="Professional photography services for weddings, portraits, and more."
				/>
				<ServicesCardContainer />
			</div>
		</Section>
	);
};

export default ServicesSection;
