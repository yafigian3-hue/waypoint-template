import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import LogoCloud from "./sections/LogoCloud";
import Problem from "./sections/Problem";
import Solution from "./sections/Solution";
import HowItWorks from "./sections/HowItWorks";
import Preview from "./sections/Preview";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import FinalCta from "./sections/FinalCta";
import Footer from "./sections/Footer";

export default function WaypointLanding() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Problem />
      <Solution />
      <HowItWorks />
      <Preview />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCta />
      <Footer />
    </main>
  );
}
