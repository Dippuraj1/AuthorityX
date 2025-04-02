
import { BarChart, CalendarRange, Clock, FileText, Link2, Lightbulb, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Link } from "react-router-dom";

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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">{todayDate}</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button variant="outline" className="h-10">
              <RefreshCw className="h-4 w-4 mr-2" /> Refresh
            </Button>
            <Button className="h-10 bg-brand-purple hover:bg-brand-dark-purple">
              <FileText className="h-4 w-4 mr-2" /> Generate Post
            </Button>
          </div>
        </div>

        {/* Brand Archetype Card */}
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

        {/* Content Performance Metrics */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Content Performance</CardTitle>
            <CardDescription>Last 30 days engagement metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Total Reach</span>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold mt-2">12,543</p>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <span className="text-emerald-500 mr-0.5">↑ 18%</span> vs. previous period
                </p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Engagements</span>
                  <Link2 className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold mt-2">874</p>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <span className="text-emerald-500 mr-0.5">↑ 24%</span> vs. previous period
                </p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Avg. Time</span>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold mt-2">2:45</p>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <span className="text-emerald-500 mr-0.5">↑ 8%</span> vs. previous period
                </p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Publishing</span>
                  <CalendarRange className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold mt-2">9/12</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Posts published this month
                </p>
              </div>
            </div>
            
            <div className="mt-6 h-80 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center p-6">
                <BarChart className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-1">Performance Chart</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  Connect your LinkedIn and Twitter accounts to see detailed performance metrics for your content.
                </p>
                <Button className="mt-4 bg-brand-purple hover:bg-brand-dark-purple">
                  Connect Accounts
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/dashboard/writer">
            <Card className="bg-card hover:border-brand-purple transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-brand-purple/20 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Create New Post</h3>
                    <p className="text-sm text-muted-foreground">Write AI-powered content</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/dashboard/calendar">
            <Card className="bg-card hover:border-brand-purple transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-brand-purple/20 rounded-full flex items-center justify-center">
                    <CalendarRange className="h-5 w-5 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold">View Calendar</h3>
                    <p className="text-sm text-muted-foreground">Manage your content schedule</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/dashboard/settings">
            <Card className="bg-card hover:border-brand-purple transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-brand-purple/20 rounded-full flex items-center justify-center">
                    <Link2 className="h-5 w-5 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Connect Accounts</h3>
                    <p className="text-sm text-muted-foreground">Link your social profiles</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
