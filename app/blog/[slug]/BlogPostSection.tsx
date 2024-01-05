import { FC } from 'react'
import { useGetBlogPost } from '../hooks'
import Section from '@/app/components/section/Section'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'

interface BlogPostSectionProps {
   slug: string
}

const BlogPostSection: FC<BlogPostSectionProps> = ({ slug }) => {
   const post = useGetBlogPost(slug)

   if (!post) {
      return <div>Loading...</div>
   }

   return (
      <Section name="BlogPostSection" bgColor="my-light-beige">
         <div className="px-[4vw] py-[8vw] 1450:px-0">
            <div className="grid auto-rows-auto 600:grid-cols-2">
               <div className="flex flex-col gap-[2vw]">
                  <h1 className="text-h1">{post.title}</h1>
                  <p className="text-para">{post.shortDescription}</p>
                  <div className="text-para">
                     <p>By Jill Thompson</p>
                     <p>Time to read {post.timeToRead} mins</p>
                  </div>
               </div>
               <div className="relative">
                  <Image
                     src={urlForImage(post.mainImage)}
                     alt="image"
                     fill
                     objectFit="cover"
                  />
               </div>
            </div>
         </div>
      </Section>
   )
}

export default BlogPostSection
