import Container from "@/components/Container";
import { LANDINGPAGE } from "./LandingPage.content";
import Hero from "@/components/Hero";

const MainHero = () => {
	return (
		<Container className="">
			<Hero className="bg-landing_hero">
				<div className="w-full md:w-1/2 text-center flex flex-col animate__animated animate__fadeInDown">
					<h1>{LANDINGPAGE.PAGE_TITLE}</h1>
					<p className="tracking-widest uppercase text-[18px]">
						{LANDINGPAGE.PAGE_SUBTITLE}
					</p>
				</div>
			</Hero>
		</Container>
	);
};

export default MainHero;
