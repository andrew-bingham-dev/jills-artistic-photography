import Image from "next/image";

import RadialGradient from "../radial-gradient/RadialGradient";

const PhotoSpread = () => {
	return (
		// TODO: Fix the gradient circle so that it's centered on the image
		<div className="relative aspect-[5/3.5]">
			{/* gradient circle */}

			<RadialGradient left="1" top="40" />
			<RadialGradient left="90" top="170" />
			{/* w:416px h:234px - w:29% */}
			<div className="absolute w-[29%] top-[2%] left-[4%] -rotate-12 overflow-clip aspect-[3/2] shadow-md z-image">
				<Image
					src={"/jpg/portrait/portrait_01.jpg"}
					alt="photo example 1"
					objectFit="cover"
					layout="fill"
					objectPosition="center 20%"
				/>
			</div>

			{/* w:416px h:415px - w:29% */}
			<div className="absolute w-[29%] aspect-square left-[24%] top-[5%] -rotate-2 shadow-md z-image">
				<Image
					src={"/jpg/portrait/portrait_05.jpg"}
					alt="photo example 2"
					objectFit="cover"
					layout="fill"
					objectPosition="center 80%"
				/>
			</div>

			{/* w:416px h:234px - w:29% */}
			<div className="absolute w-[29%] aspect-[2/1] right-[6%] top-[9%] rotate-6 shadow-md z-image">
				<Image
					src={"/jpg/portrait/portrait_02.jpg"}
					alt="photo example 3"
					objectFit="cover"
					layout="fill"
					objectPosition="center 55%"
				/>
			</div>

			{/* w:416px h:416px - w:29% */}
			<div className="absolute w-[29%] aspect-square left-[5%] top-[24%] rotate-12 shadow-md z-image">
				<Image
					src={"/jpg/nature/nature_01.jpg"}
					alt="photo example 4"
					objectFit="cover"
					layout="fill"
					objectPosition="center 20%"
				/>
			</div>

			{/* w:416px h:416px - w:29% */}
			<div className="absolute w-[29%] aspect-square left-[43%] top-[23%] rotate-[25deg] shadow-md z-image">
				<Image
					src={"/jpg/nature/nature_05.jpg"}
					alt="photo example 5"
					objectFit="cover"
					layout="fill"
					objectPosition="center 20%"
				/>
			</div>

			{/* w:515px h:515px - w40% */}
			<div className="absolute w-[35%] aspect-square left-[15%] top-[42%] -rotate-[6deg] shadow-md z-image">
				<Image
					src={"/jpg/wedding/wedding_02.jpg"}
					alt="photo example 6"
					objectFit="cover"
					layout="fill"
					objectPosition="center 20%"
				/>
			</div>

			{/* w:712px h:712px - w:29% */}
			<div className="absolute w-[49%] aspect-square left-[50%] top-[45%] rotate-[9deg] shadow-md z-image">
				<Image
					src={"/jpg/wedding/wedding_01.jpg"}
					alt="photo example 7"
					objectFit="cover"
					layout="fill"
					objectPosition="center 20%"
				/>
			</div>
		</div>
	);
};

export default PhotoSpread;
