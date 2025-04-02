
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  // Function to scroll to a section smoothly
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-brand-deeper-purple text-white pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold">
              Elevate Your <span className="text-brand-purple">Personal Brand</span> with AI
            </h1>
            <p className="text-xl opacity-80">
              AuthorityX is the all-in-one solution that helps professionals automate and optimize their personal branding content strategy.
            </p>
            <div className="space-x-4 pt-4">
              <Link to="/sign-up">
                <Button className="bg-brand-purple hover:bg-brand-dark-purple text-white px-8 py-6 text-lg">
                  Get Started Free
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg"
                onClick={() => scrollToSection("features")}
              >
                View Features
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-brand-purple/80 border-2 border-brand-deeper-purple"></div>
                ))}
              </div>
              <p className="text-sm">
                <span className="font-bold">1,000+</span> professionals growing their brand with AuthorityX
              </p>
            </div>
          </div>
          <div className="relative bg-card/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="w-full">
              <img 
                src="/placeholder.svg" 
                alt="Brand Analytics Dashboard" 
                className="w-full h-full object-cover rounded-lg p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
