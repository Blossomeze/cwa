// import Benefits from "@/components/Benefits";
import Cta from "@/components/Cta";
import FaqSection from "@/components/Faq";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Curriculum from "@/components/Curriculum";
import Partnerships from "@/components/Partnerships";
import MissionVision from "@/components/Mission";



export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <MissionVision />
      <Gallery />
      <Curriculum />
      <Testimonials />
      <Partnerships />
      <FaqSection />
      <Cta />
    </div>
    );
}
