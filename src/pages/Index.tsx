import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Navbar } from "@/components/Navbar";
import { CalendlyButton } from "@/components/CalendlyButton";
import { UniqueMechanism } from "@/components/UniqueMechanism";
import { WhyChooseUs } from "@/components/WhyChooseUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <UniqueMechanism />
      <WhyChooseUs />
      <Testimonials />
      <AboutUs />
      <FAQ />
      <CalendlyButton className="bg-gradient-to-r from-red-600 via-yellow-500 to-orange-500 hover:opacity-90 text-white px-8 py-6 text-lg rounded-md mx-auto block my-20" />
    </div>
  );
};

export default Index;