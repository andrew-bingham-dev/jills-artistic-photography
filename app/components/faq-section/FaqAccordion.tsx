import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FaqAccordion = () => {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item 1" className="border-my-dark-blue">
				<AccordionTrigger className="font-semibold">
					How do I book a session?
				</AccordionTrigger>
				<AccordionContent className="text-lg">
					Booking a session with me is easy! Just head over to the
					&apos;Contact&apos; page, fill out your details, and let me know
					what type of photography session you&apos;re interested in.
					I&apos;ll get back to you within 24 hours to discuss the details
					and set a date!
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item 2" className="border-my-dark-blue">
				<AccordionTrigger className="font-semibold">
					What are your rates?
				</AccordionTrigger>
				<AccordionContent className="text-lg">
					My rates vary depending on the type and length of the photography
					session. For a detailed price list, please send me a message via
					the &apos;Contact&apos; page. I offer packages tailored to
					various needs and budgets, ensuring you get the best value for
					stunning, high-quality photos.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item 3" className="border-my-dark-blue">
				<AccordionTrigger className="font-semibold">
					Do you travel for weddings?
				</AccordionTrigger>
				<AccordionContent className="text-lg">
					Absolutely! I love capturing love stories in new and exciting
					locations. Travel fees may apply for venues outside a certain
					radius from my base location. For more specific information about
					travel rates, please contact me directly.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item 4" className="border-my-dark-blue">
				<AccordionTrigger className="font-semibold">
					How long until I receive my photos?
				</AccordionTrigger>
				<AccordionContent className="text-lg">
					I understand how eager you must be to see your photos! My usual
					turnaround time for delivering the final edited images is about
					4-6 weeks after your event. I take great care in editing each
					photo to perfection, ensuring you receive the best quality.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item 5" className="border-my-dark-blue">
				<AccordionTrigger className="font-semibold">
					Can I order prints?
				</AccordionTrigger>
				<AccordionContent className="text-lg">
					Yes, you can! Along with your digital gallery, I offer a variety
					of high-quality print options. From traditional photo prints to
					canvas and framed art, you can choose the perfect way to display
					your memories. Information on print options and pricing will be
					available with your final gallery.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export default FaqAccordion;
