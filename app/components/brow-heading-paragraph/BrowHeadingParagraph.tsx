interface BrowHeadingParagraphProps {
	color: string;
	brow: string;
	heading: string;
	paragraph: string;
	headingType?: "h2" | "h4";
}

const BrowHeadingParagraph: React.FC<BrowHeadingParagraphProps> = ({
	color = "my-dark-blue",
	brow = "Brow text",
	heading = "Heading text",
	paragraph = "Paragraph text",
	headingType = "h2",
}) => {
	return (
		<div className={`flex flex-col gap-2 text-${color}`}>
			<h6 className="font-semibold text-base">{brow}</h6>
			{headingType === "h2" && <h2 className="font-serif">{heading}</h2>}
			{headingType === "h4" && <h4 className="font-serif">{heading}</h4>}
			<p>{paragraph}</p>
		</div>
	);
};

export default BrowHeadingParagraph;
