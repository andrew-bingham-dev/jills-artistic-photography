import { Button } from "@/components/ui/button";
import Section from "../section/Section";
import Image from "next/image";
import jillHeroImage from "../../../public/jpg/profile/profile_01.jpg";
import CtaButton from "../cta-button/CtaButton";

const HeroSection = () => {
	return (
		<Section
			name="HeroSection"
			bgColor="my-light-blue"
			sectionClasses="overflow-y-clip"
		>
			{/* Background circles */}
			<div className="absolute bg-black/5 w-[1500px] h-[1500px] rounded-full -top-[200px] -right-[500px] z-decor-1" />
			<div className="absolute bg-black/5 w-[800px] h-[800px] rounded-full -top-[200px] -left-[300px]  z-decor-2" />
			<div className="absolute bg-black/5 w-[640px] h-[640px] rounded-full -bottom-[200px] -left-[300px]  z-decor-3" />
			<div className="grid grid-cols-2 grid-rows-1 bg-my-light-blue h-[640px]">
				{/* Hero content */}
				<div className="flex flex-col gap-6 grid-c col-start-1 col-end-2 justify-center z-10">
					<h1 className="text-my-dark-blue leading-none">
						Capturing Moments That Last a Lifetime
					</h1>
					<p className="text-[32px] font-light text-my-dark-blue leading-tight">
						Welcome to Jill&apos;s Artistic Photography Where Your
						Treasured Moments Become Timeless Masterpieces You&apos;ll
						Cherish Forever.
					</p>
					<CtaButton />
				</div>
				{/* Hero image */}
				{/* TODO: Get a better quality image */}
				<div className="col-start-2 col-end-3 z-[2]">
					<div className="relative rounded-full overflow-clip w-[1024px] min-h-[1024px] -top-8">
						<Image
							src={jillHeroImage}
							alt="Hero Image"
							fill
							style={{ objectFit: "cover" }}
						/>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default HeroSection;
