
import { useState, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar } from "@/components/ui/calendar";
import { FileText, Calendar as CalendarIcon, BarChart3, Lightbulb, CheckCircle, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

const ContentStrategy = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedGoal, setSelectedGoal] = useState("growth");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isStrategyGenerated, setIsStrategyGenerated] = useState(false);
  const { toast } = useToast();

  const weeklyThemes = [
    {
      week: 1,
      theme: "Storytelling",
      description: "Share your brand's origin story and values",
      completed: false,
    },
    {
      week: 2,
      theme: "Value Proposition",
      description: "Highlight key benefits of your product/service",
      completed: false,
    },
    {
      week: 3,
      theme: "Call to Action",
      description: "Encourage audience engagement and conversions",
      completed: false,
    },
    {
      week: 4,
      theme: "Community Building",
      description: "Foster relationships with your audience",
      completed: false,
    },
  ];

  const contentIdeas = [
    {
      type: "Blog",
      ideas: [
        "How Our Brand Helps Solve [Industry Problem]",
        "5 Ways to Maximize Results with [Your Product]",
        "Behind the Scenes: Our Creative Process",
      ],
    },
    {
      type: "Video",
      ideas: [
        "Quick Tutorial: Getting Started with [Product]",
        "Customer Success Story: [Client Name]",
        "Industry Trends & How We're Responding",
      ],
    },
    {
      type: "Carousel",
      ideas: [
        "10 Stats That Will Change How You View [Topic]",
        "Step-by-Step Guide to [Process]",
        "Before & After Results with [Product]",
      ],
    },
    {
      type: "Reel",
      ideas: [
        "Day in the Life of [Role at Company]",
        "Quick Tip: How to [Quick Win]",
        "Customer Reaction to [Product Feature]",
      ],
    },
  ];

  const handleGenerateStrategy = () => {
    setIsGenerating(true);
    
    // Simulate AI strategy generation
    setTimeout(() => {
      setIsGenerating(false);
      setIsStrategyGenerated(true);
      toast({
        title: "Strategy Generated",
        description: "Your 30-day content strategy has been created with AI assistance.",
      });
    }, 2000);
  };

  const handleRegenerateIdeas = (type: string) => {
    toast({
      title: "Regenerating Ideas",
      description: `New ${type} content ideas are being created...`,
    });
    
    // Simulate AI regeneration
    setTimeout(() => {
      toast({
        title: "New Ideas Ready",
        description: `Your ${type} content ideas have been refreshed.`,
      });
    }, 1500);
  };

  const handleUseIdea = (type: string, idea: string) => {
    toast({
      title: "Idea Added to Calendar",
      description: `"${idea}" has been added to your content calendar.`,
    });
  };

  // AI improvement effect for automatic suggestions
  useEffect(() => {
    if (selectedGoal && !isStrategyGenerated) {
      const timer = setTimeout(() => {
        toast({
          title: "AI Suggestion",
          description: `Based on your "${selectedGoal === "growth" ? "Audience Growth" : selectedGoal}" goal, we recommend focusing on video content this month.`,
        });
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [selectedGoal, toast, isStrategyGenerated]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Strategy</h1>
          <p className="text-muted-foreground">
            Get a personalized 30-day roadmap to maximize engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Strategy Settings</CardTitle>
              <CardDescription>Customize your content strategy parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Start Date</label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="border rounded-md"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Primary Goal</label>
                    <Select value={selectedGoal} onValueChange={setSelectedGoal}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="growth">Audience Growth</SelectItem>
                        <SelectItem value="awareness">Brand Awareness</SelectItem>
                        <SelectItem value="sales">Sales & Conversion</SelectItem>
                        <SelectItem value="engagement">Community Engagement</SelectItem>
                        <SelectItem value="education">Customer Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Target Platforms</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="platform-linkedin" defaultChecked />
                        <label htmlFor="platform-linkedin">LinkedIn</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="platform-instagram" defaultChecked />
                        <label htmlFor="platform-instagram">Instagram</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="platform-twitter" />
                        <label htmlFor="platform-twitter">Twitter</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="platform-facebook" />
                        <label htmlFor="platform-facebook">Facebook</label>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-brand-purple hover:bg-brand-dark-purple" 
                    onClick={handleGenerateStrategy}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Generating AI Strategy...
                      </>
                    ) : (
                      <>
                        Generate 30-Day Strategy
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Strategy Engine</CardTitle>
              <CardDescription>Powered by advanced AI models</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-4 w-4 text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Personalized Strategy</h3>
                  <p className="text-xs text-muted-foreground">Tailored to your brand archetype and audience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                  <CalendarIcon className="h-4 w-4 text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Adaptive Content Calendar</h3>
                  <p className="text-xs text-muted-foreground">Weekly themes automatically optimized</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-4 w-4 text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Content Inspiration</h3>
                  <p className="text-xs text-muted-foreground">AI-generated ideas that resonate with your audience</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="roadmap">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="roadmap">30-Day Roadmap</TabsTrigger>
            <TabsTrigger value="weekly">Weekly Focus</TabsTrigger>
            <TabsTrigger value="ideas">Content Ideas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="roadmap" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Your 30-Day Content Roadmap</CardTitle>
                <CardDescription>Based on your selected goal: {selectedGoal === "growth" ? "Audience Growth" : selectedGoal === "awareness" ? "Brand Awareness" : selectedGoal === "sales" ? "Sales & Conversion" : selectedGoal === "engagement" ? "Community Engagement" : "Customer Education"}</CardDescription>
              </CardHeader>
              <CardContent>
                {!isStrategyGenerated ? (
                  <div className="space-y-6">
                    <p className="text-center text-muted-foreground">Generate your content strategy to see your 30-day roadmap</p>
                    <div className="grid grid-cols-5 gap-4">
                      {Array.from({ length: 15 }).map((_, index) => (
                        <Skeleton key={index} className="aspect-square h-20" />
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-5 gap-4 text-center text-sm font-medium border-b pb-4">
                      <div>Monday</div>
                      <div>Tuesday</div>
                      <div>Wednesday</div>
                      <div>Thursday</div>
                      <div>Friday</div>
                    </div>
                    
                    <div className="grid grid-cols-5 gap-3 mt-4">
                      {Array.from({ length: 20 }).map((_, index) => (
                        <div key={index} className="aspect-square border rounded-md p-2 text-xs flex flex-col hover:shadow-md transition-all duration-200 cursor-pointer">
                          <div className="text-right font-medium">{index + 1}</div>
                          <div className="mt-1 text-center flex-grow flex flex-col items-center justify-center">
                            <div className={`h-3 w-3 rounded-full mb-1 ${
                              index % 4 === 0 ? "bg-blue-500" : 
                              index % 4 === 1 ? "bg-green-500" : 
                              index % 4 === 2 ? "bg-purple-500" : 
                              "bg-orange-500"
                            }`}></div>
                            <span className="text-[10px] text-muted-foreground">
                              {index % 4 === 0 ? "Blog" : 
                               index % 4 === 1 ? "Video" : 
                               index % 4 === 2 ? "Carousel" : 
                               "Reel"}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center mt-6">
                      <div className="flex space-x-4">
                        <div className="flex items-center space-x-1">
                          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                          <span className="text-xs">Blog</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          <span className="text-xs">Video</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                          <span className="text-xs">Carousel</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                          <span className="text-xs">Reel</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-1" /> Export as PDF
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="weekly" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Focus Areas</CardTitle>
                <CardDescription>Strategic themes for each week of your content plan</CardDescription>
              </CardHeader>
              <CardContent>
                {!isStrategyGenerated ? (
                  <div className="space-y-6">
                    <p className="text-center text-muted-foreground">Generate your content strategy to see weekly focus areas</p>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="flex items-start">
                        <Skeleton className="h-10 w-10 rounded-full mr-4" />
                        <div className="flex-grow space-y-2">
                          <Skeleton className="h-6 w-48" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-12 w-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {weeklyThemes.map((week) => (
                      <div key={week.week} className="flex items-start">
                        <div className="mr-4">
                          <div className="h-10 w-10 rounded-full bg-brand-purple flex items-center justify-center text-white font-bold">
                            {week.week}
                          </div>
                        </div>
                        <div className="flex-grow border-b pb-4">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold">{week.theme}</h3>
                            <Checkbox id={`week-${week.week}`} />
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{week.description}</p>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="bg-muted p-2 rounded">
                              <span className="font-medium">Primary Content:</span> {week.week % 2 === 0 ? "Video + Blog" : "Carousel + Reel"}
                            </div>
                            <div className="bg-muted p-2 rounded">
                              <span className="font-medium">Post Frequency:</span> {week.week === 3 ? "Daily" : "3x Weekly"}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ideas" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Generated Content Ideas</CardTitle>
                <CardDescription>Based on your brand archetype and goals</CardDescription>
              </CardHeader>
              <CardContent>
                {!isStrategyGenerated ? (
                  <div className="space-y-6">
                    <p className="text-center text-muted-foreground">Generate your content strategy to see AI content ideas</p>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Skeleton className="h-6 w-6 rounded-full" />
                          <Skeleton className="h-6 w-32" />
                        </div>
                        <div className="pl-8 space-y-4">
                          {Array.from({ length: 3 }).map((_, ideaIndex) => (
                            <div key={ideaIndex} className="flex items-start">
                              <Skeleton className="h-4 w-4 mr-2 mt-0.5" />
                              <div className="space-y-2 w-full">
                                <Skeleton className="h-4 w-full" />
                                <div className="flex space-x-2">
                                  <Skeleton className="h-6 w-12" />
                                  <Skeleton className="h-6 w-20" />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-6">
                      {contentIdeas.map((category) => (
                        <div key={category.type}>
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="h-6 w-6 rounded-full bg-brand-purple/20 flex items-center justify-center">
                              {category.type === "Blog" ? <FileText className="h-3 w-3 text-brand-purple" /> :
                               category.type === "Video" ? <FileText className="h-3 w-3 text-brand-purple" /> :
                               category.type === "Carousel" ? <FileText className="h-3 w-3 text-brand-purple" /> :
                               <FileText className="h-3 w-3 text-brand-purple" />}
                            </div>
                            <h3 className="font-semibold">{category.type} Content</h3>
                          </div>
                          <div className="pl-8 space-y-3">
                            {category.ideas.map((idea, index) => (
                              <div key={index} className="flex items-start group">
                                <CheckCircle className="h-4 w-4 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                                <div className="w-full">
                                  <p className="text-sm">{idea}</p>
                                  <div className="flex space-x-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button variant="outline" size="sm" className="h-6 text-xs" onClick={() => handleUseIdea(category.type, idea)}>Use</Button>
                                    <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={() => handleRegenerateIdeas(category.type)}>Regenerate</Button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                )}
                <div className="mt-4 pt-4 border-t">
                  <Button 
                    className="w-full bg-brand-purple hover:bg-brand-dark-purple"
                    onClick={() => handleRegenerateIdeas("all")}
                    disabled={!isStrategyGenerated}
                  >
                    <Lightbulb className="h-4 w-4 mr-2" /> Generate More Content Ideas
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ContentStrategy;
