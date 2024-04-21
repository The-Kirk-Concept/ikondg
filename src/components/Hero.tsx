import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type HeroProps = {
	children: ReactNode;
	className?: string;
};

const Hero = ({ children, className }: HeroProps) => {
	return (
		<div
			className={twMerge(
				`min-h-[80vh] flex flex-col justify-center items-center p-8 md:p-12 relative bg-cover bg-no-repeat uppercase`,
				className
			)}
		>
			{children}
		</div>
	);
};

export default Hero;
