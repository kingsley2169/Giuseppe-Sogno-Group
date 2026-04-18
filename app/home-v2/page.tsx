import { AboutTeaserAsymmetric } from "@/components/about-teaser-asymmetric";
import { BusinessLedger } from "@/components/business-ledger";
import { ContactCtaMinimal } from "@/components/contact-cta-minimal";
import { HeroSplit } from "@/components/hero-split";
import { ManifestoStrip } from "@/components/manifesto-strip";
import { StatsBand } from "@/components/stats-band";

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

            
        </>
    );
}
