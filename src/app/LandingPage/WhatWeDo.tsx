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
			<HStack orientation="ltr" image="bg-vision_hero">
				<h2>The Vision Behind IKON</h2>
				<p>
					IKON Design Group offers a comprehensive suite of interior design
					services for residential and light commercial projects. From the
					genesis of a concept to the final flourish of completion, we handle
					every detail with precision and care. Our services encompass:
				</p>
				<ul className="list-disc pl-8 leading-8">
					<li>Project Management and Coordination with Contractors</li>
					<li>Furniture and Accessory Curation</li>
					<li>Custom Furniture Design and Fabrication</li>
					<li>Window Treatment Expertise</li>
					<li>Tailored Bedding Solutions</li>
					<li>Color Consultation and Material Selection</li>
					<li>Delivery and Installation Coordination</li>
					<li>Detailed Budgeting and Financial Planning</li>
				</ul>
			</HStack>
		</section>
	);
};

export default WhatWeDo;
