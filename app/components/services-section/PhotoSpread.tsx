import Image from "next/image";

import natureImage01 from "../../../public/jpg/nature/nature_01.jpg";
import natureImage05 from "../../../public/jpg/nature/nature_05.jpg";
import portraitImage02 from "../../../public/jpg/portrait/portrait_02.jpg";
import portraitImage05 from "../../../public/jpg/portrait/portrait_05.jpg";
import portraitImage09 from "../../../public/jpg/portrait/portrait_09.jpg";
import weddingImage01 from "../../../public/jpg/wedding/wedding_01.jpg";
import weddingImage02 from "../../../public/jpg/wedding/wedding_02.jpg";

const PhotoSpread = () => {
	return (
		// TODO: set this sections aspect ration
		<div className="relative aspect-[5/3.5]">
			{/* w:416px h:234px - w:29% */}
			<div className="absolute w-[29%] top-[2%] left-[4%] -rotate-12 overflow-clip aspect-[3/2] shadow-md">
				<Image
					src={portraitImage09}
					alt="photo example 1"
					objectFit="cover"
					layout="fill"
					objectPosition="center 20%"
				/>
			</div>

			{/* w:416px h:415px - w:29% */}
			<div className="absolute w-[29%] aspect-square left-[24%] top-[5%] -rotate-2  shadow-md">
				<Image
					src={portraitImage05}
					alt="photo example 2"
					objectFit="cover"
					layout="fill"
					objectPosition="center 80%"
				/>
			</div>

			{/* w:416px h:234px - w:29% */}
			<div className="absolute w-[29%] aspect-[2/1] right-[6%] top-[9%] rotate-6  shadow-md">
				<Image
					src={portraitImage02}
					alt="photo example 3"
					objectFit="cover"
					layout="fill"
					objectPosition="center 55%"
				/>
			</div>

			{/* w:416px h:416px - w:29% */}
			<div className="absolute w-[29%] aspect-square left-[5%] top-[24%] rotate-12  shadow-md">
				<Image
					src={natureImage01}
					alt="photo example 4"
					objectFit="cover"
					layout="fill"
					objectPosition="center 20%"
				/>
			</div>

			{/* w:416px h:416px - w:29% */}
			<div className="absolute w-[29%] aspect-square left-[50%] top-[23%] rotate-[25deg]  shadow-md">
				<Image
					src={natureImage05}
					alt="photo example 5"
					objectFit="cover"
					layout="fill"
					objectPosition="center 20%"
				/>
			</div>

			{/* w:515px h:515px - w40% */}
			<div className="absolute w-[35%] aspect-square left-[15%] top-[42%] -rotate-[6deg]  shadow-md">
				<Image
					src={weddingImage02}
					alt="photo example 6"
					objectFit="cover"
					layout="fill"
					objectPosition="center 20%"
				/>
			</div>

			{/* w:712px h:712px - w:29% */}
			<div className="absolute w-[49%] aspect-square left-[48%] top-[45%] rotate-[9deg]  shadow-md">
				<Image
					src={weddingImage01}
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
