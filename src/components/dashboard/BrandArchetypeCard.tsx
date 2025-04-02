
import { Lightbulb, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

interface BrandArchetypeCardProps {
  progress: number;
}

const BrandArchetypeCard = ({ progress }: BrandArchetypeCardProps) => {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Your Brand Archetype</CardTitle>
        <CardDescription>Based on your profile analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 bg-brand-purple/20 rounded-full flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-brand-purple" />
              </div>
              <div>
                <h3 className="text-xl font-bold">The Innovator</h3>
                <p className="text-sm text-muted-foreground">
                  Forward-thinking, disruptive, and progressive
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Brand Strength</span>
                <span className="text-sm font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            <p className="text-sm">
              Your brand positioning resonates with audiences looking for fresh perspectives and 
              cutting-edge solutions. Continue to highlight your innovative approach in your content.
            </p>
            <div className="flex justify-between text-sm">
              <Link to="/dashboard/optimize" className="text-brand-purple hover:underline">
                Complete Brand Profile
              </Link>
              <Link to="/dashboard/optimize" className="text-brand-purple hover:underline">
                View Detailed Analysis →
              </Link>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center">
              <Lightbulb className="h-4 w-4 text-brand-purple mr-2" />
              Today's Tip
            </h4>
            <p className="text-sm mb-4">
              Share a "behind the scenes" post about your creative process. Innovator archetypes 
              build stronger connections when they reveal how they develop their ideas.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              <FileText className="h-4 w-4 mr-2" /> 
              Generate This Post
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BrandArchetypeCard;
