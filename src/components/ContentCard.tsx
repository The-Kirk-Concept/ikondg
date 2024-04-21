import { ReactNode } from "react";
import { twJoin } from "tailwind-merge";

export type ContentCardProps = {
	children?: ReactNode;
	className?: string;
};

const ContentCard = ({ children, className }: ContentCardProps) => {
	return (
		<div
			className={twJoin("flex flex-col justify-center p-8 md:p-24", className)}
		>
			{children}
		</div>
	);
};

export default ContentCard;
