import BrowHeadingParagraph from '../components/brow-heading-paragraph/BrowHeadingParagraph'
import Section from '../components/section/Section'
import BlogCardContainer from './BlogCardContainer'

const BlogSection = () => {
   return (
      <Section
         name="BlogSection"
         bgColor="my-light-blue"
         containerClasses="pt-[88px]"
      >
         <div className="py-[8vw]">
            <div className="flex flex-col gap-[4vw]">
               <BrowHeadingParagraph
                  color="my-dark-blue"
                  heading="My Latest Blog Posts"
                  paragraph={['Stay updated with my latest blog articles']}
               />
               <BlogCardContainer />
            </div>
         </div>
      </Section>
   )
}

export default BlogSection
