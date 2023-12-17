import Spacer from "../Spacer";
import BrowHeadingParagraph from "../brow-heading-paragraph/BrowHeadingParagraph";
import Section from "../section/Section";
import ServicesCardContainer from "./ServicesCardContainer";
import PhotoSpread from "./PhotoSpread";

const ServicesSection = () => {
	return (
		<Section
			name="ServicesSection"
			bgColor="my-medium-blue"
			sectionClasses="overflow-x-clip"
		>
			<Spacer size="x-large" />
			<BrowHeadingParagraph
				color="my-light-beige"
				brow="Capture"
				heading="Preserve Your Precious Moments"
				paragraph="Professional photography services for weddings, portraits, and more."
			/>
			<Spacer size="large" />
			<ServicesCardContainer />
			<Spacer size="x-large" />
			<PhotoSpread />
		</Section>
	);
};

export default ServicesSection;
