import Card from '../components/card/Card'
import wedding01 from '../../public/jpg/wedding/wedding_01.jpg'

const BlogCardContainer = () => {
   return (
      <div>
         <Card
            brow="3 min read"
            heading="10 Tips for Stunning Wedding Photos"
            paragraph={[
               'Learn how to capture beautiful moments on your special day',
            ]}
            altImageDescription="Bride and groom holding hands"
            image={wedding01}
            url="#"
         />
      </div>
   )
}

async function getData() {
   const query = ``
}

export default BlogCardContainer
