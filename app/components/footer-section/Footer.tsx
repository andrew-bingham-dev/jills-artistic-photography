import Spacer from "../Spacer";
import Section from "../section/Section";
import Logo from "../logo/Logo";
import SocialIcons from "../social-icons/SocialIcons";

const Footer: React.FC = () => {
	return (
		<Section name="Footer" bgColor="my-dark-blue">
			<Spacer size="x-large" />
			<div className="flex justify-between text-my-light-beige">
				<Logo type="light" />
				<ul className="flex gap-8 ">
					<li>Home</li>
					<li>Portfolio</li>
					<li>About Me</li>
					<li>Blog</li>
				</ul>
				<SocialIcons />
			</div>
			<Spacer size="large" />
			<hr />
			<Spacer size="large" />
			<div className="text-my-light-beige flex justify-between">
				<a href="#">
					© 2023 Jill&apos;s Artistic Photography. All Rights Reserved.
				</a>
				<a href="#">Website by Koder</a>
			</div>

			<Spacer size="x-large" />
		</Section>
	);
};

export default Footer;
