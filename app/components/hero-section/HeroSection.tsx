import { Button } from "@/components/ui/button";
import Section from "../section/Section";
import Image from "next/image";
import jillHeroImage from "../../../public/png/jill-hero.png";

const HeroSection = () => {
	return (
		<Section bgColor="my-light-blue">
			<div className="grid grid-cols-2 grid-rows-1 bg-my-light-blue h-[640px] overflow-hidden">
				{/* Text content */}
				<div className="flex flex-col gap-6 grid-c col-start-1 col-end-2 justify-center">
					<h1 className="text-my-dark-blue leading-none">
						Capturing Moments That Last a Lifetime
					</h1>
					<p className="text-[32px] font-light text-my-dark-blue leading-tight">
						Welcome to Jill&apos;s Artistic Photography Where Your
						Treasured Moments Become Timeless Masterpieces You&apos;ll
						Cherish Forever.
					</p>
					<Button className="btn bg-my-medium-orange max-w-fit text-my-dark-blue">
						Contact Me
					</Button>
				</div>
				{/* Hero image */}
				<div className="col-start-2 col-end-3">
					<div className="relative rounded-full overflow-clip w-[1024px] h-[1024px] -top-8">
						<Image
							src={jillHeroImage}
							alt="Hero Image"
							width={1024}
							height={1024}
							style={{ objectFit: "cover" }}
						/>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default HeroSection;
