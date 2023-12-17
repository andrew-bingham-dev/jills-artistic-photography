import Spacer from "../Spacer";
import BrowHeadingParagraph from "../brow-heading-paragraph/BrowHeadingParagraph";
import Section from "../section/Section";
import FaqAccordion from "./FaqAccordion";

const FaqSection: React.FC = () => {
	return (
		<Section name="FAQSection" bgColor="my-light-blue">
			<Spacer size="x-large" />
			<BrowHeadingParagraph
				color="my-dark-blue"
				heading="FAQs"
				paragraph="Find answers to common questions about my services and process."
			/>
			<Spacer size="large" />
			<FaqAccordion />
			<Spacer size="large" />
			<BrowHeadingParagraph
				headingType="h4"
				color="my-dark-blue"
				heading="Still Have Questions?"
				paragraph="Contact me directly to discuss your photography needs."
			/>
			<Spacer size="x-large" />
		</Section>
	);
};

export default FaqSection;
