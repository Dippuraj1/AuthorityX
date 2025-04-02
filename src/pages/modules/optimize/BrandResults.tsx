
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Lightbulb, FileText, CheckCircle } from "lucide-react";

interface BrandResultsProps {
  onEditResponses: () => void;
}

const BrandResults = ({ onEditResponses }: BrandResultsProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="bg-card">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Your Brand Archetype</CardTitle>
              <CardDescription>Based on your profile analysis</CardDescription>
            </div>
            <Button variant="outline" onClick={onEditResponses}>Edit Responses</Button>
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
  );
};

export default BrandResults;
