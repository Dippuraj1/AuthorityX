
import { BarChart3, LineChart, Calendar, FileText, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AnalyticsTab = () => {
  return (
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
  );
};

export default AnalyticsTab;
