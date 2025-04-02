
import { useState, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import BrandArchetypeCard from "@/components/dashboard/BrandArchetypeCard";
import PerformanceMetricsCard from "@/components/dashboard/PerformanceMetricsCard";
import QuickActionsGrid from "@/components/dashboard/QuickActionsGrid";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, Share2, BarChart3, MessageCircle, Shield, 
  Instagram, Twitter, Linkedin, Music, Hash, Palette, Calendar,
  Heart, LineChart, PenTool, CheckCircle, Clock, ThumbsUp, AlertTriangle
} from "lucide-react";

const Dashboard = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(68), 500);
    return () => clearTimeout(timer);
  }, []);

  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <DashboardHeader todayDate={todayDate} />
        <BrandArchetypeCard progress={progress} />
        <PerformanceMetricsCard />
        <QuickActionsGrid />
        
        <Tabs defaultValue="post_share" className="w-full">
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="post_share" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" /> Post & Share
            </TabsTrigger>
            <TabsTrigger value="ai_writer" className="flex items-center gap-2">
              <PenTool className="h-4 w-4" /> AI Writer
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" /> Analytics
            </TabsTrigger>
            <TabsTrigger value="brand_reputation" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Brand Reputation
            </TabsTrigger>
            <TabsTrigger value="brand_protection" className="flex items-center gap-2">
              <Shield className="h-4 w-4" /> Brand Protection
            </TabsTrigger>
          </TabsList>
          
          {/* Post & Share Tab */}
          <TabsContent value="post_share">
            <Card>
              <CardHeader>
                <CardTitle>Post & Share</CardTitle>
                <CardDescription>Publish content directly to multiple social platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">AI Features</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Share2 className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Cross-posting tool</p>
                          <p className="text-sm text-muted-foreground">Auto-reformat for IG, X, LinkedIn, TikTok</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Hash className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Caption and hashtag optimization</p>
                          <p className="text-sm text-muted-foreground">Per-platform AI rewrite</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Palette className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Visual enhancement suggestions</p>
                          <p className="text-sm text-muted-foreground">Contrast, color, emoji use</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Calendar className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Auto-scheduler + analytics</p>
                          <p className="text-sm text-muted-foreground">Trigger post-publish</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Output</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Published status dashboard</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <LineChart className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Real-time platform-specific previews</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Heart className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Engagement prediction score</p>
                          <p className="text-sm text-muted-foreground">Pre-publish</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
                        <Instagram className="h-4 w-4" />
                        <span className="text-xs">Instagram</span>
                      </div>
                      <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
                        <Twitter className="h-4 w-4" />
                        <span className="text-xs">Twitter</span>
                      </div>
                      <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
                        <Linkedin className="h-4 w-4" />
                        <span className="text-xs">LinkedIn</span>
                      </div>
                      <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
                        <Music className="h-4 w-4" />
                        <span className="text-xs">TikTok</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* AI Writer Tab */}
          <TabsContent value="ai_writer">
            <Card>
              <CardHeader>
                <CardTitle>AI Writer</CardTitle>
                <CardDescription>Generate high-quality content tailored to your brand voice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">AI Features</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <PenTool className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Multi-tone model</p>
                          <p className="text-sm text-muted-foreground">Empathetic, Expert, Edgy, Playful, Visionary</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <FileText className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Output types</p>
                          <p className="text-sm text-muted-foreground">Captions, Blogs, Emails, Carousels, Scripts</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Content brief input</p>
                          <p className="text-sm text-muted-foreground">Topic, Goal, CTA, Length</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Share2 className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Rewrite, Expand, Summarize tools</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Output</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <FileText className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Fully editable content</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">AI version history</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <FileText className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Auto-categorized content library</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Track performance metrics and optimize strategy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">AI Features</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <BarChart3 className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Platform analytics API ingestion</p>
                          <p className="text-sm text-muted-foreground">IG, X, LinkedIn, TikTok</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <LineChart className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">AI insight generator</p>
                          <p className="text-sm text-muted-foreground">"Why this worked?" + suggestions</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Calendar className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Content heatmap</p>
                          <p className="text-sm text-muted-foreground">Best days, formats, tones</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <LineChart className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Campaign vs Organic tracking</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Output</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <FileText className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Weekly & monthly content performance reports</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">AI-generated strategic recommendations</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <LineChart className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">ROI tracker for campaigns</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Brand Reputation Tab */}
          <TabsContent value="brand_reputation">
            <Card>
              <CardHeader>
                <CardTitle>Brand Reputation</CardTitle>
                <CardDescription>Monitor and improve your online presence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">AI Features</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Social listening</p>
                          <p className="text-sm text-muted-foreground">Keyword + sentiment tracking</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <ThumbsUp className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Review aggregator</p>
                          <p className="text-sm text-muted-foreground">Google, Trustpilot, etc.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Crisis alerts</p>
                          <p className="text-sm text-muted-foreground">Spikes in negative mentions</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">AI Response Generator</p>
                          <p className="text-sm text-muted-foreground">For DMs, Reviews, Comments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Output</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <FileText className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Sentiment report</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <ThumbsUp className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Brand trust score</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Suggested responses + visibility actions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Brand Protection Tab */}
          <TabsContent value="brand_protection">
            <Card>
              <CardHeader>
                <CardTitle>Brand Protection</CardTitle>
                <CardDescription>Protect brand identity and IP</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">AI Features</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Shield className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Logo + visual watermark recognition</p>
                          <p className="text-sm text-muted-foreground">Across web (reverse image)</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Shield className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Trademark scanner</p>
                          <p className="text-sm text-muted-foreground">AI checks for potential brand/IP conflicts</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Domain + handle protection alerts</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <FileText className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">AI-generated DMCA takedown templates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Output</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Shield className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Brand protection dashboard</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Threat level indicator</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-4 w-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Step-by-step action plan for infringements</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
