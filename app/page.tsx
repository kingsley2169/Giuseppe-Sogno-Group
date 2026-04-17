import { AboutTeaser } from "@/components/about-teaser";
import { AboutTeaserAsymmetric } from "@/components/about-teaser-asymmetric";
import { BusinessGrid } from "@/components/business-grid";
import { BusinessLedger } from "@/components/business-ledger";
import { ContactCtaBand } from "@/components/contact-cta-band";
import { ContactCtaMinimal } from "@/components/contact-cta-minimal";
import { HeroCarousel } from "@/components/hero-carousel";
import { HeroSplit } from "@/components/hero-split";
import { IntroBand } from "@/components/intro-band";
import { ManifestoStrip } from "@/components/manifesto-strip";
import { StatsBand } from "@/components/stats-band";
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
			<HeroSplit />
			<ManifestoStrip />
			<BusinessLedger />
			<StatsBand />
			<AboutTeaserAsymmetric />
			<ContactCtaMinimal />

			{/* version 1.0 */}
			{/* <HeroCarousel />
			<IntroBand />
			<BusinessGrid />
			<WhyUs />
			<AboutTeaser />
			<ContactCtaBand /> */}
		</>
	);
}
