
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-grow pt-24">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About AuthorityX</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to empower professionals to build authentic personal brands that resonate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="mb-4 text-muted-foreground">
                AuthorityX was founded in 2023 by a team of personal branding experts and AI engineers 
                who recognized a gap in the market for authentic, AI-powered personal branding tools.
              </p>
              <p className="mb-4 text-muted-foreground">
                We believe that building a personal brand shouldn't be overwhelming or time-consuming. 
                With the right tools and guidance, anyone can establish a meaningful online presence 
                that opens doors to new opportunities.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-brand-purple/20 text-brand-purple p-2 rounded-full mr-3">1</span>
                  <div>
                    <h4 className="font-semibold">Authenticity</h4>
                    <p className="text-muted-foreground">We believe your personal brand should reflect your true self.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-purple/20 text-brand-purple p-2 rounded-full mr-3">2</span>
                  <div>
                    <h4 className="font-semibold">Innovation</h4>
                    <p className="text-muted-foreground">We constantly push the boundaries of AI to deliver better results.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-purple/20 text-brand-purple p-2 rounded-full mr-3">3</span>
                  <div>
                    <h4 className="font-semibold">Empowerment</h4>
                    <p className="text-muted-foreground">We equip professionals with tools to take control of their personal brand.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">Join The AuthorityX Community</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ready to transform your personal brand and connect with like-minded professionals?
            </p>
            <Link to="/sign-up">
              <Button className="bg-brand-purple hover:bg-brand-dark-purple text-white px-8 py-6 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
