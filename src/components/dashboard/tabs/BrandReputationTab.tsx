
import { MessageCircle, ThumbsUp, AlertTriangle, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BrandReputationTab = () => {
  return (
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
  );
};

export default BrandReputationTab;
