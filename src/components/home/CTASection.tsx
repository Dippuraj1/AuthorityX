
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-deeper-purple via-background to-brand-deeper-purple text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl"></div>
        
        {/* Animated particles */}
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-brand-purple/20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 glassmorphism py-12 px-8 rounded-3xl animate-fade-in-up">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-purple/50 bg-brand-purple/10 text-sm mb-6">
          <Sparkles className="w-4 h-4 mr-2 text-brand-purple" />
          <span>Join thousands of satisfied professionals</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Grow Your Personal Brand?</h2>
        <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
          Join thousands of professionals using AuthorityX to build their personal brand and grow their online presence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/sign-up">
            <Button className="bg-brand-purple hover:bg-brand-dark-purple text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 group button-glow">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
          
          <Link to="/contact">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
              Schedule Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
