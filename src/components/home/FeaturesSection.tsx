
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Calendar, PenTool, Share2 } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-deeper-purple to-background h-32"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build and grow your personal brand, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<BarChart3 className="h-8 w-8 text-brand-purple" />}
            title="Brand Analyzer"
            description="Discover your brand archetype and find your authentic voice."
          />

          <FeatureCard 
            icon={<PenTool className="h-8 w-8 text-brand-purple" />}
            title="Content Strategy"
            description="Get a personalized 30-day content roadmap to maximize engagement."
          />

          <FeatureCard 
            icon={<Calendar className="h-8 w-8 text-brand-purple" />}
            title="Content Calendar"
            description="Schedule and manage your content across all platforms."
          />

          <FeatureCard 
            icon={<Share2 className="h-8 w-8 text-brand-purple" />}
            title="Post & Share"
            description="Publish your content directly to multiple social platforms."
          />
        </div>
      </div>
    </section>
  );
};

// Feature Card component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="bg-card/70 backdrop-blur-md border-border hover:border-brand-purple/50 transition-all duration-300 transform hover:-translate-y-1">
    <CardContent className="p-6 text-center">
      <div className="mx-auto w-16 h-16 bg-brand-purple/20 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default FeaturesSection;
