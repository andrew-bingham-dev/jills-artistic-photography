import Image from 'next/image'

import RadialGradient from '../radial-gradient/RadialGradient'

const PhotoSpread = () => {
   return (
      // TODO: Fix the gradient circle so that it's centered on the image
      <div className="w-photo-spread relative mt-[12vw] aspect-[5/3.5]">
         {/* gradient circle */}

         <RadialGradient left="1" top="40" />
         <RadialGradient left="90" top="170" />
         {/* w:416px h:234px - w:29% */}
         <div className="hover:z-hover-image absolute left-[4%] top-[2%] z-image aspect-[3/2] w-[29%] -rotate-12 overflow-clip shadow-md transition-transform hover:-rotate-6">
            <Image
               src={'/jpg/portrait/portrait_01.jpg'}
               alt="photo example 1"
               objectFit="cover"
               layout="fill"
               objectPosition="center 20%"
            />
         </div>

         {/* w:416px h:415px - w:29% */}
         <div className="hover:z-hover-image absolute left-[24%] top-[5%] z-image aspect-square w-[29%] -rotate-2 shadow-md transition-transform hover:rotate-0">
            <Image
               src={'/jpg/portrait/portrait_05.jpg'}
               alt="photo example 2"
               objectFit="cover"
               layout="fill"
               objectPosition="center 80%"
            />
         </div>

         {/* w:416px h:234px - w:29% */}
         <div className="hover:z-hover-image absolute right-[6%] top-[9%] z-image aspect-[2/1] w-[29%] rotate-6 shadow-md transition-transform hover:rotate-3">
            <Image
               src={'/jpg/portrait/portrait_02.jpg'}
               alt="photo example 3"
               objectFit="cover"
               layout="fill"
               objectPosition="center 55%"
            />
         </div>

         {/* w:416px h:416px - w:29% */}
         <div className="hover:z-hover-image absolute left-[5%] top-[24%] z-image aspect-square w-[29%] rotate-12 shadow-md transition-transform hover:rotate-6">
            <Image
               src={'/jpg/nature/nature_01.jpg'}
               alt="photo example 4"
               objectFit="cover"
               layout="fill"
               objectPosition="center 20%"
            />
         </div>

         {/* w:416px h:416px - w:29% */}
         <div className="hover:z-hover-image absolute left-[43%] top-[23%] z-image aspect-square w-[29%] rotate-[25deg] shadow-md transition-transform hover:rotate-[20deg]">
            <Image
               src={'/jpg/nature/nature_05.jpg'}
               alt="photo example 5"
               objectFit="cover"
               layout="fill"
               objectPosition="center 20%"
            />
         </div>

         {/* w:515px h:515px - w40% */}
         <div className="hover:z-hover-image absolute left-[15%] top-[42%] z-image aspect-square w-[35%] -rotate-[6deg] shadow-md transition-transform hover:rotate-0">
            <Image
               src={'/jpg/wedding/wedding_02.jpg'}
               alt="photo example 6"
               objectFit="cover"
               layout="fill"
               objectPosition="center 20%"
            />
         </div>

         {/* w:712px h:712px - w:29% */}
         <div className="hover:z-hover-image absolute left-[50%] top-[45%] z-image aspect-square w-[49%] rotate-[9deg] shadow-md transition-transform hover:rotate-3">
            <Image
               src={'/jpg/wedding/wedding_01.jpg'}
               alt="photo example 7"
               objectFit="cover"
               layout="fill"
               objectPosition="center 20%"
            />
         </div>
      </div>
   )
}

export default PhotoSpread
