
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for your personal branding journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <PricingCard
            tier="Free"
            price="$0"
            description="Perfect for beginners starting their personal brand journey."
            features={[
              "Basic Brand Analyzer",
              "5 AI-generated posts per month",
              "Content Calendar (basic)",
              "Single platform publishing"
            ]}
            isPopular={false}
          />

          {/* Creator Plan */}
          <PricingCard
            tier="Creator"
            price="$29"
            description="For content creators serious about growing their brand."
            features={[
              "Advanced Brand Analyzer",
              "50 AI-generated posts per month",
              "Content Calendar with scheduling",
              "Multi-platform publishing (3 accounts)",
              "Content Strategy Recommendations",
              "Basic Analytics Dashboard"
            ]}
            isPopular={true}
          />

          {/* Pro Plan */}
          <PricingCard
            tier="Pro"
            price="$79"
            description="For professionals who need the full branding solution."
            features={[
              "Everything in Creator plan, plus:",
              "Unlimited AI-generated posts",
              "Advanced Content Calendar with teams",
              "Unlimited platform connections",
              "Advanced Analytics & Reporting",
              "API Access & Custom Integrations",
              "Dedicated Account Manager"
            ]}
            isPopular={false}
          />
        </div>
      </div>
    </section>
  );
};

// Pricing Card Component
interface PricingCardProps {
  tier: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

const PricingCard = ({ tier, price, description, features, isPopular }: PricingCardProps) => (
  <Card 
    className={`bg-card/70 backdrop-blur-md ${
      isPopular 
        ? "border-brand-purple shadow-lg shadow-brand-purple/20 relative transform hover:-translate-y-1 transition-all duration-300" 
        : "border-border hover:border-brand-purple/50 transition-all duration-300 transform hover:-translate-y-1"
    }`}
  >
    {isPopular && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-medium">
        Most Popular
      </div>
    )}
    <CardContent className="p-6 pt-8">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold">{tier}</h3>
        <div className="mt-4 mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-2">/ month</span>
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/sign-up">
        <Button 
          variant={isPopular ? "default" : "outline"} 
          className={`w-full ${isPopular ? "bg-brand-purple hover:bg-brand-dark-purple" : ""}`}
        >
          Get Started
        </Button>
      </Link>
    </CardContent>
  </Card>
);

export default PricingSection;
