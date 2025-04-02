
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Calendar, PenTool, Share2, Zap, Award, TrendingUp, Shield } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-deeper-purple/50 to-background/0 h-32"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-brand-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 section-title inline-block pb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build and grow your personal brand, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<BarChart3 className="h-8 w-8 text-brand-purple" />}
            title="Brand Analyzer"
            description="Discover your brand archetype and find your authentic voice."
            delay={100}
          />

          <FeatureCard 
            icon={<PenTool className="h-8 w-8 text-brand-purple" />}
            title="Content Strategy"
            description="Get a personalized 30-day content roadmap to maximize engagement."
            delay={200}
          />

          <FeatureCard 
            icon={<Calendar className="h-8 w-8 text-brand-purple" />}
            title="Content Calendar"
            description="Schedule and manage your content across all platforms."
            delay={300}
          />

          <FeatureCard 
            icon={<Share2 className="h-8 w-8 text-brand-purple" />}
            title="Post & Share"
            description="Publish your content directly to multiple social platforms."
            delay={400}
          />
          
          <FeatureCard 
            icon={<Zap className="h-8 w-8 text-brand-purple" />}
            title="AI Writer"
            description="Generate high-quality content tailored to your brand voice."
            delay={100}
          />
          
          <FeatureCard 
            icon={<TrendingUp className="h-8 w-8 text-brand-purple" />}
            title="Analytics"
            description="Track performance metrics and optimize your content strategy."
            delay={200}
          />
          
          <FeatureCard 
            icon={<Award className="h-8 w-8 text-brand-purple" />}
            title="Brand Reputation"
            description="Monitor and improve your online presence and reputation."
            delay={300}
          />
          
          <FeatureCard 
            icon={<Shield className="h-8 w-8 text-brand-purple" />}
            title="Brand Protection"
            description="Tools to protect your brand identity and intellectual property."
            delay={400}
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
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <Card className="glassmorphism hover-scale animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
    <CardContent className="p-6 text-center">
      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-brand-purple/30 to-brand-purple/10 rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300 animate-pulse-glow">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default FeaturesSection;
