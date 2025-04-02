
import { BarChart, CalendarRange, Clock, Link2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PerformanceMetricsCard = () => {
  return (
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
  );
};

export default PerformanceMetricsCard;
