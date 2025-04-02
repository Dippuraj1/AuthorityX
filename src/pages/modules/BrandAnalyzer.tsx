
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Brain, CheckCircle, Fingerprint, MessageCircle, PaintBucket } from "lucide-react";

const BrandAnalyzer = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const features = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Archetype Detection",
      description: "Answer our personality-based questionnaire to discover your brand archetype"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Tone of Voice Calibration",
      description: "Get precise tone recommendations based on your target audience analysis"
    },
    {
      icon: <Fingerprint className="h-5 w-5" />,
      title: "Competitive Voice Mapping",
      description: "Compare your brand voice against top competitors in your industry"
    },
    {
      icon: <PaintBucket className="h-5 w-5" />,
      title: "Brand Moodboard",
      description: "Auto-generate visual inspiration that matches your brand personality"
    }
  ];

  return (
    <DashboardLayout>
      <div className="container px-4 py-6 max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Brand Analyzer</h1>
          <p className="text-muted-foreground mt-2">Discover your brand archetype and authentic voice</p>
        </header>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="questionnaire">Questionnaire</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>What is Brand Analyzer?</CardTitle>
                <CardDescription>
                  Our AI-powered tool helps you discover your unique brand archetype and voice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
                  {features.map((feature, index) => (
                    <Card key={index} className="bg-background/50">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-primary/10 p-2 text-primary">
                            {feature.icon}
                          </div>
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-lg font-semibold mb-2">Your Outcome</h3>
                  <p className="text-muted-foreground mb-4">Complete the Brand Analyzer to receive:</p>
                  <ul className="space-y-2">
                    {["Brand archetype (Jungian)", "Brand tone profile", "Foundational brand messaging pillars"].map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => setActiveTab("questionnaire")} 
                  className="bg-brand-purple hover:bg-brand-dark-purple"
                >
                  Start Brand Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="questionnaire">
            <Card>
              <CardHeader>
                <CardTitle>Brand Personality Questionnaire</CardTitle>
                <CardDescription>
                  Answer these questions to help our AI identify your brand archetype and voice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    This section would contain the actual brand questionnaire with multiple-choice and scale questions.
                  </p>
                  <p className="italic text-sm">
                    (Questionnaire implementation would be added here as a separate component)
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("overview")}>
                  Back to Overview
                </Button>
                <Button onClick={() => setActiveTab("results")} className="bg-brand-purple hover:bg-brand-dark-purple">
                  Submit and Analyze
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="results">
            <Card>
              <CardHeader>
                <CardTitle>Your Brand Analysis Results</CardTitle>
                <CardDescription>
                  Based on your responses, we've identified your brand archetype and voice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    This section would display the results of the brand analysis, including the archetype,
                    tone profile, and messaging pillars.
                  </p>
                  <p className="italic text-sm">
                    (Results visualization would be added here as a separate component)
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => navigate("/dashboard")} 
                  className="bg-brand-purple hover:bg-brand-dark-purple"
                >
                  Back to Dashboard
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default BrandAnalyzer;
