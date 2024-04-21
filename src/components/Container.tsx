import { HTMLAttributes, PropsWithChildren } from "react";

const Container = ({
	children,
	...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
	return (
		<div className="container px-4" {...rest}>
			{children}
		</div>
	);
};

export default Container;
