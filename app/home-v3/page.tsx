import { AboutTeaserBand } from "@/components/about-teaser-band";
import { ContactBandDark } from "@/components/contact-band-dark";
import { CorridorBand } from "@/components/corridor-band";
import { DivisionRows } from "@/components/division-rows";
import { HeroMosaic } from "@/components/hero-mosaic";
import { OperatingFacts } from "@/components/operating-facts";

const metadata = {
  title: "Giuseppe Sogno Group",
  description:
	"Enterprise operations across the Indonesia-Nigeria trade corridor, spanning bulk supply, freight coordination, and local business setup.",
};

export { metadata };

export default function Home() {
	return (
		<>
			<HeroMosaic />
            <CorridorBand />
            <OperatingFacts />
            <DivisionRows />
            <AboutTeaserBand />
            <ContactBandDark />
		</>
	);
}
