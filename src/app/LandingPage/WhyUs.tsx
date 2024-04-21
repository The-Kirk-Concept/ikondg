import Image from "next/image";

const WhyUs = () => {
	return (
		<div className="bg-primary text-white text-center py-32 px-96 flex flex-col items-center gap-2 relative">
			<h2>Why Choose IKON Design Group?</h2>
			<Image
				src="/why_choose_hero.png"
				alt="Vintage interior decoration with chandelier and wall plants"
				width={400}
				height={300}
				className="mb-6"
			/>
			<p>
				Choosing IKON means partnering with a team that has a finger on the
				pulse of design innovation. We navigate the vast landscape of design
				options to curate interiors that stand the test of time both in
				functionality and style. Our expertise prevents costly errors and
				ensures every design choice is not only aesthetically pleasing but also
				a sound investment in the long term.
			</p>
			<h3>Experience the IKON Difference</h3>
			<p>
				{`With IKON Design Group, you're invited to reimagine your space. Here,
				design is an immersive experience, tailored to reflect your personal
				story and lifestyle. Partner with us and transform your environment into
				a canvas for life's greatest moments, all with the signature distinction
				that only IKON can provide.`}
			</p>
			<Image
				src="/squares.png"
				alt=""
				width={300}
				height={300}
				className="absolute -top-32 right-16"
			/>
			<Image
				src="/squares.png"
				alt=""
				width={300}
				height={300}
				className="absolute -bottom-32 left-16 rotate-180"
			/>
		</div>
	);
};

export default WhyUs;
