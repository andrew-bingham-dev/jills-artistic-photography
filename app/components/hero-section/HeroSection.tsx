import Section from "../section/Section"
import Image from "next/image"
import CtaButton from "../cta-button/CtaButton"

const HeroSection = () => {
	return (
		<Section
			name="HeroSection"
			bgColor="my-light-blue"
			sectionClasses="overflow-y-clip"
		>
			{/* Background circles */}
			<div>
				<div className="absolute bg-black/5 w-[1500px] h-[1500px] rounded-full -top-[200px] -right-[500px] z-decor-1" />
				<div className="absolute bg-black/5 w-[800px] h-[800px] rounded-full -top-[200px] -left-[300px] z-decor-2" />
				<div className="absolute bg-black/5 w-[640px] h-[640px] rounded-full -bottom-[200px] -left-[300px] z-decor-3" />
			</div>

			{/* Hero content */}
			<div className="grid grid-cols-1 grid-rows-2 min-[1440px]:grid-cols-2 min-[1440px]:grid-rows-1 bg-my-light-blue min-[1440px]:h-[640px] pb-[8vw]">
				{/* Hero text */}
				<div className="flex flex-col gap-6 row-start-2 row-span-1 min-[768px]:col-start-1 min-[768px]:col-end-2 justify-center z-10 pl-[4vw] min-[1440px]:pl-0">
					<h1 className="min-[900px]:text-[56px] text-my-dark-blue leading-none title-text-mark text-[40px] min-[1440px]:text-[64px]">
						Capturing Moments That Last a Lifetime
					</h1>
					<p className="font-light text-my-dark-blue leading-tight text-[20px]  min-[1440px]:text-[32px]">
						Welcome to Jill&apos;s Artistic Photography Where Your
						Treasured Moments Become Timeless Masterpieces You&apos;ll
						Cherish Forever.
					</p>
					<CtaButton />
				</div>
				{/* Hero image */}
				<div className="min-[1440px]:col-start-2 min-[1440px]:col-span-1 row-start-1 row-span-1 z-[2]">
					<div className="min-[1440px]:rounded-full overflow-clip w-full h-full min-[1440px]:w-[1024px] min-[1440px]:min-h-[1024px] md:-top-8 relative">
						<Image
							src={"/jpg/profile/profile_01.jpg"}
							alt="Hero Image"
							fill
							style={{ objectFit: "cover" }}
							objectPosition="30% 10%"
						/>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default HeroSection
