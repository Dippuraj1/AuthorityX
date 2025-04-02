
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Newsletter from "@/components/Newsletter";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingSection from "@/components/home/PricingSection";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Sectioned Components */}
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        
        {/* Newsletter Section */}
        <Newsletter />
        
        {/* CTA Section */}
        <CTASection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
