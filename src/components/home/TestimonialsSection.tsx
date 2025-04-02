
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-brand-deeper-purple/30 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-purple/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 section-title inline-block pb-4">
            Loved by Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how AuthorityX has helped these professionals grow their personal brand.
          </p>
        </div>

        <Tabs defaultValue="tab1" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center justify-between mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 glassmorphism p-1">
              <TabsTrigger 
                value="tab1" 
                className="data-[state=active]:bg-brand-purple/20 data-[state=active]:text-white transition-all duration-300"
              >
                Entrepreneurs
              </TabsTrigger>
              <TabsTrigger 
                value="tab2" 
                className="data-[state=active]:bg-brand-purple/20 data-[state=active]:text-white transition-all duration-300"
              >
                Consultants
              </TabsTrigger>
              <TabsTrigger 
                value="tab3" 
                className="data-[state=active]:bg-brand-purple/20 data-[state=active]:text-white transition-all duration-300"
              >
                Creators
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="tab1" className="animate-fade-in-up">
            <TestimonialGrid 
              testimonials={[
                {
                  text: "AuthorityX has transformed how I approach my personal brand. The content strategy module alone has saved me hours of planning time every week.",
                  name: "Sarah Johnson",
                  title: "Tech Startup Founder",
                  image: "https://randomuser.me/api/portraits/women/32.jpg"
                },
                {
                  text: "I've tried many branding platforms, but none come close to AuthorityX. The AI features genuinely understand my voice and help maintain consistency.",
                  name: "David Chen",
                  title: "E-commerce Entrepreneur",
                  image: "https://randomuser.me/api/portraits/men/42.jpg"
                },
                {
                  text: "Since using AuthorityX, my LinkedIn engagement has increased by 300%. The platform makes it easy to maintain a professional presence online.",
                  name: "Jessica Martinez",
                  title: "Fintech Founder",
                  image: "https://randomuser.me/api/portraits/women/44.jpg"
                }
              ]} 
            />
          </TabsContent>
          
          <TabsContent value="tab2" className="animate-fade-in-up">
            <TestimonialGrid 
              testimonials={[
                {
                  text: "The Brand Analyzer gave me clarity about my unique positioning. I've seen a 45% increase in client inquiries since implementing the strategy.",
                  name: "Michael Chen",
                  title: "Marketing Consultant",
                  image: "https://randomuser.me/api/portraits/men/32.jpg"
                },
                {
                  text: "As a consultant, my personal brand is everything. AuthorityX has helped me establish thought leadership in my industry with minimal effort.",
                  name: "Rebecca Taylor",
                  title: "Business Strategy Consultant",
                  image: "https://randomuser.me/api/portraits/women/29.jpg"
                },
                {
                  text: "The content calendar feature ensures I'm consistently visible to potential clients. AuthorityX has become an essential part of my business.",
                  name: "James Wilson",
                  title: "IT Consultant",
                  image: "https://randomuser.me/api/portraits/men/22.jpg"
                }
              ]} 
            />
          </TabsContent>
          
          <TabsContent value="tab3" className="animate-fade-in-up">
            <TestimonialGrid 
              testimonials={[
                {
                  text: "As a content creator, consistency is everything. AuthorityX's calendar and AI writer have doubled my output while maintaining my authentic voice.",
                  name: "Emily Rodriguez",
                  title: "Content Creator",
                  image: "https://randomuser.me/api/portraits/women/17.jpg"
                },
                {
                  text: "The cross-platform publishing tools save me hours each week. I can focus on creating quality content while AuthorityX handles distribution.",
                  name: "Ryan Park",
                  title: "YouTube Creator",
                  image: "https://randomuser.me/api/portraits/men/67.jpg"
                },
                {
                  text: "AuthorityX understood my unique creator voice and helped me develop a consistent brand identity across all my channels.",
                  name: "Aisha Johnson",
                  title: "Social Media Influencer",
                  image: "https://randomuser.me/api/portraits/women/63.jpg"
                }
              ]} 
            />
          </TabsContent>
        </Tabs>
        
        <div className="flex items-center justify-center mt-10 gap-4">
          <button 
            onClick={() => setActiveTab(prev => prev === "tab1" ? "tab3" : prev === "tab2" ? "tab1" : "tab2")}
            className="p-3 rounded-full glassmorphism hover:shadow-glow transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {["tab1", "tab2", "tab3"].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTab === tab ? "bg-brand-purple" : "bg-white/20"
                }`}
              />
            ))}
          </div>
          <button 
            onClick={() => setActiveTab(prev => prev === "tab1" ? "tab2" : prev === "tab2" ? "tab3" : "tab1")}
            className="p-3 rounded-full glassmorphism hover:shadow-glow transition-all duration-300"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Testimonial interfaces and components
interface TestimonialProps {
  text: string;
  name: string;
  title: string;
  image: string;
}

interface TestimonialGridProps {
  testimonials: TestimonialProps[];
}

const TestimonialGrid = ({ testimonials }: TestimonialGridProps) => (
  <div className="grid gap-6 md:grid-cols-3">
    {testimonials.map((item, index) => (
      <TestimonialCard key={index} {...item} index={index} />
    ))}
  </div>
);

const TestimonialCard = ({ text, name, title, image, index }: TestimonialProps & { index: number }) => (
  <Card className="glassmorphism overflow-hidden hover-scale" style={{ animationDelay: `${index * 100}ms` }}>
    <CardContent className="p-6 relative">
      <div className="absolute top-4 right-4 text-brand-purple/30">
        <Quote className="h-10 w-10 rotate-180" />
      </div>
    
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-brand-purple text-brand-purple" />
        ))}
      </div>
      <p className="mb-6 relative z-10">{text}</p>
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-brand-purple/30 mr-3">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default TestimonialsSection;
