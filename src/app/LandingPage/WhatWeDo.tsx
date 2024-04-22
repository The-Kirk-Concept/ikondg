import HStack from "@/components/HStack";

const WhatWeDo = () => {
	return (
		<section className="bg-white text-primary">
			<HStack orientation="ltr" image="bg-what_we_do_hero">
				<h2>What we do</h2>
				<p>
					{`We believe in going the extra mile for our clients. We know every
					client's needs are unique. Our designers keep these needs in mind when
					creating your Design Project.. IKON Design Group is an innovative and
					resourceful design team that provides contemporary and sophisticated
					interiors.`}
				</p>
				<p className="mb-0">
					Our work does not stop there. IKON Design Group will either set up or
					work with a contractor to make sure that everything is in its proper
					place. We have the know-how to incorporate furnishings, lighting, and
					custom pieces to make for a cohesive and functional environment.
				</p>
			</HStack>
			<HStack orientation="rtl" image="bg-crafting_contemorary_hero">
				<h2>Crafting Contemporary Sophistication</h2>
				<p>
					{`At IKON Design Group, we're dedicated to crafting contemporary
					sophistication that goes beyond aesthetics, ensuring the utmost
					comfort and enjoyment for our discerning clientele. Our meticulous
					selection process allows us to tailor each Design Project to reflect
					your individuality and lifestyle.`}
				</p>
				<p>
					{`From opulent living spaces to functional family environments, we
					create visually stunning yet truly livable spaces. Our innovative team
					collaborates closely with you to bring your vision to life, infusing
					sophistication and refinement into every project. Whether it's bespoke
					furnishings, curated lighting, or custom pieces, we exceed
					expectations with cohesive and functional environments.`}
				</p>
				<p>
					With our comprehensive services and commitment to excellence, every
					detail is executed with precision and care. Experience luxury living
					where your satisfaction is our priority at IKON Design Group.
				</p>
			</HStack>
			<HStack orientation="ltr" image="bg-vision_hero">
				<h2>The Vision Behind IKON</h2>
				<p>
					At IKON, we pride ourselves on offering more than just interior design
					services—we provide an unparalleled experience curated by our esteemed
					Chief Designer, Sony Coleman, and her exceptional team. With a unique
					approach that combines expertise with warmth, we deliver a service
					that sets us apart in the industry.
				</p>
				<p>
					Our comprehensive suite of services caters to both residential and
					light commercial projects, guiding clients from the initial concept to
					the final touches of completion. With meticulous attention to detail
					and a commitment to precision, we offer:
				</p>
				<ul className="list-disc pl-8 leading-8 mb-4">
					<li>Project Management and Seamless Coordination with Contractors</li>
					<li>Curated Selection of Furniture and Accessories</li>
					<li>Custom Furniture Design and Fabrication</li>
					<li>Expertise in Window Treatments</li>
					<li>Tailored Bedding Solutions for Ultimate Comfort</li>
					<li>Consultation on Color and Material Selection</li>
					<li>Coordination of Delivery and Installation</li>
					<li>Detailed Budgeting and Financial Planning</li>
				</ul>
				<p>
					{`At IKON Design Group, we don't just design spaces; we craft
					experiences that reflect the vision and lifestyle of our clients,
					ensuring every detail is handled with care and expertise. Welcome to a
					world where luxury meets comfort and sophistication meets exceptional
					service.`}
				</p>
			</HStack>
		</section>
	);
};

export default WhatWeDo;
