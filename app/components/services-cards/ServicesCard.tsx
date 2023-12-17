import BrowHeadingParagraph from "../brow-heading-paragraph/BrowHeadingParagraph";

interface ServicesCardProps {
	brow: string;
	heading: string;
	paragraph: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
	brow,
	heading,
	paragraph,
}) => {
	return (
		<div className="flex flex-col bg-my-dark-blue rounded-4xl">
			<div>image</div>
			<div className="p-8">
				<BrowHeadingParagraph
					headingType="h4"
					color="my-light-beige"
					brow={brow}
					heading={heading}
					paragraph={paragraph}
				/>
			</div>
		</div>
	);
};

export default ServicesCard;
