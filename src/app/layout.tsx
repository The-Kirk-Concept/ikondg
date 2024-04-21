import type { Metadata } from "next";
import { Abril_Fatface, Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
	weight: ["300", "700"],
	variable: "--font-lato",
	subsets: ["latin"],
	display: "swap",
});
const abril = Abril_Fatface({
	weight: "400",
	variable: "--font-abril",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "IKON Design Group",
	description:
		"Innovation that produces contemporary and sophisticated interiors.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${lato.className} ${abril.className} scroll-smooth bg-primary`}
		>
			<body>{children}</body>
		</html>
	);
}
