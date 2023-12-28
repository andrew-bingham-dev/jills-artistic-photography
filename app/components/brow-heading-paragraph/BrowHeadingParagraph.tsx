interface BrowHeadingParagraphProps {
   color: string
   brow?: string
   heading: string
   paragraph?: string[]
   headingType?: 'h2' | 'h4'
}

const BrowHeadingParagraph: React.FC<BrowHeadingParagraphProps> = ({
   color = 'my-dark-blue',
   brow,
   heading = 'Heading text',
   paragraph,
   headingType = 'h2',
}) => {
   return (
      <div className={`flex flex-col gap-4 text-${color}`}>
         {brow && <h6 className="text-brow font-semibold">{brow}</h6>}
         {headingType === 'h2' && (
            <h2 className="font-serif text-h2">{heading}</h2>
         )}
         {headingType === 'h4' && (
            <h4 className="font-serif text-h4">{heading}</h4>
         )}
         {paragraph && (
            <p className="text-para">
               {paragraph.map((line, index) => (
                  <span key={index}>
                     {line}
                     <br />
                  </span>
               ))}
            </p>
         )}
      </div>
   )
}

export default BrowHeadingParagraph
