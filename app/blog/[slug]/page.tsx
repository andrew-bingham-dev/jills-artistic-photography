'use client'

import { FC } from 'react'
import Footer from '@/app/components/footer-section/Footer'
import CtaSection from '@/app/components/cta-section/CtaSection'
import BlogPostSection from './BlogPostSection'

interface BlogPostPageProps {
   params: {
      slug: string
   }
}

const BlogPostPage: FC<BlogPostPageProps> = ({ params }) => {
   return (
      <>
         <main className="relative z-10">
            <BlogPostSection slug={params.slug} />
            <CtaSection />
         </main>
         <Footer />
      </>
   )
}

export default BlogPostPage
