import Image from "next/image";
import Container from "./Container";
import Navigation from "./Navigation";
import Link from "next/link";

const Header = () => {
	return (
		<header className="fixed top-0 z-10 w-full">
			<Container className="flex justify-between p-4 items-center">
				<Link href="/">
					<Image
						src="/ikon_logo.svg"
						alt="Ikon Design Group Logo"
						width={100}
						height={30}
					/>
				</Link>
				<Navigation />
			</Container>
		</header>
	);
};

export default Header;
