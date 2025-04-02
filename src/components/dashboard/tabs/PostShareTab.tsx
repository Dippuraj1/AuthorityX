
import { 
  Share2, Hash, Palette, Calendar, CheckCircle, 
  LineChart, Heart, Instagram, Twitter, Linkedin, Music 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PostShareTab = () => {
  return (
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
  );
};

export default PostShareTab;
