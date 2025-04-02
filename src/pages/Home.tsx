
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, Calendar, PenTool, Share2, 
  CheckCircle, ChevronRight, Star
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Newsletter from "@/components/Newsletter";

const Home = () => {
  // Function to scroll to a section smoothly
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-brand-deeper-purple text-white pt-20 pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl font-bold">
                  Elevate Your <span className="text-brand-purple">Personal Brand</span> with AI
                </h1>
                <p className="text-xl opacity-80">
                  AuthorityX is the all-in-one solution that helps professionals automate and optimize their personal branding content strategy.
                </p>
                <div className="space-x-4 pt-4">
                  <Link to="/sign-up">
                    <Button className="bg-brand-purple hover:bg-brand-dark-purple text-white px-8 py-6 text-lg">
                      Get Started Free
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg"
                    onClick={() => scrollToSection("features")}
                  >
                    View Features
                  </Button>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-brand-purple/80 border-2 border-brand-deeper-purple"></div>
                    ))}
                  </div>
                  <p className="text-sm">
                    <span className="font-bold">1,000+</span> professionals growing their brand with AuthorityX
                  </p>
                </div>
              </div>
              <div className="relative bg-card/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-full">
                  <img 
                    src="/placeholder.svg" 
                    alt="Brand Analytics Dashboard" 
                    className="w-full h-full object-cover rounded-lg p-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
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
              <Card className="bg-card/70 backdrop-blur-md border-border hover:border-brand-purple/50 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-brand-purple/20 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Brand Analyzer</h3>
                  <p className="text-muted-foreground">
                    Discover your brand archetype and find your authentic voice.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/70 backdrop-blur-md border-border hover:border-brand-purple/50 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-brand-purple/20 rounded-full flex items-center justify-center mb-4">
                    <PenTool className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Content Strategy</h3>
                  <p className="text-muted-foreground">
                    Get a personalized 30-day content roadmap to maximize engagement.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/70 backdrop-blur-md border-border hover:border-brand-purple/50 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-brand-purple/20 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Content Calendar</h3>
                  <p className="text-muted-foreground">
                    Schedule and manage your content across all platforms.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/70 backdrop-blur-md border-border hover:border-brand-purple/50 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-brand-purple/20 rounded-full flex items-center justify-center mb-4">
                    <Share2 className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Post & Share</h3>
                  <p className="text-muted-foreground">
                    Publish your content directly to multiple social platforms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
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
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((item) => (
                    <Card key={item} className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-brand-purple text-brand-purple" />
                          ))}
                        </div>
                        <p className="mb-4">
                          "AuthorityX has transformed how I approach my personal brand. The content strategy module alone has saved me hours of planning time every week."
                        </p>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-brand-purple/80 mr-3"></div>
                          <div>
                            <h4 className="font-semibold">Sarah Johnson</h4>
                            <p className="text-sm text-muted-foreground">Tech Startup Founder</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tab2">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((item) => (
                    <Card key={item} className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-brand-purple text-brand-purple" />
                          ))}
                        </div>
                        <p className="mb-4">
                          "The Brand Analyzer gave me clarity about my unique positioning. I've seen a 45% increase in client inquiries since implementing the strategy."
                        </p>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-brand-purple/80 mr-3"></div>
                          <div>
                            <h4 className="font-semibold">Michael Chen</h4>
                            <p className="text-sm text-muted-foreground">Marketing Consultant</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tab3">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((item) => (
                    <Card key={item} className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-brand-purple text-brand-purple" />
                          ))}
                        </div>
                        <p className="mb-4">
                          "As a content creator, consistency is everything. AuthorityX's calendar and AI writer have doubled my output while maintaining my authentic voice."
                        </p>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-brand-purple/80 mr-3"></div>
                          <div>
                            <h4 className="font-semibold">Emily Rodriguez</h4>
                            <p className="text-sm text-muted-foreground">Content Creator</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Pricing Section */}
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
              <Card className="bg-card/70 backdrop-blur-md border-border hover:border-brand-purple/50 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 pt-8">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold">Free</h3>
                    <div className="mt-4 mb-6">
                      <span className="text-4xl font-bold">$0</span>
                      <span className="text-muted-foreground ml-2">/ month</span>
                    </div>
                    <p className="text-muted-foreground mb-6">Perfect for beginners starting their personal brand journey.</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Basic Brand Analyzer</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>5 AI-generated posts per month</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Content Calendar (basic)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Single platform publishing</span>
                    </li>
                  </ul>
                  <Link to="/sign-up">
                    <Button variant="outline" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Creator Plan */}
              <Card className="bg-card/70 backdrop-blur-md border-brand-purple shadow-lg shadow-brand-purple/20 relative transform hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <CardContent className="p-6 pt-8">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold">Creator</h3>
                    <div className="mt-4 mb-6">
                      <span className="text-4xl font-bold">$29</span>
                      <span className="text-muted-foreground ml-2">/ month</span>
                    </div>
                    <p className="text-muted-foreground mb-6">For content creators serious about growing their brand.</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Advanced Brand Analyzer</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>50 AI-generated posts per month</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Content Calendar with scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Multi-platform publishing (3 accounts)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Content Strategy Recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Basic Analytics Dashboard</span>
                    </li>
                  </ul>
                  <Link to="/sign-up">
                    <Button className="w-full bg-brand-purple hover:bg-brand-dark-purple">
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="bg-card/70 backdrop-blur-md border-border hover:border-brand-purple/50 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 pt-8">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold">Pro</h3>
                    <div className="mt-4 mb-6">
                      <span className="text-4xl font-bold">$79</span>
                      <span className="text-muted-foreground ml-2">/ month</span>
                    </div>
                    <p className="text-muted-foreground mb-6">For professionals who need the full branding solution.</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Everything in Creator plan, plus:</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Unlimited AI-generated posts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Advanced Content Calendar with teams</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Unlimited platform connections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Advanced Analytics & Reporting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>API Access & Custom Integrations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dedicated Account Manager</span>
                    </li>
                  </ul>
                  <Link to="/sign-up">
                    <Button variant="outline" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />

        {/* CTA Section */}
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
      </div>
      <Footer />
    </>
  );
};

export default Home;
