'use client'

import Spacer from '../components/Spacer'
import BrowHeadingParagraph from '../components/brow-heading-paragraph/BrowHeadingParagraph'
import RiseAndAppear from '../components/motions/RiseAndAppear'
import Section from '../components/section/Section'
import Gallery from './Gallery'
import Image from 'next/image'

const paragraphText = [
   'A selection of my favorite, captured moments.',
   'Each image tells a story, a frozen slice of time that speaks to the heart.',
   'From the spontaneous joy of weddings, to the serene beauty of nature,',
   'I strive to capture the essence of each moment.',
]

const weddingGallery = [
   {
      url: '/jpg/wedding/wedding_01.jpg',
      altText: 'wedding photo 1',
   },
   {
      url: '/jpg/wedding/wedding_02.jpg',
      altText: 'wedding photo 2',
   },
   {
      url: '/jpg/wedding/wedding_03.jpg',
      altText: 'wedding photo 3',
   },
   {
      url: '/jpg/wedding/wedding_04.jpg',
      altText: 'wedding photo 4',
   },
   {
      url: '/jpg/wedding/wedding_05.jpg',
      altText: 'wedding photo 5',
   },
   {
      url: '/jpg/wedding/wedding_06.jpg',
      altText: 'wedding photo 6',
   },
   {
      url: '/jpg/wedding/wedding_07.jpg',
      altText: 'wedding photo 7',
   },
]

const portraitGallery = [
   {
      url: '/jpg/portrait/portrait_01.jpg',
      altText: 'portrait photo 1',
   },
   {
      url: '/jpg/portrait/portrait_02.jpg',
      altText: 'portrait photo 2',
   },
   {
      url: '/jpg/portrait/portrait_03.jpg',
      altText: 'portrait photo 3',
   },
   {
      url: '/jpg/portrait/portrait_04.jpg',
      altText: 'portrait photo 4',
   },
   {
      url: '/jpg/portrait/portrait_05.jpg',
      altText: 'portrait photo 5',
   },
   {
      url: '/jpg/portrait/portrait_06.jpg',
      altText: 'portrait photo 6',
   },
   {
      url: '/jpg/portrait/portrait_07.jpg',
      altText: 'portrait photo 7',
   },
]

const natureGallery = [
   {
      url: '/jpg/nature/nature_01.jpg',
      altText: 'nature photo 1',
   },
   {
      url: '/jpg/nature/nature_02.jpg',
      altText: 'nature photo 2',
   },
   {
      url: '/jpg/nature/nature_03.jpg',
      altText: 'nature photo 3',
   },
   {
      url: '/jpg/nature/nature_04.jpg',
      altText: 'nature photo 4',
   },
   {
      url: '/jpg/nature/nature_05.jpg',
      altText: 'nature photo 5',
   },
   {
      url: '/jpg/nature/nature_06.jpg',
      altText: 'nature photo 6',
   },
]

const GalleriesSection = () => {
   return (
      <Section name="GallerySection" bgColor="my-gallery-gradient">
         <Spacer size="nav" />
         <Image
            src="/svg/camera_watermark.svg"
            alt="background"
            className="absolute"
            layout="fill"
            objectFit="contain"
            objectPosition="center 15%"
         />
         <div className="relative flex flex-col gap-[4vw] px-[4vw] py-[8vw] 1450:px-0">
            <RiseAndAppear>
               <BrowHeadingParagraph
                  color="my-dark-blue"
                  heading="Welcome to My Galleries"
                  paragraph={paragraphText}
               />
            </RiseAndAppear>
            <Spacer />
            <Gallery heading="Weddings" images={weddingGallery} />
            <Gallery heading="Portraits" images={portraitGallery} />
            <Gallery heading="Nature" images={natureGallery} />
         </div>
      </Section>
   )
}

export default GalleriesSection
