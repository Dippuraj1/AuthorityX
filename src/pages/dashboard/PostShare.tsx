
import { useState } from "react";
import { 
  Share2, Hash, Palette, Calendar, CheckCircle, LineChart, Heart,
  Instagram, Twitter, Linkedin, Music, Image, Link, Send
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/layout/DashboardLayout";

const PostShare = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["instagram"]);
  const [postContent, setPostContent] = useState("");
  const [activeTab, setActiveTab] = useState("compose");
  
  const handlePlatformSelection = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };
  
  const platforms = [
    { id: "instagram", name: "Instagram", icon: Instagram },
    { id: "twitter", name: "Twitter", icon: Twitter },
    { id: "linkedin", name: "LinkedIn", icon: Linkedin },
    { id: "tiktok", name: "TikTok", icon: Music },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Post & Share</h1>
          <p className="text-muted-foreground">Publish content directly to multiple social platforms</p>
        </div>
        
        <Tabs defaultValue="compose" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-3 w-[400px]">
            <TabsTrigger value="compose">Compose</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
          </TabsList>
          
          <TabsContent value="compose" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Create Post</CardTitle>
                    <CardDescription>Craft your post and publish to multiple platforms</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Textarea 
                      placeholder="What would you like to share?"
                      className="min-h-[200px]"
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                    />
                    
                    <div className="flex space-x-4">
                      <Button variant="outline" className="flex items-center">
                        <Image className="w-4 h-4 mr-2" /> Add Media
                      </Button>
                      <Button variant="outline" className="flex items-center">
                        <Link className="w-4 h-4 mr-2" /> Add Link
                      </Button>
                      <Button variant="outline" className="flex items-center">
                        <Hash className="w-4 h-4 mr-2" /> Hashtags
                      </Button>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h3 className="text-sm font-medium mb-3">Target Platforms</h3>
                      <div className="flex flex-wrap gap-2">
                        {platforms.map((platform) => (
                          <Button
                            key={platform.id}
                            variant={selectedPlatforms.includes(platform.id) ? "default" : "outline"}
                            size="sm"
                            className={`flex items-center gap-1 ${
                              selectedPlatforms.includes(platform.id) 
                                ? "bg-brand-purple hover:bg-brand-purple/90" 
                                : ""
                            }`}
                            onClick={() => handlePlatformSelection(platform.id)}
                          >
                            <platform.icon className="h-4 w-4" />
                            <span>{platform.name}</span>
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Button variant="outline">Save as Draft</Button>
                      <div className="space-x-2">
                        <Button variant="outline">Schedule</Button>
                        <Button className="bg-brand-purple hover:bg-brand-purple/90">
                          <Send className="w-4 h-4 mr-2" /> Publish Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Tools</CardTitle>
                    <CardDescription>Enhance your content</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Share2 className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Cross-posting tool</p>
                          <p className="text-xs text-muted-foreground">Auto-reformat for IG, X, LinkedIn, TikTok</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Hash className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Caption and hashtag optimization</p>
                          <p className="text-xs text-muted-foreground">Per-platform AI rewrite</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Palette className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Visual enhancement suggestions</p>
                          <p className="text-xs text-muted-foreground">Contrast, color, emoji use</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Calendar className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Auto-scheduler + analytics</p>
                          <p className="text-xs text-muted-foreground">Trigger post-publish</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 border-t pt-4">
                      <h3 className="text-sm font-medium mb-2">Engagement Score</h3>
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mr-2">
                          <Heart className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="text-2xl font-bold text-green-600">87</div>
                        <div className="text-xs text-muted-foreground ml-2">/ 100</div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">High engagement predicted</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="scheduled">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Posts</CardTitle>
                <CardDescription>Manage your upcoming content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No scheduled posts yet</p>
                  <Button 
                    className="mt-4 bg-brand-purple hover:bg-brand-purple/90"
                    onClick={() => setActiveTab("compose")}
                  >
                    Create New Post
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="published">
            <Card>
              <CardHeader>
                <CardTitle>Published Posts</CardTitle>
                <CardDescription>View and analyze your published content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No published posts yet</p>
                  <Button 
                    className="mt-4 bg-brand-purple hover:bg-brand-purple/90"
                    onClick={() => setActiveTab("compose")}
                  >
                    Create New Post
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

export default PostShare;
