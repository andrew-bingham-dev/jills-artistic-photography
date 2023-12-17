import BrowHeadingParagraph from "../brow-heading-paragraph/BrowHeadingParagraph";
import Image, { StaticImageData } from "next/image";

interface ServicesCardProps {
	brow: string;
	heading: string;
	paragraph: string;
	image: StaticImageData;
	altImageDescription: string;
	imagePosition?: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
	brow,
	heading,
	paragraph,
	image,
	altImageDescription,
	imagePosition = "center center",
}) => {
	return (
		<div className="flex flex-col bg-my-dark-blue rounded-4xl overflow-clip shadow-lg shadow-my-dark-blue">
			<div className="h-60 relative overflow-clip">
				<Image
					src={image}
					alt={altImageDescription}
					layout="fill"
					objectFit="cover"
					objectPosition={imagePosition}
				/>
			</div>
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
