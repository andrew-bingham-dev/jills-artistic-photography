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
         name: 'timeToRead',
         type: 'number',
         title: 'Time to read (mins)'
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