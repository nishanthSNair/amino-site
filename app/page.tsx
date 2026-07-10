import { AnnouncementBar } from "@/components/announcement-bar";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { HowItWorks } from "@/components/how-it-works";
import { Protocols } from "@/components/protocols";
import { BigNumbers } from "@/components/big-numbers";
import { Products } from "@/components/products";
import { Science } from "@/components/science";
import { VideoStories } from "@/components/video-stories";
import { Testimonials } from "@/components/testimonials";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Nav />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <Protocols />
      <BigNumbers />
      <Products />
      <Science />
      <VideoStories />
      <Testimonials />
      <Cta />
      <Footer />
    </main>
  );
}
