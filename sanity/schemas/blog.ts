// TODO: Add ability to import images from unsplash

const blog = {
   name: 'blog',
   type: 'document',
   title: 'Blog',
   fields: [
      {
         name: 'title',
         type: 'string',
         title: 'Title',
      },
      {
         name: 'shortDescription',
         type: 'string',
         title: 'Short Description',
      },
      {
         name: 'publishedAt',
         type: 'datetime',
         title: 'Published At',
         options: {
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm',
            timeStep: 15,
            calendarTodayLabel: 'Today'
         }
      },
      {
         name: 'mainImage',
         type: 'image',
         title: 'Main image',
         options: {
            hotspot: true
         }
      },
      {
         name: 'categories',
         type: 'array',
         title: 'Categories',
         of: [
            {
               type: 'reference',
               to: {
                  type: 'categories'
               }
            }
         ]
      },
      {
         name: 'timeToRead',
         type: 'number',
         title: 'Time to read (mins)'
      },
      {
         name: 'slug',
         type: 'slug',
         title: 'Slug',
         options: {
            source: 'title',
            maxLength: 96
         }
      },
      {
         name: 'body',
         type: 'array',
         title: 'Body',
         of: [
            { type: 'block' },
         ]
      }

   ]
}

export default blog