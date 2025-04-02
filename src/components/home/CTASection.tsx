
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-deeper-purple text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Personal Brand?</h2>
        <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
          Join thousands of professionals using AuthorityX to build their personal brand and grow their online presence.
        </p>
        <Link to="/sign-up">
          <Button className="bg-brand-purple hover:bg-brand-dark-purple text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
            Get Started Free <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
