"use client";

import Image from "next/image";
import Container from "./Container";
import Navigation from "./Navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const position = window.scrollY;
			if (position > 200) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header
			className={twMerge(
				"fixed top-0 z-50 w-full transition-colors hover:bg-primary/90",
				isScrolled && "bg-primary/40"
			)}
		>
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
