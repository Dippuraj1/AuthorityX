
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  // Function to scroll to a section smoothly
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-brand-blue text-white pt-20 pb-52 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/50 bg-white/10 text-sm mb-4">
              <Star className="w-4 h-4 mr-2 text-white" />
              <span>Rated #1 Personal Branding Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Elevate Your <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Personal Brand</span> with AI
            </h1>
            
            <p className="text-xl text-white">
              AuthorityX is the all-in-one solution that helps professionals automate and optimize their personal branding content strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/sign-up">
                <Button className="bg-white text-brand-blue hover:bg-white/90 px-8 py-6 text-lg w-full sm:w-auto button-glow transition-all duration-300 group">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto transition-all duration-300"
                onClick={() => scrollToSection("features")}
              >
                View Features
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 pt-4 opacity-90">
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-background" style={{
                    backgroundImage: `url(https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 5}.jpg)`,
                    backgroundSize: 'cover'
                  }}></div>
                ))}
              </div>
              <p className="text-sm">
                <span className="font-bold">1,000+</span> professionals growing their brand with AuthorityX
              </p>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up animate-delay-200">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/20 rounded-2xl blur-2xl -z-10 transform rotate-3"></div>
            <div className="glassmorphism p-4 transform hover:scale-[1.01] hover:shadow-glow transition-all duration-500 animate-float">
              <img 
                src="/placeholder.svg" 
                alt="Brand Analytics Dashboard" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
