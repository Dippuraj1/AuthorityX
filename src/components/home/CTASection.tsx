
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Circle, Square, Triangle, Hexagon } from "lucide-react";
import BookingModal from "./BookingModal";

const CTASection = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-purple/10 via-background to-brand-purple/10 text-foreground relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>
        
        {/* Geometric shapes with animations */}
        <Circle 
          className="absolute text-brand-purple/30 animate-float" 
          style={{
            top: '10%',
            left: '5%',
            animation: 'float 8s ease-in-out infinite',
            transform: 'perspective(800px) rotateX(15deg) rotateY(15deg)',
            filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))'
          }}
          size={40}
        />
        
        <Square 
          className="absolute text-brand-purple/20" 
          style={{
            top: '60%',
            left: '15%',
            animation: 'float 10s ease-in-out infinite 1s',
            transform: 'perspective(800px) rotateX(25deg) rotateY(25deg)',
            filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))'
          }}
          size={30}
        />
        
        <Triangle 
          className="absolute text-brand-purple/25" 
          style={{
            top: '25%',
            right: '10%',
            animation: 'float 7s ease-in-out infinite 0.5s',
            transform: 'perspective(800px) rotateX(35deg) rotateY(35deg)',
            filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))'
          }}
          size={35}
        />
        
        <Hexagon 
          className="absolute text-brand-purple/15" 
          style={{
            bottom: '15%',
            right: '20%',
            animation: 'float 9s ease-in-out infinite 1.5s',
            transform: 'perspective(800px) rotateX(20deg) rotateY(20deg)',
            filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))'
          }}
          size={45}
        />
        
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
      
      <div className="max-w-5xl mx-auto text-center relative z-10 glassmorphism py-12 px-8 rounded-3xl animate-fade-in-up shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-purple/50 bg-brand-purple/10 text-sm mb-6">
          <Sparkles className="w-4 h-4 mr-2 text-brand-purple" />
          <span>Join thousands of satisfied professionals</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Grow Your Personal Brand?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Join thousands of professionals using AuthorityX to build their personal brand and grow their online presence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/sign-up">
            <Button className="bg-brand-purple hover:bg-brand-dark-purple text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 group button-glow shadow-lg hover:shadow-xl">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            className="border-brand-purple/30 text-foreground hover:bg-brand-purple/10 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setBookingModalOpen(true)}
          >
            Schedule Demo
          </Button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
    </section>
  );
};

export default CTASection;
