
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Calendar, PenTool, Share2, Zap, Award, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

// Define feature data with corresponding dashboard routes
const featureData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-brand-purple" />,
    title: "Brand Analyzer",
    description: "Discover your brand archetype and find your authentic voice.",
    route: "/dashboard/brand-analyzer"
  },
  {
    icon: <PenTool className="h-8 w-8 text-brand-purple" />,
    title: "Content Strategy",
    description: "Get a personalized 30-day content roadmap to maximize engagement.",
    route: "/dashboard/content-strategy"
  },
  {
    icon: <Calendar className="h-8 w-8 text-brand-purple" />,
    title: "Content Calendar",
    description: "Schedule and manage your content across all platforms.",
    route: "/dashboard/calendar"
  },
  {
    icon: <Share2 className="h-8 w-8 text-brand-purple" />,
    title: "Post & Share",
    description: "Publish your content directly to multiple social platforms.",
    route: "/dashboard/publish"
  },
  {
    icon: <Zap className="h-8 w-8 text-brand-purple" />,
    title: "AI Writer",
    description: "Generate high-quality content tailored to your brand voice.",
    route: "/dashboard/writer"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-brand-purple" />,
    title: "Analytics",
    description: "Track performance metrics and optimize your content strategy.",
    route: "/dashboard/analytics"
  },
  {
    icon: <Award className="h-8 w-8 text-brand-purple" />,
    title: "Brand Authority",
    description: "Build your online presence and reputation as a thought leader.",
    route: "/dashboard/authority"
  },
  {
    icon: <Shield className="h-8 w-8 text-brand-purple" />,
    title: "Brand Protection",
    description: "Tools to protect your brand identity and intellectual property.",
    route: "/dashboard/protection"
  }
];

const FeaturesSection = () => {
  const { user } = useAuth();
  
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-background to-muted/50">      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 section-title inline-block pb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build and grow your personal brand, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              route={feature.route}
              delay={100 * (index % 4)}
              isLoggedIn={!!user}
            />
          ))}
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
  route: string;
  delay: number;
  isLoggedIn: boolean;
}

const FeatureCard = ({ icon, title, description, route, delay, isLoggedIn }: FeatureCardProps) => {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (isLoggedIn) {
      return <Link to={route} className="block h-full">{children}</Link>;
    }
    return <>{children}</>;
  };

  return (
    <CardWrapper>
      <Card className="glassmorphism neon-glow-hover animate-fade-in-up h-full" style={{ animationDelay: `${delay}ms` }}>
        <CardContent className="p-6 text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-brand-purple/20 to-brand-purple/5 rounded-full flex items-center justify-center mb-4 transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          {isLoggedIn && (
            <div className="mt-4 text-brand-purple text-sm font-medium">
              Explore Feature →
            </div>
          )}
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default FeaturesSection;

