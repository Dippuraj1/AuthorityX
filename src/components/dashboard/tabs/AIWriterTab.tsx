
import { PenTool, FileText, MessageCircle, Share2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AIWriterTab = () => {
  return (
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
                  <FileText className="h-4 w-4 text-brand-purple" />
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
  );
};

export default AIWriterTab;
