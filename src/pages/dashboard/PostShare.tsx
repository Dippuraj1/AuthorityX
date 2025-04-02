
import { useState } from "react";
import { useForm } from "react-hook-form";
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Music, // Replacing TikTok with Music icon
  Calendar, 
  BarChart2, 
  Edit3, 
  Hash,
  Image as ImageIcon,
  Maximize2,
  EyeIcon
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import DashboardLayout from "@/components/layout/DashboardLayout";

interface PlatformPreview {
  platform: string;
  icon: React.ElementType;
  color: string;
  active: boolean;
  maxLength: number;
  hashtags: number;
}

const PostShare = () => {
  const [content, setContent] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["instagram", "twitter", "linkedin"]);
  const [engagementScore, setEngagementScore] = useState(78);
  const [publishStatus, setPublishStatus] = useState<"draft" | "scheduled" | "published">("draft");
  
  const { register, handleSubmit } = useForm();

  const platforms: PlatformPreview[] = [
    { platform: "instagram", icon: Instagram, color: "#E1306C", active: true, maxLength: 2200, hashtags: 30 },
    { platform: "twitter", icon: Twitter, color: "#1DA1F2", active: true, maxLength: 280, hashtags: 5 },
    { platform: "linkedin", icon: Linkedin, color: "#0077B5", active: true, maxLength: 3000, hashtags: 10 },
    { platform: "tiktok", icon: Music, color: "#000000", active: false, maxLength: 150, hashtags: 20 }, // Changed icon to Music
  ];

  const togglePlatform = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const formatForPlatform = (platform: string) => {
    // AI would do this transformation - simulated here
    let formattedContent = content;
    const platformObj = platforms.find(p => p.platform === platform);
    
    if (!platformObj) return content;
    
    // Truncate if too long for the platform
    if (formattedContent.length > platformObj.maxLength) {
      formattedContent = formattedContent.substring(0, platformObj.maxLength - 3) + "...";
    }
    
    return formattedContent;
  };

  const schedulePost = () => {
    setPublishStatus("scheduled");
    // Simulate scheduling logic
  };

  const publishNow = () => {
    setPublishStatus("published");
    // Simulate publish logic
  };

  const calculateRemainingChars = (platform: string) => {
    const platformObj = platforms.find(p => p.platform === platform);
    if (!platformObj) return 0;
    return platformObj.maxLength - content.length;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Post & Share</h1>
          <p className="text-muted-foreground">Publish content directly to multiple social platforms</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create Post</CardTitle>
                <CardDescription>Write your content once, publish everywhere</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea 
                      id="content" 
                      placeholder="What would you like to share today?"
                      className="min-h-[150px]"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="hashtags">Hashtags</Label>
                    <div className="flex">
                      <div className="mr-2 flex items-center">
                        <Hash className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <Input 
                        id="hashtags" 
                        placeholder="Add hashtags (e.g., content marketing, social media)"
                        value={hashtags}
                        onChange={(e) => setHashtags(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">Media</Label>
                    <div className="border-2 border-dashed rounded-md p-6 text-center">
                      <ImageIcon className="h-8 w-8 mx-auto text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Drag and drop an image or video, or click to browse
                      </p>
                      <Button variant="outline" className="mt-4">Upload Media</Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Edit3 className="h-4 w-4" /> AI Rewrite
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Hash className="h-4 w-4" /> Suggest Hashtags
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <ImageIcon className="h-4 w-4" /> Visual Suggestions
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Platform Selection</CardTitle>
                <CardDescription>Choose which platforms to post to</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {platforms.map((platform) => (
                    <div 
                      key={platform.platform}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedPlatforms.includes(platform.platform) 
                          ? `border-[${platform.color}] shadow-sm` 
                          : "border-border"
                      }`}
                      onClick={() => togglePlatform(platform.platform)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <platform.icon style={{ color: platform.color }} className="h-6 w-6" />
                        <Switch 
                          checked={selectedPlatforms.includes(platform.platform)}
                          onCheckedChange={() => togglePlatform(platform.platform)}
                        />
                      </div>
                      <p className="capitalize font-medium text-sm">{platform.platform}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {calculateRemainingChars(platform.platform)} chars left
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Engagement Prediction</CardTitle>
                <CardDescription>AI-powered engagement forecast</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-brand-purple/10 text-brand-purple mb-4">
                    <span className="text-3xl font-bold">{engagementScore}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Predicted engagement</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Reach</span>
                      <span>Good</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Clicks</span>
                      <span>Excellent</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Comments</span>
                      <span>Average</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Platform Previews</CardTitle>
                <CardDescription>See how your content will appear</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="instagram">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="instagram">Instagram</TabsTrigger>
                    <TabsTrigger value="twitter">Twitter</TabsTrigger>
                    <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
                  </TabsList>
                  
                  {platforms.slice(0, 3).map((platform) => (
                    <TabsContent key={platform.platform} value={platform.platform}>
                      <div className="border rounded-lg p-4 relative">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="h-8 w-8 rounded-full bg-brand-purple flex items-center justify-center text-white">
                            A
                          </div>
                          <div>
                            <p className="text-sm font-medium">AuthorityX</p>
                            <p className="text-xs text-muted-foreground">Just now</p>
                          </div>
                        </div>
                        
                        <p className="text-sm mb-3">
                          {formatForPlatform(platform.platform)}
                        </p>
                        
                        {hashtags && (
                          <p className="text-sm text-brand-purple mb-3">
                            {hashtags.split(',').map(tag => `#${tag.trim()}`).join(' ')}
                          </p>
                        )}
                        
                        <div className="bg-muted h-40 rounded flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-muted-foreground" />
                        </div>
                        
                        <button className="absolute top-2 right-2 text-muted-foreground hover:text-foreground">
                          <Maximize2 className="h-4 w-4" />
                        </button>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
                
                <Button variant="outline" className="w-full mt-4 flex items-center justify-center gap-2">
                  <EyeIcon className="h-4 w-4" /> Preview All Platforms
                </Button>
              </CardContent>
            </Card>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1 flex items-center justify-center gap-2"
                onClick={schedulePost}
              >
                <Calendar className="h-4 w-4" /> 
                Schedule
              </Button>
              <Button 
                className="flex-1 bg-brand-purple hover:bg-brand-dark-purple flex items-center justify-center gap-2"
                onClick={publishNow}
              >
                <BarChart2 className="h-4 w-4" /> 
                Publish Now
              </Button>
            </div>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Published Status Dashboard</CardTitle>
            <CardDescription>Track your content across platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Content</th>
                    <th className="text-left py-3 px-4">Platforms</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Engagement</th>
                    <th className="text-left py-3 px-4">Published</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample row */}
                  <tr className="border-b">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-muted rounded mr-3 flex items-center justify-center">
                          <ImageIcon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="truncate max-w-[200px]">
                          {content || "How to increase your engagement with content marketing..."}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-1">
                        {selectedPlatforms.map(p => {
                          const platform = platforms.find(plat => plat.platform === p);
                          if (!platform) return null;
                          return (
                            <platform.icon 
                              key={p} 
                              style={{ color: platform.color }} 
                              className="h-5 w-5"
                            />
                          );
                        })}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        publishStatus === "published" 
                          ? "bg-green-100 text-green-800" 
                          : publishStatus === "scheduled" 
                            ? "bg-blue-100 text-blue-800" 
                            : "bg-gray-100 text-gray-800"
                      }`}>
                        {publishStatus.charAt(0).toUpperCase() + publishStatus.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <Progress value={engagementScore} className="h-2 w-24 mr-2" />
                        <span>{engagementScore}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {publishStatus === "published" ? "Today, 10:30 AM" : 
                       publishStatus === "scheduled" ? "Tomorrow, 09:00 AM" : 
                       "—"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PostShare;
