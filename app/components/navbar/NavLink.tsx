import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
	label: string;
	path: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, path }) => {
	const currentPath = usePathname();

	return (
		<Link
			href={path}
			className={`${
				currentPath === path ? "font-semibold" : ""
			} hover:bg-black/5 py-8 px-8 transition-colors duration-500`}
		>
			{label}
		</Link>
	);
};

export default NavLink;
