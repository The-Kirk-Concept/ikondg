import { ReactNode } from "react";
import ContentCard from "./ContentCard";

export type HStackProps = {
	orientation?: "ltr" | "rtl";
	image?: string;
	children?: ReactNode;
};

const HStack = ({ orientation = "ltr", image, children }: HStackProps) => {
	return (
		<div className={`grid grid-cols-2 justify-center items-center`}>
			{image && (
				<ContentCard
					className={`h-full bg-cover  bg-no-repeat overflow-hidden ${image} ${
						orientation === "ltr" ? "order-first" : "order-last"
					}`}
				/>
			)}
			<ContentCard>{children}</ContentCard>
		</div>
	);
};

export default HStack;
