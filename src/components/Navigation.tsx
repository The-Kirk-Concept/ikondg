import Link from "next/link";

const Navigation = () => {
	const navlinks = [
		{
			href: "#connect",
			label: "Contact",
		},
	];
	return (
		<nav className="flex gap-8">
			{navlinks.map((nav) => {
				return (
					<Link
						key="href"
						href={nav.href}
						className="text-blue font-bold uppercase text-sm tracking-widest mb-0"
					>
						{nav.label}
					</Link>
				);
			})}
		</nav>
	);
};

export default Navigation;
