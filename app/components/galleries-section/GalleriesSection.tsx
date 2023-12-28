import BrowHeadingParagraph from '../brow-heading-paragraph/BrowHeadingParagraph'
import Section from '../section/Section'
import Gallery from './Gallery'

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

const GalleriesSection = () => {
   return (
      <Section name="GallerySection" bgColor="my-gallery-gradient">
         <div className="flex flex-col gap-[4vw] px-[4vw] py-[8vw] 1450:px-0">
            <BrowHeadingParagraph
               color="my-dark-blue"
               heading="Welcome to My Galleries"
               paragraph={paragraphText}
            />
            <Gallery heading="Wedding" images={weddingGallery} />
            <Gallery heading="Portrait" images={weddingGallery} />
            <Gallery heading="Nature" images={weddingGallery} />
         </div>
      </Section>
   )
}

export default GalleriesSection
