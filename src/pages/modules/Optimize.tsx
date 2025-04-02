
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Lightbulb, Upload, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

const Optimize = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();
  
  const form = useForm({
    defaultValues: {
      linkedinUrl: "",
      mission: "",
      audience: "",
      tone: "professional",
      industry: "",
      goals: [],
    },
  });

  const onSubmit = (data: any) => {
    setIsAnalyzing(true);
    
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
      toast({
        title: "Analysis Complete",
        description: "Your brand archetype has been identified.",
      });
    }, 2000);
  };
  
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Brand Analyzer</h1>
          <p className="text-muted-foreground">Discover your authentic brand voice and personality</p>
        </div>

        {!showResults ? (
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Brand Analysis Questionnaire</CardTitle>
              <CardDescription>
                Complete the following steps to analyze your personal brand
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  {[1, 2, 3].map((step) => (
                    <div 
                      key={step}
                      className={`flex items-center ${currentStep >= step ? "text-brand-purple" : "text-muted-foreground"}`}
                    >
                      <div className={`
                        h-8 w-8 rounded-full flex items-center justify-center mr-2 
                        ${currentStep >= step ? "bg-brand-purple text-white" : "bg-muted text-muted-foreground"}
                      `}>
                        {step}
                      </div>
                      <span className="hidden sm:inline text-sm font-medium">
                        {step === 1 && "Upload"}
                        {step === 2 && "Questionnaire"}
                        {step === 3 && "Review"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative h-2 bg-muted rounded-full">
                  <div 
                    className="absolute top-0 left-0 h-2 bg-brand-purple rounded-full transition-all"
                    style={{ width: `${(currentStep - 1) * 50}%` }}
                  ></div>
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fade-in">
                      <FormField
                        control={form.control}
                        name="linkedinUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>LinkedIn Profile URL</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="https://www.linkedin.com/in/yourprofile" 
                                {...field} 
                                className="bg-muted"
                              />
                            </FormControl>
                            <FormDescription>
                              We'll analyze your LinkedIn profile to understand your professional background.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                        <div className="mx-auto h-12 w-12 bg-muted rounded-full flex items-center justify-center mb-4">
                          <Upload className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">Upload your CV or Resume</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Drag and drop your PDF or Word document here, or click to browse files.
                        </p>
                        <Button variant="outline" type="button">
                          <Upload className="mr-2 h-4 w-4" /> Browse Files
                        </Button>
                      </div>

                      <div className="flex justify-end">
                        <Button 
                          type="button" 
                          className="bg-brand-purple hover:bg-brand-dark-purple"
                          onClick={nextStep}
                        >
                          Continue <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fade-in">
                      <FormField
                        control={form.control}
                        name="mission"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Professional Mission</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe your professional mission and what you hope to achieve." 
                                {...field} 
                                className="bg-muted min-h-[100px]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="audience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Target Audience</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe your ideal audience or the people you want to reach." 
                                {...field} 
                                className="bg-muted min-h-[100px]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="tone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Communication Tone</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-muted">
                                    <SelectValue placeholder="Select a tone" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="professional">Professional & Formal</SelectItem>
                                  <SelectItem value="casual">Casual & Conversational</SelectItem>
                                  <SelectItem value="inspiring">Inspiring & Motivational</SelectItem>
                                  <SelectItem value="educational">Educational & Informative</SelectItem>
                                  <SelectItem value="authoritative">Authoritative & Confident</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="industry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Industry</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-muted">
                                    <SelectValue placeholder="Select your industry" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="tech">Technology</SelectItem>
                                  <SelectItem value="finance">Finance</SelectItem>
                                  <SelectItem value="healthcare">Healthcare</SelectItem>
                                  <SelectItem value="education">Education</SelectItem>
                                  <SelectItem value="marketing">Marketing</SelectItem>
                                  <SelectItem value="design">Design</SelectItem>
                                  <SelectItem value="entertainment">Entertainment</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex justify-between">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={prevStep}
                        >
                          Back
                        </Button>
                        <Button 
                          type="button" 
                          className="bg-brand-purple hover:bg-brand-dark-purple"
                          onClick={nextStep}
                        >
                          Continue <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="bg-muted rounded-lg p-6">
                        <h3 className="text-lg font-medium mb-4">Review Your Information</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium">LinkedIn Profile:</h4>
                            <p className="text-sm text-muted-foreground">{form.getValues().linkedinUrl || "Not provided"}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Professional Mission:</h4>
                            <p className="text-sm text-muted-foreground">{form.getValues().mission || "Not provided"}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Target Audience:</h4>
                            <p className="text-sm text-muted-foreground">{form.getValues().audience || "Not provided"}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Communication Tone:</h4>
                            <p className="text-sm text-muted-foreground capitalize">{form.getValues().tone || "Not provided"}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Industry:</h4>
                            <p className="text-sm text-muted-foreground capitalize">{form.getValues().industry || "Not provided"}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={prevStep}
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit" 
                          className="bg-brand-purple hover:bg-brand-dark-purple"
                          disabled={isAnalyzing}
                        >
                          {isAnalyzing ? "Analyzing..." : "Analyze Brand"} 
                          {!isAnalyzing && <ArrowRight className="ml-2 h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </Form>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <Card className="bg-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Your Brand Archetype</CardTitle>
                    <CardDescription>Based on your profile analysis</CardDescription>
                  </div>
                  <Button variant="outline" onClick={() => setShowResults(false)}>Edit Responses</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6 mb-8">
                  <div className="h-24 w-24 bg-brand-purple/20 rounded-full flex items-center justify-center">
                    <Lightbulb className="h-12 w-12 text-brand-purple" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">The Innovator</h2>
                    <p className="text-lg text-muted-foreground">
                      Forward-thinking, disruptive, and progressive
                    </p>
                  </div>
                </div>

                <Tabs defaultValue="voice-tone">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="voice-tone">Voice & Tone</TabsTrigger>
                    <TabsTrigger value="differentiators">Key Differentiators</TabsTrigger>
                    <TabsTrigger value="positioning">Positioning Statement</TabsTrigger>
                  </TabsList>
                  <TabsContent value="voice-tone" className="py-4">
                    <ScrollArea className="h-72">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Communication Style</h3>
                          <p>
                            Your communication style should be forward-thinking and progressive. Use language that conveys expertise and vision, while maintaining accessibility. Speak authoritatively about your field but always with an eye toward how your ideas can create positive change.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Tone Guidelines</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Visionary:</strong> Use future-oriented language that inspires action.</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Confident:</strong> Express ideas with certainty but avoid arrogance.</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Decisive:</strong> Communicate clear opinions and recommendations.</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Accessible:</strong> Balance technical language with relatable explanations.</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Vocabulary</h3>
                          <p className="mb-2">
                            Use words and phrases that reinforce your innovative perspective, such as:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {["transform", "innovate", "disrupt", "reimagine", "future-focused", "cutting-edge", "breakthrough", "pioneer", "visionary", "revolution"].map((word) => (
                              <div key={word} className="bg-muted px-3 py-1 rounded-full text-sm">
                                {word}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </TabsContent>
                  <TabsContent value="differentiators" className="py-4">
                    <ScrollArea className="h-72">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Your Unique Value Proposition</h3>
                          <p>
                            Based on your profile analysis, your key differentiators position you as a thought leader who:
                          </p>
                        </div>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <span className="font-bold">1</span>
                            </div>
                            <div>
                              <h4 className="font-semibold">Challenges Conventional Thinking</h4>
                              <p className="text-muted-foreground">
                                You bring fresh perspectives to old problems and aren't afraid to question established approaches.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <span className="font-bold">2</span>
                            </div>
                            <div>
                              <h4 className="font-semibold">Translates Complex Concepts</h4>
                              <p className="text-muted-foreground">
                                You excel at making technical or complicated ideas accessible and practical for your audience.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <span className="font-bold">3</span>
                            </div>
                            <div>
                              <h4 className="font-semibold">Focuses on Future Impact</h4>
                              <p className="text-muted-foreground">
                                Rather than short-term wins, your work emphasizes long-term transformation and lasting change.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <span className="font-bold">4</span>
                            </div>
                            <div>
                              <h4 className="font-semibold">Continuously Evolves</h4>
                              <p className="text-muted-foreground">
                                You model the innovation mindset by constantly learning and adapting your own approaches.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </ScrollArea>
                  </TabsContent>
                  <TabsContent value="positioning" className="py-4">
                    <ScrollArea className="h-72">
                      <div className="space-y-6">
                        <div className="bg-muted p-6 rounded-lg border border-border">
                          <h3 className="text-lg font-semibold mb-4">Your Positioning Statement</h3>
                          <p className="text-lg italic">
                            "I help forward-thinking professionals transform their approach to [industry] by introducing innovative strategies that create meaningful impact while staying ahead of industry trends."
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-2">How to Use Your Positioning Statement</h3>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>LinkedIn Headline:</strong> Adapt this statement to create a compelling professional headline.</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Website Bio:</strong> Use this as the foundation for your professional biography.</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Speaker Introductions:</strong> Provide this to event organizers when you're being introduced.</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>Email Signature:</strong> Include a condensed version in your professional email signature.</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="pt-2">
                          <Button className="w-full bg-brand-purple hover:bg-brand-dark-purple">
                            <FileText className="mr-2 h-4 w-4" /> Generate Custom Content from Positioning
                          </Button>
                        </div>
                      </div>
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-bold">1</span>
                      </div>
                      <div>
                        <Button className="h-auto p-0 mb-1 bg-transparent hover:bg-transparent text-left font-semibold underline decoration-brand-purple hover:text-brand-purple">
                          Create Your Content Strategy
                        </Button>
                        <p className="text-sm text-muted-foreground">
                          Use your brand archetype to develop a personalized content plan.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-bold">2</span>
                      </div>
                      <div>
                        <Button className="h-auto p-0 mb-1 bg-transparent hover:bg-transparent text-left font-semibold underline decoration-brand-purple hover:text-brand-purple">
                          Update Your Social Profiles
                        </Button>
                        <p className="text-sm text-muted-foreground">
                          Apply your positioning statement to your LinkedIn and other platforms.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-bold">3</span>
                      </div>
                      <div>
                        <Button className="h-auto p-0 mb-1 bg-transparent hover:bg-transparent text-left font-semibold underline decoration-brand-purple hover:text-brand-purple">
                          Write Your First On-Brand Post
                        </Button>
                        <p className="text-sm text-muted-foreground">
                          Generate content that aligns with your innovator archetype.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Download Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" /> Brand Voice Guidelines (PDF)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" /> Content Strategy Template (XLSX)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" /> 30 Content Prompts for Innovators (PDF)
                    </Button>
                    <Button className="w-full bg-brand-purple hover:bg-brand-dark-purple mt-2">
                      Download All Resources
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Optimize;
