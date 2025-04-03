
import { useState } from "react";
import { ArrowRight, Circle, Square, Triangle, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "./BookingModal";
import VideoModal from "./VideoModal";
const HeroSection = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  return <section className="relative mt-0 pt-16 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-purple-50 text-purple-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 to-purple-100"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl"></div>

        {/* Semi-transparent geometric icons with microanimations */}
        <Circle className="absolute text-purple-400/20 animate-float" style={{
        top: '15%',
        left: '10%',
        transform: 'rotate(0deg) scale(0.9)',
        animationDuration: '8s',
        animationDelay: '0.5s'
      }} size={36} />
        
        <Square className="absolute text-purple-500/25 animate-float" style={{
        top: '65%',
        left: '20%',
        transform: 'rotate(15deg) scale(0.7)',
        animationDuration: '10s',
        animationDelay: '1s'
      }} size={28} />
        
        <Triangle className="absolute text-purple-400/20 animate-float" style={{
        top: '25%',
        right: '15%',
        transform: 'rotate(-10deg) scale(0.8)',
        animationDuration: '9s',
        animationDelay: '0s'
      }} size={32} />
        
        <Hexagon className="absolute text-purple-600/30 animate-float" style={{
        bottom: '20%',
        right: '10%',
        transform: 'rotate(5deg) scale(1)',
        animationDuration: '7s',
        animationDelay: '1.5s'
      }} size={40} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="animate-fade-in space-y-10">
          <div className="space-y-8">
            <div>
              {/* Removed the "AI-Powered Personal Brand Platform" text but kept the space */}
              <div className="mb-4 h-8"></div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight md:leading-none">
                Build an Authentic <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-900">Personal Brand</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-purple-800 leading-relaxed">
              The all-in-one toolkit that helps professionals automate and optimize their personal branding strategy with AI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => setBookingModalOpen(true)} size="lg" className="text-white bg-purple-600 hover:bg-purple-700 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all duration-300 rounded-lg rounded-xl">
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => setVideoModalOpen(true)} className="border-purple-400 text-purple-800 hover:text-white px-8 py-6 text-lg font-semibold backdrop-blur-sm shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all duration-300 bg-purple-100 hover:bg-purple-700 rounded-lg rounded-xl">
              <span className="text-purple-800 hover:text-white">Watch Demo</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
      
      {/* Video Modal */}
      <VideoModal open={videoModalOpen} onOpenChange={setVideoModalOpen} videoTitle="AuthorityX Demo" videoDescription="See how AuthorityX transforms your personal brand with AI-powered tools." />
    </section>;
};
export default HeroSection;
