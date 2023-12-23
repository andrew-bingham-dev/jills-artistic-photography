interface BrowHeadingParagraphProps {
   color: string
   brow?: string
   heading: string
   paragraph: string
   headingType?: 'h2' | 'h4'
}

const BrowHeadingParagraph: React.FC<BrowHeadingParagraphProps> = ({
   color = 'my-dark-blue',
   brow,
   heading = 'Heading text',
   paragraph = 'Paragraph text',
   headingType = 'h2',
}) => {
   return (
      <div className={`flex flex-col gap-4 text-${color}`}>
         {brow && <h6 className="text-brow font-semibold">{brow}</h6>}
         {headingType === 'h2' && (
            <h2 className="text-h2 font-serif">{heading}</h2>
         )}
         {headingType === 'h4' && (
            <h4 className="text-h4 font-serif">{heading}</h4>
         )}
         <p className="text-para">{paragraph}</p>
      </div>
   )
}

export default BrowHeadingParagraph
