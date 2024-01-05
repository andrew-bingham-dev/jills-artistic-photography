/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { BlogPost } from "./interfaces"
import { client } from "@/sanity/lib/client"

export function useGetBlogPosts() {
   const [blogPosts, setBlogPosts] = useState<BlogPost[] | undefined>()

   useEffect(() => {
      async function getData() {
         const query = `
         * [_type == 'blog'] {
         title,
           shortDescription,
           timeToRead,
           mainImage,
           "slug": slug.current,
           "categories": categories[]->{
           name
           }
       }
       `
         const response: BlogPost[] = await client.fetch(query)
         setBlogPosts(response)
      }
      getData()
   }, [])

   return blogPosts
}

export function useGetBlogPost(slug: string) {
   const [blogPost, setBlogPost] = useState<BlogPost[] | undefined>()

   useEffect(() => {
      async function getData() {
         const query = `
         * [_type == 'blog' && slug.current == '${slug}'] {
         title,
           shortDescription,
           timeToRead,
           mainImage,
           "slug": slug.current,
           "categories": categories[]->{
           name,
           body
           }
       }
       `
         const response: BlogPost[] = await client.fetch(query)
         setBlogPost(response)
      }
      getData()
   }, [])

   return blogPost?.[0]
}