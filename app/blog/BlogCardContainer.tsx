/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import Card from '../components/card/Card'
import { urlForImage } from '@/sanity/lib/image'
import { useGetBlogPosts } from './hooks'
import { BlogPost } from './interfaces'

const BlogCardContainer = () => {
   const posts = useGetBlogPosts()

   return (
      <div>
         {posts?.map((post: BlogPost, index) => (
            <Card
               key={index}
               brow={post.timeToRead + ' min read'}
               heading={post.title}
               paragraph={[post.shortDescription]}
               altImageDescription="Bride and groom holding hands"
               image={urlForImage(post.mainImage)}
               url={`/blog/${post.slug}`}
               newTab
            />
         ))}
      </div>
   )
}

export default BlogCardContainer
