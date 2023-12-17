import Spacer from "../Spacer";
import BrowHeadingParagraph from "../brow-heading-paragraph/BrowHeadingParagraph";
import Section from "../section/Section";
import Testimonial from "./Testimonial";
import avatar1 from "../../../public/png/avatars/john_doe.png";
import avatar2 from "../../../public/png/avatars/jane_smith.png";

interface TestimonialSectionProps {}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({}) => {
	return (
		<Section name="TestimonialSection" bgColor="my-medium-blue">
			<Spacer size="x-large" />
			<BrowHeadingParagraph
				heading="My Happy Clients"
				paragraph="Read about my client's experiences"
				color="my-light-beige"
			/>
			<Spacer size="large" />
			<div className="grid grid-cols-2 grid-rows-1 gap-x-8">
				<Testimonial
					name="John Doe"
					avatar={avatar1}
					quote="I couldn't be happier with the stunning wedding photos Jill captured. Her attention to detail and artistic eye truly made our special day unforgettable."
				/>
				<Testimonial
					name="Jane Smith"
					avatar={avatar2}
					quote="Working with Jill was a pleasure. Her professionalism and talent shine through in every portrait she takes. I highly recommend her services."
				/>
			</div>
			<Spacer size="x-large" />
		</Section>
	);
};

export default TestimonialSection;
