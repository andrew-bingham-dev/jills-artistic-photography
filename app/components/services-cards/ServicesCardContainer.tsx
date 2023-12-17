import exp from "constants";
import ServicesCard from "./ServicesCard";

const ServicesCardContainer = () => {
	return (
		<div className="grid grid-cols-3 gap-7">
			<ServicesCard
				brow="Moments"
				heading="Wedding Photography"
				paragraph="Capture the beauty and magic of your special day."
			/>
			<ServicesCard
				brow="Expressions"
				heading="Portrait Photography"
				paragraph="Preserve your unique personality in stunning portraits."
			/>
			<ServicesCard
				brow="Life"
				heading="Nature Photography"
				paragraph="Discover the beauty of the natural world through captivating photographs."
			/>
		</div>
	);
};

export default ServicesCardContainer;
