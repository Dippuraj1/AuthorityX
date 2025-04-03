import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Shield } from "lucide-react";
const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  return <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gray-50 dark:bg-gray-900">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 section-title inline-block pb-4 text-purple-800">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for your personal branding journey.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="bg-card/30 p-1 rounded-full glassmorphism inline-flex shadow-lg">
              <button onClick={() => setIsAnnual(false)} className={`px-6 py-2 rounded-full transition-all duration-300 ${!isAnnual ? "bg-brand-purple text-white shadow-glow" : "text-gray-500"}`}>
                Monthly
              </button>
              <button onClick={() => setIsAnnual(true)} className={`px-6 py-2 rounded-full transition-all duration-300 ${isAnnual ? "bg-brand-purple text-white shadow-glow" : "text-gray-500"}`}>
                Annual <span className="text-xs font-normal ml-1">Save 20%</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <PricingCard tier="Free" price={isAnnual ? "$0" : "$0"} period={isAnnual ? "/year" : "/month"} description="Perfect for beginners starting their personal brand journey." features={["Basic Brand Analyzer", "5 AI-generated posts per month", "Content Calendar (basic)", "Single platform publishing"]} isPopular={false} delay={100} textColor="text-gray-700" />

          {/* Creator Plan */}
          <PricingCard tier="Creator" price={isAnnual ? "$290" : "$29"} period={isAnnual ? "/year" : "/month"} description="For content creators serious about growing their brand." features={["Advanced Brand Analyzer", "50 AI-generated posts per month", "Content Calendar with scheduling", "Multi-platform publishing (3 accounts)", "Content Strategy Recommendations", "Basic Analytics Dashboard"]} isPopular={true} delay={200} textColor="text-white" />

          {/* Pro Plan */}
          <PricingCard tier="Pro" price={isAnnual ? "$790" : "$79"} period={isAnnual ? "/year" : "/month"} description="For professionals who need the full branding solution." features={["Everything in Creator plan, plus:", "Unlimited AI-generated posts", "Advanced Content Calendar with teams", "Unlimited platform connections", "Advanced Analytics & Reporting", "API Access & Custom Integrations", "Dedicated Account Manager"]} isPopular={false} delay={300} textColor="text-gray-700" />
        </div>
      </div>
    </section>;
};

// Pricing Card Component
interface PricingCardProps {
  tier: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  delay: number;
  textColor: string;
}
const PricingCard = ({
  tier,
  price,
  period,
  description,
  features,
  isPopular,
  delay,
  textColor
}: PricingCardProps) => <Card className={`glassmorphism animate-fade-in-up ${isPopular ? "border-brand-purple shadow-glow relative transform hover:-translate-y-2 transition-all duration-500" : "hover:-translate-y-1 transition-all duration-300"}`} style={{
  animationDelay: `${delay}ms`
}}>
    {isPopular && <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-purple to-brand-light-purple text-white px-6 py-1.5 rounded-full text-sm font-medium shadow-glow">
        Most Popular
      </div>}
    <CardContent className="p-8 pt-10">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold">{tier}</h3>
        <div className="mt-4 mb-2 flex items-end justify-center">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-1">{period}</span>
        </div>
        <p className="text-muted-foreground mb-6 min-h-[48px]">{description}</p>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-brand-purple mr-3 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>)}
      </ul>
      
      <Link to="/sign-up" className="block">
        <Button variant={isPopular ? "default" : "outline"} className={`w-full group ${isPopular ? "bg-brand-purple hover:bg-brand-dark-purple button-glow py-6 shadow-lg hover:shadow-xl" : `border-brand-purple/50 hover:bg-brand-purple/20 py-6 shadow-lg hover:shadow-xl ${textColor}`}`}>
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
      
      {isPopular && <div className="flex items-center justify-center mt-4 text-xs text-muted-foreground">
          <Shield className="h-3 w-3 mr-1" />
          <span>30-day money-back guarantee</span>
        </div>}
    </CardContent>
  </Card>;
export default PricingSection;