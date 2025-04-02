
import { useState } from "react";
import { 
  FileText, 
  Type, 
  Mail, 
  Layout, 
  Video, 
  Pen, 
  RefreshCw, 
  Plus, 
  Minus, 
  Save,
  Clock,
  Bookmark,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import DashboardLayout from "@/components/layout/DashboardLayout";

interface ContentType {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
}

interface ToneOption {
  id: string;
  name: string;
  description: string;
}

const ContentWriter = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [selectedContentType, setSelectedContentType] = useState<string>("caption");
  const [selectedTone, setSelectedTone] = useState<string>("empathetic");
  const [topic, setTopic] = useState("");
  const [contentGoal, setContentGoal] = useState("engagement");
  const [contentLength, setContentLength] = useState([500]);
  const [generatedContent, setGeneratedContent] = useState("");
  const [savedContents, setSavedContents] = useState<{ id: number; title: string; type: string; date: string; words: number }[]>([
    { id: 1, title: "7 Ways to Grow Your LinkedIn Audience", type: "blog", date: "2 days ago", words: 1200 },
    { id: 2, title: "Introducing our new product launch", type: "email", date: "1 week ago", words: 450 },
    { id: 3, title: "Content Marketing Strategy for 2023", type: "carousel", date: "3 weeks ago", words: 850 },
  ]);
  
  const contentTypes: ContentType[] = [
    { id: "caption", name: "Social Captions", icon: Type, description: "Short, engaging copy for social posts" },
    { id: "blog", name: "Blog Posts", icon: FileText, description: "Long-form content to educate your audience" },
    { id: "email", name: "Email Copy", icon: Mail, description: "Professional emails that convert" },
    { id: "carousel", name: "Carousel Posts", icon: Layout, description: "Multi-slide content with strong takeaways" },
    { id: "script", name: "Video Scripts", icon: Video, description: "Compelling scripts for video content" },
  ];
  
  const toneOptions: ToneOption[] = [
    { id: "empathetic", name: "Empathetic", description: "Warm, understanding, and compassionate" },
    { id: "expert", name: "Expert", description: "Authoritative, knowledgeable, and professional" },
    { id: "edgy", name: "Edgy", description: "Bold, provocative, and attention-grabbing" },
    { id: "playful", name: "Playful", description: "Fun, light-hearted, and conversational" },
    { id: "visionary", name: "Visionary", description: "Forward-thinking, inspiring, and ambitious" },
  ];

  const generateContent = () => {
    // Simulate AI content generation
    const dummyContent = {
      caption: "Unlocking your potential doesn't happen overnight—it's a journey of small, consistent steps. 🌱 #GrowthMindset #PersonalDevelopment",
      blog: "# The Ultimate Guide to Personal Growth\n\nIn today's fast-paced world, personal development has become more than just a buzzword—it's a necessity for those looking to thrive both personally and professionally.\n\n## Why Personal Growth Matters\n\nPersonal growth is the ongoing process of understanding and developing yourself in order to achieve your fullest potential. This journey allows you to improve your skills, qualities, and outlook on life, ultimately leading to greater success and fulfillment.\n\n## Key Strategies for Personal Development\n\n1. **Set Clear, Actionable Goals**\nWithout a destination in mind, it's impossible to chart a course. Define what you want to achieve, break it down into manageable steps, and track your progress.\n\n2. **Cultivate a Growth Mindset**\nEmbrace challenges, persist in the face of setbacks, learn from criticism, and find inspiration in others' success.\n\n3. **Practice Self-Reflection**\nRegular self-examination helps you understand your motivations, recognize patterns, and make adjustments to your approach.\n\n4. **Seek Continuous Learning**\nWhether through reading, courses, or mentorship, constantly expanding your knowledge base is critical for personal evolution.\n\n5. **Take Calculated Risks**\nStepping outside your comfort zone is where real growth happens. Challenge yourself to try new things and embrace uncertainty.\n\n## Building Your Personal Development Plan\n\nA successful personal growth journey requires structure. Start by assessing your current state, including strengths, weaknesses, and areas for improvement. Then set SMART goals, identify resources needed, and implement daily practices that align with your objectives.\n\n## Conclusion\n\nPersonal growth is not a destination but a continuous journey. By committing to this process, you invest in your greatest asset—yourself. Remember, small consistent steps lead to remarkable transformations over time.",
      email: "Subject: Transform Your Approach to Personal Growth – Starting Today\n\nHi [First Name],\n\nEver felt like you're spinning your wheels when it comes to personal development?\n\nYou're not alone. In fact, 67% of professionals report feeling stuck in their growth journey despite having clear goals.\n\nThat's why I wanted to share three game-changing strategies that have helped our community members break through their plateaus:\n\n1. The 5-Minute Micro-Habit Method: Start incredibly small to build momentum\n2. Reverse Goal-Setting: Begin with the end result and work backward\n3. The Accountability Mirror: A simple daily practice that ensures consistent progress\n\nI've put together a complete guide on implementing these strategies in your daily routine.\n\n[Download Your Free Personal Growth Blueprint]\n\nThis isn't about overnight transformation—it's about sustainable progress that compounds over time.\n\nTo your continued growth,\n[Your Name]\n\nP.S. Reply to this email with your biggest personal development challenge, and I'll send you custom recommendations based on your specific situation.",
      carousel: "# Slide 1: The Personal Growth Paradox\nWhy is it that 92% of people set growth goals, but only 8% actually achieve them? Let's break down the science of personal development.\n\n# Slide 2: Your Brain on Growth\nPersonal development isn't just psychological—it creates new neural pathways. When you learn something new, your brain physically changes.\n\n# Slide 3: The Growth Equation\nProgress = (Consistent Action × Strategic Planning) ÷ Resistance\nLet's examine each component.\n\n# Slide 4: Consistent Action\n• Daily micro-habits > occasional massive efforts\n• The 2-minute rule: Make it impossibly small to start\n• Habit stacking: Attach new behaviors to existing routines\n\n# Slide 5: Strategic Planning\n• Begin with well-defined outcomes\n• Break goals into capability milestones\n• Create environmental triggers for success\n\n# Slide 6: Reducing Resistance\n• Eliminate friction points before they appear\n• Develop implementation intentions (If X happens, I'll do Y)\n• Build accountability systems with real consequences\n\n# Slide 7: The 30-Day Challenge\nCommit to one small growth action daily for the next month. Tag us in your journey using #GrowthMindset30\n\n# Slide 8: Save & Share\nSave this post for reference and share with someone who needs this framework for their personal development journey.",
      script: "INTRO - [MEDIUM SHOT - PRESENTER SPEAKING DIRECTLY TO CAMERA]\n\nHey there! Welcome back to the channel where we break down complex personal development concepts into actionable strategies you can implement today.\n\n[TITLE CARD: \"UNLOCK YOUR POTENTIAL: THE SCIENCE OF PERSONAL GROWTH\"]\n\nPERSONAL GROWTH DEFINED - [CLOSE UP]\n\nSo what exactly is personal growth? It's not just self-help jargon or corporate buzzwords. At its core, personal development is the conscious pursuit of expanding your capabilities, deepening your understanding, and enhancing your quality of life.\n\n[B-ROLL: SHOW EXAMPLES OF PEOPLE LEARNING, MEDITATING, EXERCISING, READING]\n\nWHY IT MATTERS - [MEDIUM SHOT WITH GRAPHICS OVERLAY]\n\nIn today's rapidly changing world, personal growth isn't optional—it's essential. Research shows that individuals committed to ongoing development report 31% higher fulfillment levels and are 23% more likely to achieve their long-term goals.\n\n[SHOW STATISTIC GRAPHICS ON SCREEN]\n\nTHE FRAMEWORK - [WHITEBOARD EXPLANATION]\n\nLet me walk you through the three-part framework I've developed after studying hundreds of high performers:\n\n1. Intentional Learning: Strategically acquiring knowledge aligned with your goals\n2. Deliberate Practice: Applying what you've learned with focused repetition\n3. Reflective Analysis: Regularly reviewing your progress and adjusting course\n\n[DRAW SIMPLE DIAGRAM ON WHITEBOARD]\n\nACTIONABLE STEPS - [CLOSEUP WITH TEXT OVERLAY]\n\nHere's how to implement this framework starting today:\n\nFirst, identify one skill that would significantly impact your life or career if improved.\n\nSecond, dedicate 15 minutes daily—yes, just 15 minutes—to intentional improvement in this area.\n\nThird, end each week with a 5-minute reflection on what worked, what didn't, and what adjustments you'll make.\n\n[SHOW TEXT BULLETS ON SCREEN]\n\nCLOSING - [MEDIUM SHOT - PRESENTER]\n\nRemember, personal growth isn't about massive transformations overnight. It's about small, consistent improvements that compound over time.\n\nIf you found this helpful, make sure to hit that subscribe button and notification bell so you don't miss our next video on creating your personal development roadmap.\n\nUntil next time, keep growing!\n\n[END CARD WITH CALL TO ACTION]",
    };
    
    setGeneratedContent(dummyContent[selectedContentType as keyof typeof dummyContent] || "");
  };

  const saveContent = () => {
    const newContent = {
      id: savedContents.length + 1,
      title: topic || `Untitled ${selectedContentType}`,
      type: selectedContentType,
      date: "Just now",
      words: generatedContent.split(/\s+/).length,
    };
    
    setSavedContents([newContent, ...savedContents]);
    // Show success message
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">AI Writer</h1>
          <p className="text-muted-foreground">Generate high-quality content tailored to your brand voice</p>
        </div>
        
        <Tabs defaultValue="create" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-2 w-[400px]">
            <TabsTrigger value="create">Create Content</TabsTrigger>
            <TabsTrigger value="library">Content Library</TabsTrigger>
          </TabsList>
          
          <TabsContent value="create" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Content Brief</CardTitle>
                    <CardDescription>Define what you want to create</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label>Content Type</Label>
                      <RadioGroup value={selectedContentType} onValueChange={setSelectedContentType} className="grid grid-cols-1 gap-2">
                        {contentTypes.map((type) => (
                          <div key={type.id} className={`flex items-start space-x-3 border rounded-md p-3 cursor-pointer hover:border-brand-purple transition-all ${selectedContentType === type.id ? 'border-brand-purple bg-brand-purple/5' : ''}`}>
                            <RadioGroupItem value={type.id} id={type.id} className="mt-1" />
                            <div className="flex-1">
                              <div className="flex items-center">
                                <type.icon className="h-4 w-4 mr-2 text-brand-purple" />
                                <Label htmlFor={type.id} className="cursor-pointer font-medium">{type.name}</Label>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">{type.description}</p>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Content Tone</Label>
                      <Select value={selectedTone} onValueChange={setSelectedTone}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a tone" />
                        </SelectTrigger>
                        <SelectContent>
                          {toneOptions.map((tone) => (
                            <SelectItem key={tone.id} value={tone.id}>
                              <div className="flex flex-col">
                                <span>{tone.name}</span>
                                <span className="text-xs text-muted-foreground">{tone.description}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="topic">Topic</Label>
                      <Input 
                        id="topic" 
                        placeholder="e.g., Personal Growth Strategies"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Content Goal</Label>
                      <Select defaultValue={contentGoal} onValueChange={setContentGoal}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a goal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="engagement">Increase Engagement</SelectItem>
                          <SelectItem value="awareness">Raise Awareness</SelectItem>
                          <SelectItem value="conversion">Drive Conversions</SelectItem>
                          <SelectItem value="education">Educate Audience</SelectItem>
                          <SelectItem value="thought-leadership">Establish Thought Leadership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Content Length</Label>
                        <span className="text-sm text-muted-foreground">{contentLength[0]} words</span>
                      </div>
                      <Slider
                        defaultValue={[500]}
                        max={2000}
                        step={100}
                        value={contentLength}
                        onValueChange={setContentLength}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Short</span>
                        <span>Medium</span>
                        <span>Long</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-brand-purple hover:bg-brand-dark-purple"
                      onClick={generateContent}
                    >
                      Generate Content
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-2 space-y-6">
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>Generated Content</CardTitle>
                    <CardDescription>Edit and refine your AI-generated content</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="mb-4 flex space-x-2">
                      <Button variant="outline" size="sm" className="text-xs">
                        <RefreshCw className="h-3 w-3 mr-1" /> Regenerate
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Plus className="h-3 w-3 mr-1" /> Expand
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Minus className="h-3 w-3 mr-1" /> Summarize
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Pen className="h-3 w-3 mr-1" /> Rewrite
                      </Button>
                    </div>
                    
                    <Textarea 
                      className="flex-grow min-h-[300px] font-mono text-sm"
                      placeholder="Your AI-generated content will appear here..."
                      value={generatedContent}
                      onChange={(e) => setGeneratedContent(e.target.value)}
                    />
                    
                    <div className="mt-4 flex justify-between">
                      <div className="text-sm text-muted-foreground">
                        {generatedContent ? `${generatedContent.split(/\s+/).length} words` : "0 words"}
                      </div>
                      <Button 
                        className="bg-brand-purple hover:bg-brand-dark-purple"
                        onClick={saveContent}
                        disabled={!generatedContent}
                      >
                        <Save className="h-4 w-4 mr-2" /> Save to Library
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="library">
            <Card>
              <CardHeader>
                <CardTitle>Content Library</CardTitle>
                <CardDescription>Browse and manage your saved content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {savedContents.map((content) => (
                    <Card key={content.id} className="hover:border-brand-purple transition-all cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center">
                            {content.type === "blog" && <FileText className="h-4 w-4 text-brand-purple mr-2" />}
                            {content.type === "email" && <Mail className="h-4 w-4 text-brand-purple mr-2" />}
                            {content.type === "carousel" && <Layout className="h-4 w-4 text-brand-purple mr-2" />}
                            {content.type === "script" && <Video className="h-4 w-4 text-brand-purple mr-2" />}
                            {content.type === "caption" && <Type className="h-4 w-4 text-brand-purple mr-2" />}
                            <span className="text-xs capitalize bg-muted rounded-full px-2 py-0.5">{content.type}</span>
                          </div>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Pen className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Bookmark className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <h3 className="font-medium text-sm line-clamp-2 mb-1">{content.title}</h3>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" /> {content.date}
                          </div>
                          <div>{content.words} words</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  <Card className="border-dashed hover:border-brand-purple transition-all cursor-pointer flex items-center justify-center p-6">
                    <div className="text-center">
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full mb-2">
                        <Plus className="h-6 w-6 text-brand-purple" />
                      </Button>
                      <p className="text-sm font-medium">Create New Content</p>
                      <p className="text-xs text-muted-foreground">Add to your content library</p>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ContentWriter;
