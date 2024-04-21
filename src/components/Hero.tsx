import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type HeroProps = {
	children: ReactNode;
	bgImg?: string;
	className?: string;
};

const Hero = ({ children, bgImg, className }: HeroProps) => {
	console.log("bgImage", bgImg);
	return (
		<div
			className={twMerge(
				`min-h-[80vh] flex flex-col justify-center items-center p-12 relative`,
				bgImg && `bg-${bgImg} bg-cover bg-no-repeat`,
				className
			)}
		>
			{children}
		</div>
	);
};

export default Hero;
