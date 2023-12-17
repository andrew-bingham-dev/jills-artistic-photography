import starSvg from "../../../public/svg/Star.svg";
import Image, { StaticImageData } from "next/image";

interface Testimonial {
	quote: string;
	avatar: StaticImageData;
	name: string;
}

const Testimonial: React.FC<Testimonial> = ({ quote, avatar, name }) => {
	return (
		<div className="flex flex-col gap-8 text-my-light-beige">
			<div className="flex flex-row gap-1">
				<Image src={starSvg} alt="Star" />
				<Image src={starSvg} alt="Star" />
				<Image src={starSvg} alt="Star" />
				<Image src={starSvg} alt="Star" />
				<Image src={starSvg} alt="Star" />
			</div>
			<p className="italic">&quot;{quote}&quot;</p>
			<div className="flex items-center gap-4">
				<Image src={avatar} alt="Avatar" />
				<p className="font-semibold">{name}</p>
			</div>
		</div>
	);
};

export default Testimonial;
