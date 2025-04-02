
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "./BookingModal";
import VideoModal from "./VideoModal";

const HeroSection = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative mt-16 pt-16 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-blue-600 text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-blue-700"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-900/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="animate-fade-in space-y-10">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-4">
                <span className="text-blue-100">AI-Powered Personal Brand Platform</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight md:leading-none">
                Build an Authentic <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Personal Brand</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-blue-50 leading-relaxed">
              The all-in-one toolkit that helps professionals automate and optimize their personal branding strategy with AI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setBookingModalOpen(true)}
              size="lg" 
              className="text-blue-600 bg-white hover:bg-blue-50 px-8 py-6 text-lg font-semibold"
            >
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg font-semibold backdrop-blur-sm"
              onClick={() => setVideoModalOpen(true)}
            >
              Watch Demo
            </Button>
          </div>

          <div className="pt-10">
            <p className="text-blue-100 mb-4">Trusted by professionals from</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {["Google", "Microsoft", "Adobe", "LinkedIn", "Twitter"].map((company) => (
                <div key={company} className="text-blue-100/80 text-xl font-semibold">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
      
      {/* Video Modal */}
      <VideoModal 
        open={videoModalOpen} 
        onOpenChange={setVideoModalOpen} 
        videoTitle="AuthorityX Demo"
        videoDescription="See how AuthorityX transforms your personal brand with AI-powered tools."
      />
    </section>
  );
};

export default HeroSection;
