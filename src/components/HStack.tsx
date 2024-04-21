import { ReactNode } from "react";
import ContentCard from "./ContentCard";

export type HStackProps = {
	orientation?: "ltr" | "rtl";
	image?: string;
	children?: ReactNode;
};

const HStack = ({ orientation = "ltr", image, children }: HStackProps) => {
	return (
		<div
			className={`grid grid-cols-1 md:grid-cols-2 justify-center items-center`}
		>
			{image && (
				<ContentCard
					className={`h-96 md:h-full bg-cover bg-no-repeat overflow-hidden order-first ${image} ${
						orientation === "rtl" && "md:order-last"
					}`}
				/>
			)}
			<ContentCard className="animate__animated animate__fadeInDown">
				{children}
			</ContentCard>
		</div>
	);
};

export default HStack;
