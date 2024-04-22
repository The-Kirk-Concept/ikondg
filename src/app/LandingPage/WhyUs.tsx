import Image from "next/image";

const WhyUs = () => {
	return (
		<div className="bg-primary text-white text-center py-32 px-4 flex flex-col items-center gap-2 relative overflow-hidden">
			<div className="animate__animated animate__fadeInDown z-20 text-center max-w-[100vw] md:max-w-[70vw]">
				<h2>Why Choose The IKON Design Group?</h2>
				<Image
					src="/sonya_headshot.png"
					alt="Vintage interior decoration with chandelier and wall plants"
					width={300}
					height={300}
					className="mb-6 inline"
				/>
				<p>
					Choosing IKON means partnering with a team that has a finger on the
					pulse of design innovation. We navigate the vast landscape of design
					options to curate interiors that stand the test of time both in
					functionality and style. Our expertise prevents costly errors and
					ensures every design choice is not only aesthetically pleasing but
					also a sound investment in the long term.
				</p>
				<h3>Experience the IKON Difference</h3>
				<p>
					{`With IKON Design Group, you're invited to reimagine your space. Here,
				design is an immersive experience, tailored to reflect your personal
				story and lifestyle. Partner with us and transform your environment into
				a canvas for life's greatest moments, all with the signature distinction
				that only IKON can provide.`}
				</p>
			</div>
			<Image
				src="/squares.png"
				alt=""
				width={300}
				height={300}
				className="absolute -top-64 md:-top-32 -right-4 md:right-16 z-10 opacity-50"
			/>
			<Image
				src="/squares.png"
				alt=""
				width={300}
				height={300}
				className="absolute -bottom-64 md:-bottom-32 -left-8 md:left-16 rotate-180 z-10 opacity-50"
			/>
		</div>
	);
};

export default WhyUs;
