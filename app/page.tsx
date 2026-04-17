import { AboutTeaser } from "@/components/about-teaser";
import { BusinessGrid } from "@/components/business-grid";
import { ContactCtaBand } from "@/components/contact-cta-band";
import { HeroCarousel } from "@/components/hero-carousel";
import { IntroBand } from "@/components/intro-band";
import { WhyUs } from "@/components/why-us";

const metadata = {
  title: "Giuseppe Sogno Group",
  description:
	"Enterprise operations across the Indonesia-Nigeria trade corridor, spanning bulk supply, freight coordination, and local business setup.",
};

export { metadata };

export default function Home() {
	return (
		<>
			<HeroCarousel />
			<IntroBand />
			<BusinessGrid />
			<WhyUs />
			<AboutTeaser />
			<ContactCtaBand />
		</>
	);
}
