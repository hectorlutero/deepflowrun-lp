import { BiAgentTeaser } from "@/components/lp/bi-agent-teaser";
import { Audience } from "@/components/lp/audience";
import { ClosingCta } from "@/components/lp/closing-cta";
import { Differentiators } from "@/components/lp/differentiators";
import { Faq } from "@/components/lp/faq";
import { Footer } from "@/components/lp/footer";
import { Hero } from "@/components/lp/hero";
import { Method } from "@/components/lp/method";
import { Problem } from "@/components/lp/problem";
import { SocialProof } from "@/components/lp/social-proof";
import { TopNav } from "@/components/lp/top-nav";
import { Value } from "@/components/lp/value";
import { WaFloat } from "@/components/lp/wa-float";

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <Problem />
        <Method />
        <Value />
        <Audience />
        <SocialProof />
        <Differentiators />
        <BiAgentTeaser />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
      <WaFloat />
    </>
  );
}
