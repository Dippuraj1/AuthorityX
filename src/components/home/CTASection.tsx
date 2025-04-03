import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Circle, Square, Triangle, Hexagon } from "lucide-react";
import BookingModal from "./BookingModal";
const CTASection = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  return <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-purple/10 via-background to-brand-purple/10 text-foreground relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>
        
        {/* Enhanced 3D geometric shapes with more pronounced animations */}
        <Circle className="absolute text-brand-purple/60 animate-float shadow-lg" style={{
        top: '10%',
        left: '5%',
        animation: 'float 8s ease-in-out infinite',
        transform: 'perspective(800px) rotateX(25deg) rotateY(20deg)',
        filter: 'drop-shadow(2px 4px 6px rgba(155,135,245,0.4))',
        transition: 'all 0.5s ease'
      }} size={50} />
        
        <Square className="absolute text-brand-purple/50 shadow-lg" style={{
        top: '60%',
        left: '15%',
        animation: 'float 10s ease-in-out infinite 1s',
        transform: 'perspective(800px) rotateX(30deg) rotateY(35deg)',
        filter: 'drop-shadow(3px 5px 8px rgba(155,135,245,0.3))',
        transition: 'all 0.5s ease'
      }} size={40} />
        
        <Triangle className="absolute text-brand-purple/55 shadow-lg" style={{
        top: '25%',
        right: '10%',
        animation: 'float 7s ease-in-out infinite 0.5s',
        transform: 'perspective(800px) rotateX(45deg) rotateY(40deg)',
        filter: 'drop-shadow(4px 6px 10px rgba(155,135,245,0.35))',
        transition: 'all 0.5s ease'
      }} size={45} />
        
        <Hexagon className="absolute text-brand-purple/45 shadow-lg" style={{
        bottom: '15%',
        right: '20%',
        animation: 'float 9s ease-in-out infinite 1.5s',
        transform: 'perspective(800px) rotateX(35deg) rotateY(25deg)',
        filter: 'drop-shadow(5px 8px 12px rgba(155,135,245,0.25))',
        transition: 'all 0.5s ease'
      }} size={55} />
        
        {/* Animated particles */}
        {[...Array(8)].map((_, i) => <div key={i} className="absolute rounded-full bg-brand-purple/30" style={{
        width: `${Math.random() * 12 + 6}px`,
        height: `${Math.random() * 12 + 6}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `float ${Math.random() * 10 + 10}s linear infinite`,
        filter: 'drop-shadow(0px 2px 4px rgba(155,135,245,0.2))'
      }}></div>)}
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 glassmorphism py-12 px-8 rounded-3xl animate-fade-in-up shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-purple/50 bg-brand-purple/10 text-sm mb-6">
          <Sparkles className="w-4 h-4 mr-2 text-brand-purple" />
          <span>Join thousands of satisfied professionals</span>
        </div>
        
        <h2 className="text-4xl font-bold mb-6 text-purple-800 md:text-5xl">Ready to Grow Your Personal Brand?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Join thousands of professionals using AuthorityX to build their personal brand and grow their online presence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/sign-up">
            <Button className="hover:bg-brand-dark-purple text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 group button-glow shadow-lg hover:shadow-xl bg-purple-800 hover:bg-purple-700">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
          
          <Button variant="outline" className="border-brand-purple/30 text-foreground hover:bg-brand-purple/10 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => setBookingModalOpen(true)}>
            Schedule Demo
          </Button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
    </section>;
};
export default CTASection;