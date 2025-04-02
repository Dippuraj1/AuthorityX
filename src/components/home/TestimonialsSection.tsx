
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-card/30 backdrop-blur-md px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Loved by Professionals</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how AuthorityX has helped these professionals grow their personal brand.
          </p>
        </div>

        <Tabs defaultValue="tab1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="tab1">Entrepreneurs</TabsTrigger>
            <TabsTrigger value="tab2">Consultants</TabsTrigger>
            <TabsTrigger value="tab3">Creators</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <TestimonialGrid 
              testimonials={[
                {
                  text: "AuthorityX has transformed how I approach my personal brand. The content strategy module alone has saved me hours of planning time every week.",
                  name: "Sarah Johnson",
                  title: "Tech Startup Founder"
                },
                {
                  text: "AuthorityX has transformed how I approach my personal brand. The content strategy module alone has saved me hours of planning time every week.",
                  name: "Sarah Johnson",
                  title: "Tech Startup Founder"
                },
                {
                  text: "AuthorityX has transformed how I approach my personal brand. The content strategy module alone has saved me hours of planning time every week.",
                  name: "Sarah Johnson",
                  title: "Tech Startup Founder"
                }
              ]} 
            />
          </TabsContent>
          <TabsContent value="tab2">
            <TestimonialGrid 
              testimonials={[
                {
                  text: "The Brand Analyzer gave me clarity about my unique positioning. I've seen a 45% increase in client inquiries since implementing the strategy.",
                  name: "Michael Chen",
                  title: "Marketing Consultant"
                },
                {
                  text: "The Brand Analyzer gave me clarity about my unique positioning. I've seen a 45% increase in client inquiries since implementing the strategy.",
                  name: "Michael Chen",
                  title: "Marketing Consultant"
                },
                {
                  text: "The Brand Analyzer gave me clarity about my unique positioning. I've seen a 45% increase in client inquiries since implementing the strategy.",
                  name: "Michael Chen",
                  title: "Marketing Consultant"
                }
              ]} 
            />
          </TabsContent>
          <TabsContent value="tab3">
            <TestimonialGrid 
              testimonials={[
                {
                  text: "As a content creator, consistency is everything. AuthorityX's calendar and AI writer have doubled my output while maintaining my authentic voice.",
                  name: "Emily Rodriguez",
                  title: "Content Creator"
                },
                {
                  text: "As a content creator, consistency is everything. AuthorityX's calendar and AI writer have doubled my output while maintaining my authentic voice.",
                  name: "Emily Rodriguez",
                  title: "Content Creator"
                },
                {
                  text: "As a content creator, consistency is everything. AuthorityX's calendar and AI writer have doubled my output while maintaining my authentic voice.",
                  name: "Emily Rodriguez",
                  title: "Content Creator"
                }
              ]} 
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

// Testimonial interfaces and components
interface TestimonialProps {
  text: string;
  name: string;
  title: string;
}

interface TestimonialGridProps {
  testimonials: TestimonialProps[];
}

const TestimonialGrid = ({ testimonials }: TestimonialGridProps) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {testimonials.map((item, index) => (
      <TestimonialCard key={index} {...item} />
    ))}
  </div>
);

const TestimonialCard = ({ text, name, title }: TestimonialProps) => (
  <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
    <CardContent className="p-6">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-brand-purple text-brand-purple" />
        ))}
      </div>
      <p className="mb-4">{text}</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-brand-purple/80 mr-3"></div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default TestimonialsSection;
