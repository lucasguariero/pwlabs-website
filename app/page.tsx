import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { MockupsMarquee } from "@/components/MockupsMarquee";
import { Portfolio } from "@/components/Portfolio";
import { Timeline } from "@/components/Timeline";
import { DetailBlocks } from "@/components/DetailBlocks";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Blog } from "@/components/Blog";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <MockupsMarquee />
        {/* <Portfolio /> */}
        <Timeline />
        <DetailBlocks />
        <Testimonials />
        <Faq />
        <Blog />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
